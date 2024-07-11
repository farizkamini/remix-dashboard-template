import { Bars3Icon } from "@heroicons/react/24/outline";

type Props = {
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DashboardAppBar = ({ setSidebarOpen }: Props) => {
	return (
		<div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
			<button
				type="button"
				onClick={() => setSidebarOpen(true)}
				className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
			>
				<span className="sr-only">Open sidebar</span>
				<Bars3Icon aria-hidden="true" className="h-6 w-6" />
			</button>
			<div className="flex-1 text-sm font-semibold leading-6 text-white">
				Dashboard
			</div>
			<a href="#">
				<span className="sr-only">Your profile</span>
				<img
					alt=""
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					className="h-8 w-8 rounded-full bg-gray-800"
				/>
			</a>
		</div>
	);
};
