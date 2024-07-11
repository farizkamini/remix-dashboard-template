import { createCookieSessionStorage } from "@remix-run/node";
export interface LoginRoleInterface {
	name: string;
}
export type SessionData = {
	userID: string;
	publicKey: string;
	role: string;
};

type SessionFlashData = {
	error: string;
};

const { getSession, commitSession, destroySession } =
	createCookieSessionStorage<SessionData, SessionFlashData>({
		cookie: {
			name: "__session",
			expires: new Date(Date.now() + 8 * 60 * 60 * 1000),
			httpOnly: true,
			maxAge: 8 * 60 * 60,
		},
	});

export { commitSession, destroySession, getSession };
