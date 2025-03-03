export function setSessionTokenCookie(cookies, token, expires) {
	cookies.set('session', token, {
		httpOnly: true,
		sameSite: 'lax',
		expires,
		path: '/'
	});
}

export function deleteSessionTokenCookie(cookies) {
	cookies.set('session', '', {
		httpOnly: true,
		sameSite: 'lax',
		maxAge: 0,
		path: '/'
	});
}
