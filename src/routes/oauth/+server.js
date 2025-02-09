import { OAuth2Client } from 'google-auth-library';
import { SECRET_CLIENT_ID } from '$env/static/private';

export const POST = async ({ request }) => {
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

		const sub = payload['sub'];
		const email = payload['email'];
		const name = payload['name'];

		const message = `sub: ${sub}; email: ${email}; name: ${name}`;
		console.debug(message);
		return new Response(message, { status: 200 });
	} catch (error) {
		console.error('OAuthClient error', error);
		return new Response('Error', { status: 500 });
	}
};
