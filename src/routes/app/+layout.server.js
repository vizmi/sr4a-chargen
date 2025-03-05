import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	if (!event.locals.session) {
		throw redirect(302, '/');
	}
	return {
		user: event.locals.session.user
	};
};
