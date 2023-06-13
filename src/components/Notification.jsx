import React from "react";

import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";

import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
	const { currentColor, handleUnClick } = useStateContext();
	return (
		<div className="nav-item absolute right-5 md:right-52 top-16 w-96 p-8 rounded-lg bg-white dark:bg-[#42464D]">
			<div className="flex justify-between items-center">
				<div className="flex gap-3">
					<p className="font-semibold text-lg dark:text-gray-200">
						Notifications
					</p>
					<button
						type="button"
						className="p-1 px-2 bg-orange text-xs dark:text-white rounded"
					>
						4 New
					</button>
				</div>
				<button
					type="button"
					style={{ color: "rgb(153, 171, 180", borderRadius: "50" }}
					className="p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray rounded-full"
					onClick={handleUnClick}
				>
					<MdOutlineCancel />
				</button>
			</div>
			<div className="mt-5">
				{chatData.map((item, index) => (
					<div
						key={index}
						className="flex items-center gap-5 p-3 border-b-1 border-color leading-8 cursor-pointer"
					>
						<div className="relative">
							<img
								className="rounded-full h-10 w-10"
								src={item.image}
								alt={item.message}
							/>
							<span
								style={{ background: item.dotColor }}
								className="absolute inline-flex rounded-full h-2 w-2 right-0 top-1"
							/>
						</div>
						<div>
							<p className="font-semibold dark:text-gray-200">{item.message}</p>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{item.desc}
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								{item.time}
							</p>
						</div>
					</div>
				))}
				<div className="mt-5">
					<Button
						color="white"
						bgColor={currentColor}
						text="See all notifications"
						borderRadius="10px"
						width="100%"
					/>
				</div>
			</div>
		</div>
	);
};

export default Notification;
