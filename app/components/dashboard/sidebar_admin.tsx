import { NavLink } from "@remix-run/react";
import { MenuAdmin, MenuAdminExtra } from "./menu_admin";
import { cn } from "~/lib/utils";

export const SidebarAdmin = () => {
	return (
		<nav className="flex flex-1 flex-col">
			<ul role="list" className="flex flex-1 flex-col gap-y-7">
				<li>
					<ul role="list" className="-mx-2 space-y-1">
						{MenuAdmin.map((item) => (
							<li key={item.name}>
								<NavLink
									to={item.href}
									className={({ isActive }) =>
										cn(
											isActive
												? "bg-gray-800 text-white"
												: "text-gray-400 hover:bg-gray-800 hover:text-white",
											"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
										)
									}
								>
									<item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</li>
				<li>
					<div className="text-xs font-semibold leading-6 text-gray-400">
						Extra menu
					</div>
					<ul role="list" className="-mx-2 mt-2 space-y-1">
						{MenuAdminExtra.map((team) => (
							<li key={team.name}>
								<NavLink
									to={team.href}
									className={({ isActive }) =>
										cn(
											isActive
												? "bg-gray-800 text-white"
												: "text-gray-400 hover:bg-gray-800 hover:text-white",
											"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
										)
									}
								>
									<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
										{team.initial}
									</span>
									<span className="truncate">{team.name}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</li>
				<li className="-mx-6 mt-auto">
					<a
						href="#"
						className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
					>
						<img
							alt=""
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							className="h-8 w-8 rounded-full bg-gray-800"
						/>
						<span className="sr-only">Your profile</span>
						<span aria-hidden="true">Tom Cook</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};
