import { ReactNode, useState } from "react";
import { DashboardSideBar } from "./sidebar";
import { DashboardDrawer } from "./drawer";
import { DashboardAppBar } from "./appbar";
type Props = {
	content: ReactNode;
};

export const Dashboard = ({ content }: Props) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<div>
				<DashboardDrawer
					setSidebarOpen={setSidebarOpen}
					sidebarOpen={sidebarOpen}
				/>
				<DashboardSideBar />
				<DashboardAppBar setSidebarOpen={setSidebarOpen} />
				<main className="py-10 lg:pl-72">
					<div className="px-4 sm:px-6 lg:px-8">{content}</div>
				</main>
			</div>
		</>
	);
};
