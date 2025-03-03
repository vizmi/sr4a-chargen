/**
 * @module sessions
 * @description Session management
 * Uses in memory session management for simplicity. Not suitable for multiple server instances.
 * In such an environment, use Redis: https://lucia-auth.com/sessions/basic-api/redis
 */

import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from '@oslojs/encoding';
import { sha256 } from '@oslojs/crypto/sha2';

const sessions = new Map();

export function generateSessionToken() {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes);
	const token = encodeBase32LowerCaseNoPadding(bytes);
	return token;
}

export function createSession(token, user, expiresAt) {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session = {
		id: sessionId,
		user,
		expiresAt: expiresAt
	};
	sessions.set(sessionId, session);
	return session;
}

export async function validateSessionToken(token) {
	console.debug('validateSessionToken', token);
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session = sessions.get(sessionId);
	if (!session) {
		console.debug('Session cannot be found');
		return null;
	}
	if (Date.now() >= session.expiresAt) {
		sessions.delete(sessionId);
		console.debug('Session has expired');
		return null;
	}
	console.debug('Session is valid');
	return session;
}

export async function invalidateSession(sessionId) {
	console.debug('Attempting to invalidate session:', sessionId);
	const sessionExists = sessions.has(sessionId);
	console.debug('Session exists?:', sessionExists);
	if (!sessionExists) {
		console.debug('Session cannot be found');
		return;
	}
	sessions.delete(sessionId);
	console.debug('Session has been deleted: ', sessionId);
}

export async function invalidateAllSessions(userId) {
	Array.from(sessions)
		.filter(([, session]) => session.user.id === userId)
		.map(([sessionId]) => sessionId)
		.forEach((sessionId) => invalidateSession(sessionId));
}
