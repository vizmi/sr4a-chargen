import { redirect } from '@sveltejs/kit';
import { invalidateSession } from '$lib/server/sessions';
import { deleteSessionTokenCookie } from '$lib/server/cookies';
export async function GET({ locals, cookies }) {
	if (locals.session) {
		await invalidateSession(locals.session.id);
		deleteSessionTokenCookie(cookies);
	}
	throw redirect(302, '/');
}
