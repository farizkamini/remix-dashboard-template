import { Session } from "@remix-run/node";
import { getSession, SessionData } from "~/session.server";

export async function useSession(
	request: Request,
): Promise<Session<SessionData>> {
	return getSession(request.headers.get("Cookie"));
}
export async function useFormData(request: Request) {
	return await request.formData();
}
