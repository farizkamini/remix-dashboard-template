import { SidebarAdmin } from "./sidebar_admin";

export const DashboardSideBar = () => {
	return (
		<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
			<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
				<div className="flex h-16 shrink-0 items-center">
					<img
						alt="Your Company"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						className="h-8 w-auto"
					/>
				</div>
				<SidebarAdmin />
			</div>
		</div>
	);
};
