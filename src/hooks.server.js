import { validateSessionToken } from "./lib/server/sessions";
import { setSessionTokenCookie, deleteSessionTokenCookie } from "./lib/server/cookies";

export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get("session") ?? null;
	if (token === null) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const session = await validateSessionToken(token);
	if (session) {
		setSessionTokenCookie(event.cookies, token, session.expiresAt);
	} else {
		deleteSessionTokenCookie(event.cookies);
	}

	event.locals.session = session;
	event.locals.user = session?.user ?? null;
	return resolve(event);
};
