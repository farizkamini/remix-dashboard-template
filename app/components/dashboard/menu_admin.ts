import {
	HomeIcon,
	UsersIcon,
	FolderIcon,
	CalendarIcon,
	DocumentDuplicateIcon,
	ChartPieIcon,
} from "@heroicons/react/24/outline";

export const MenuAdmin = [
	{ name: "Dashboard", href: "#", icon: HomeIcon, current: true },
	{ name: "Team", href: "#", icon: UsersIcon, current: false },
	{ name: "Projects", href: "#", icon: FolderIcon, current: false },
	{ name: "Calendar", href: "#", icon: CalendarIcon, current: false },
	{ name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
	{ name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

export const MenuAdminExtra = [
	{ id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
	{ id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
	{ id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
