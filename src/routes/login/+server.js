import { OAuth2Client } from 'google-auth-library';
import { SECRET_CLIENT_ID } from '$env/static/private';
import { generateSessionToken, createSession } from '$lib/server/sessions';
import { setSessionTokenCookie } from '$lib/server/cookies';
import { redirect } from '@sveltejs/kit';

export const POST = async ({ request, cookies }) => {
	console.debug('Credential received');
	const contentType = request.headers.get('content-type');
	if (!contentType || !contentType.includes('application/x-www-form-urlencoded')) {
		console.error('Invalid content type');
		return new Response('Invalid content type', { status: 400 });
	}
	const formData = await request.formData();
	if (!formData || !formData.has('credential')) {
		console.error('Invalid form data', formData);
		return new Response('Invalid form data', { status: 400 });
	}
	const credential = formData.get('credential');
	try {
		const client = new OAuth2Client();
		const ticket = await client.verifyIdToken({
			idToken: credential,
			audience: SECRET_CLIENT_ID
		});
		const payload = ticket.getPayload();

		const user = {
			sub: payload['sub'],
			email: payload['email'],
			given_name: payload['given_name'],
			picture: payload['picture']
		};
		const expiresAt = new Date(payload['exp'] * 1000);

		const token = generateSessionToken();
		createSession(token, user, expiresAt);
		setSessionTokenCookie(cookies, token, expiresAt);
	} catch (error) {
		console.error('OAuthClient error', error);
		return new Response('Error', { status: 500 });
	}
	return redirect(303, '/app');
};
