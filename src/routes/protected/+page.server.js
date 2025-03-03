export function load({ locals }) {
	return {
		user: locals.session.user
	};
}
