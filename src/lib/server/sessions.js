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
	console.log('validateSessionToken', token);
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session = sessions.get(sessionId);
	console.log('session', session);
	if (!session) {
		return null;
	}
	console.log('session.expiresAt', session.expiresAt);
	if (Date.now() >= session.expiresAt) {
		sessions.delete(sessionId);
		return null;
	}
	console.log('session', session);
	return session;
}

export async function invalidateSession(sessionId) {
	console.log('Attempting to invalidate session:', sessionId);
	const sessionExists = sessions.has(sessionId);
	console.log('Session exists?:', sessionExists);
	if (sessionExists) {
		const session = sessions.get(sessionId);
		console.log('Session being deleted:', session);
	}
	sessions.delete(sessionId);
	console.log('Session map size after deletion:', sessions.size);
}

export async function invalidateAllSessions(userId) {
	const sessionsToDelete = [];
	sessions.forEach((session, sessionId) => {
		if (session.userId === userId) {
			sessionsToDelete.push(sessionId);
		}
	});
	sessionsToDelete.forEach((sessionId) => sessions.delete(sessionId));
}
