import { OptionsFilter, ComboboxItem } from "@mantine/core";

export const filterSelect: OptionsFilter = ({ options, search }) => {
	const splittedSearch = search.toLowerCase().trim().split(" ");
	return (options as ComboboxItem[]).filter((option) => {
		const words = option.label.toLowerCase().trim().split(" ");
		return splittedSearch.every((searchWord) =>
			words.some((word) => word.includes(searchWord)),
		);
	});
};
