import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize, currentColor } =
		useStateContext();
	const handleCloseSideBar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	const activeLink =
		"flex items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white";
	const normalLink =
		"flex items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-light-gray dark:hover:text-black";
	return (
		<div
			className="ml-3 pb-10 h-screen 
			overflow-auto md:overflow-hidden 
			md:hover:overflow-auto "
		>
			{activeMenu && (
				<>
					<div className="flex justify-between items-center">
						{" "}
						<Link
							className="items-center gap-3 ml-3 mt-4 
							flex text-xl font-extrabold tracking-tight
							text-slate-900 dark:text-white"
							to="/"
							onClick={handleCloseSideBar}
						>
							<SiShopware /> <span>Dashboard</span>
						</Link>
						<TooltipComponent content="Menu" position="BottomCenter">
							<button
								type="button"
								onClick={() =>
									setActiveMenu((prevActiveMenu) => !prevActiveMenu)
								}
								className="text-xl block rounded-full p-3 mt-4  
								hover:bg-light-gray md:hidden"
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className="mt-10">
						{links.map((item) => (
							<div key={item.title}>
								<p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
								{item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={handleCloseSideBar}
										style={({ isActive }) => ({
											background: isActive ? currentColor : "",
										})}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{link.icon}
										<span className="capitalize">{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
