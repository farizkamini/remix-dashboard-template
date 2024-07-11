export function useRupiah(value: string) {
	if (typeof value !== "string") {
		value = String(value);
	}
	const cleanedValue = parseFloat(value.replace(/[^\d\-+\.]/g, ""));
	const formatter = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});
	return formatter.format(cleanedValue);
}

export function UseCommaSeparator(num: number): string {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
