import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";

import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
	const { currentColor, handleUnClick } = useStateContext();

	return (
		<div className="nav-item absolute right-1 top-16 w-96 p-8 rounded-lg bg-white dark:bg-[#42464D]">
			<div className="flex justify-between items-center">
				<p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
				<button
					type="button"
					style={{ color: "rgb(153, 171, 180", borderRadius: "50" }}
					className="p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray rounded-full"
					onClick={handleUnClick}
				>
					<MdOutlineCancel />
				</button>
			</div>

			<div className="flex gap-5 items-center mt-6 pb-6 border-color border-b-1">
				<img
					className="rounded-full w-24 h-24"
					src={avatar}
					alt="user-profile"
				/>
				<div>
					<p className="font-semibold dark:text-gray-200">Michael Roberts</p>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						Administrator
					</p>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						info@shop.com
					</p>
				</div>
			</div>
			<div>
				{userProfileData.map((item, index) => (
					<div
						key={index}
						className="flex gap-5 p-4 border-b-1 border-color cursor-pointer 
						hover:bg-light-gray dark:hover:bg-[#42464D]"
					>
						<button
							type="button"
							style={{ color: item.iconColor, backgroundColor: item.iconBg }}
							className=" p-3 text-xl rounded-lg hover:bg-light-gray"
						>
							{item.icon}
						</button>
						<div>
							<p className="font-semibold dark:text-gray-200 ">{item.title}</p>
							<p className="text-gray-500 text-sm dark:text-gray-400">
								{" "}
								{item.desc}{" "}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-5">
				<Button
					color="white"
					bgColor={currentColor}
					text="Logout"
					borderRadius="10px"
					width="100%"
				/>
			</div>
		</div>
	);
};

export default UserProfile;
