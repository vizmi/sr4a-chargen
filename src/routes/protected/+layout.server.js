import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
	if (event.locals.user === null) {
		throw redirect(302, "/");
	}
	return {};
};
