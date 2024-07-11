export function useQueryDateFromIso(dateIsoStr: string): string {
	const dateStr = new Date(dateIsoStr);
	const timeZoneOffset = -7 * 60;
	dateStr?.setMinutes(dateStr?.getMinutes() - timeZoneOffset);
	return dateStr?.toISOString().split("T")[0];
}
export function useQueryDateFromTimestamp(
	timestamps: Date | undefined,
): string {
	if (!timestamps) {
		return "";
	}

	const timestamp = new Date(timestamps);

	const monthNames = [
		"januari",
		"februari",
		"maret",
		"april",
		"mei",
		"juni",
		"juli",
		"agustus",
		"september",
		"oktober",
		"november",
		"desember",
	];

	const day = timestamp.getUTCDate();
	const month = monthNames[timestamp.getUTCMonth()];
	const year = timestamp.getUTCFullYear();

	const result = `${day} ${month} ${year}`;
	return result;
}
