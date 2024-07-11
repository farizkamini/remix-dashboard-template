import { Session } from "@remix-run/node";
import { getSession } from "~/session.server";

export const SESSION_USER = "userID";
export const SESSION_PUBLIC_KEY = "publicKey";
export const ASC = "ASC";
export const DESC = "DESC";
export const DEFAULT_DATE = "2010-01-01";
export type FetchParams = {
	request: Request | undefined;
	permalink?: string;
	method: "GET" | "POST";
	body?: BodyInit | null | undefined;
};
export type FetchResponse = {
	data: any;
	status: boolean;
	message: string;
};
export const Fetch = async ({
	permalink,
	method,
	body,
	request,
}: FetchParams): Promise<any> => {
	try {
		const session = (await getSession(
			request?.headers.get("Cookie"),
		)) as Session;

		const res = await fetch(`${process.env.BASE_URL}${permalink}`, {
			method: method,
			headers: {
				"x-api-key": `${session.get(SESSION_USER)},${session.get(
					SESSION_PUBLIC_KEY,
				)}`,
				"x-token-key": `${process.env.X_TOKEN_KEY}`,
			},
			body: method === "POST" ? body : null,
		});
		const resData: FetchResponse = await res.json();
		return resData;
	} catch (e) {
		if (e instanceof Error) {
			console.error(e);
		}
	}
	return null;
};
