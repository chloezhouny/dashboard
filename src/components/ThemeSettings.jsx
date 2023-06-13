import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
	const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
		useStateContext();
	return (
		<div className="fixed top-0 right-0 nav-item w-screen bg-half-transparent ">
			<div
				className="float-right w-400 h-screen 
			bg-white dark:bg-[#484B52] dark:text-gray-200"
			>
				<div className="flex justify-between items-center p-4 ml-4">
					<p className="text-xl font-semibold">Settings</p>
					<button
						type="button"
						onClick={() => setThemeSettings(false)}
						style={{ color: "rgb(153, 171, 180", borderRadius: "50" }}
						className="p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray"
					>
						<MdOutlineCancel />
					</button>
				</div>
				<div className="flex-col p-4 ml-4 border-t-1 border-color">
					<p className="text-lg font-semibold">Theme Options</p>
					<div className="mt-4">
						<input
							type="radio"
							id="light"
							name="theme"
							value="Light"
							className="cursor-pointer"
							onChange={setMode}
							checked={currentMode === "Light"}
						/>
						<label htmlFor="light" className="ml-2 text-md cursor-pointer">
							Light
						</label>
					</div>
					<div className="mt-4">
						<input
							type="radio"
							id="dark"
							name="theme"
							value="Dark"
							className="cursor-pointer"
							onChange={setMode}
							checked={currentMode === "Dark"}
						/>
						<label htmlFor="dark" className="ml-2 text-md cursor-pointer">
							Dark
						</label>
					</div>
				</div>
				<div className="flex-col p-4 ml-4 border-t-1 border-color">
					<p className="text-lg font-semibold">Theme Colors</p>
					<div className="flex gap-3">
						{themeColors.map((item, index) => (
							<TooltipComponent
								key={index}
								content={item.name}
								position="TopCenter"
							>
								<div className="relative mt-2 cursor-pointer flex gap-5 items-center">
									<button
										type="button"
										className="h-10 w-10 rounded-full cursor-pointer"
										style={{ backgroundColor: item.color }}
										onClick={() => setColor(item.color)}
									>
										<BsCheck
											className={`ml-2 text-2xl text-white ${
												currentColor === item.color ? "block" : "hidden"
											}`}
										/>
									</button>
								</div>
							</TooltipComponent>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeSettings;
