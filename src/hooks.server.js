import { validateSessionToken } from './lib/server/sessions';
import { deleteSessionTokenCookie } from './lib/server/cookies';

/**
 * Server-side hook for SvelteKit that handles session management and user authentication.
 *
 * This hook runs on every request and:
 * 1. Checks for a session cookie
 * 2. Validates the session cookie's token if present
 */
export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('session');
	if (!token) {
		event.locals.session = null;
		return resolve(event);
	}

	const session = await validateSessionToken(token);
	if (!session) {
		deleteSessionTokenCookie(event.cookies);
		event.locals.session = null;
		return resolve(event);
	}

	event.locals.session = session;
	return resolve(event);
};
