export function useQueryDate(dateIsoStr: string): string {
	const dateStr = new Date(dateIsoStr);
	const timeZoneOffset = -7 * 60;
	dateStr?.setMinutes(dateStr?.getMinutes() - timeZoneOffset);
	return dateStr?.toISOString().split("T")[0];
}
