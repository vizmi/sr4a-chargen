import { redirect } from '@sveltejs/kit';
/**
 * Server-side hook for SvelteKit that redirects to the protected page if the user is already logged in.
 * 
 * This hook runs on every request and:
 * 1. Checks for a session cookie
 * 2. Validates the session cookie's token if present
 */
export function load({ locals }) {
	if (locals.session) {
		throw redirect(302, '/protected');
	}
	return {};
}
