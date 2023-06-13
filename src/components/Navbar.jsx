import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<TooltipComponent content={title} position="BottomCenter">
		<button
			type="button"
			onClick={customFunc}
			style={{ color }}
			className="relative p-3 text-xl rounded-full 
		hover:bg-light-gray"
		>
			<span
				style={{ background: dotColor }}
				className="inline-flex absolute h-2 w-2 right-2 top-2 
			 rounded-full"
			/>
			{icon}
		</button>
	</TooltipComponent>
);

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreenSize,
		currentColor,
	} = useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener("resize", handleResize);
		handleResize();
		return window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
			<NavButton
				title="Menu"
				customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				color={currentColor}
				icon={<AiOutlineMenu />}
			></NavButton>
			<div className="flex">
				<NavButton
					title="Cart"
					customFunc={() => handleClick("cart")}
					color={currentColor}
					icon={<FiShoppingCart />}
				></NavButton>
				<NavButton
					title="Chat"
					dotColor="#03C9D7"
					customFunc={() => handleClick("chat")}
					color={currentColor}
					icon={<BsChatLeft />}
				></NavButton>
				<NavButton
					title="Noftifications"
					dotColor="#03C9D7"
					customFunc={() => handleClick("notification")}
					color={currentColor}
					icon={<RiNotification3Line />}
				></NavButton>
				<TooltipComponent content="Profile" position="BottomCenter">
					<div
						className="flex item-center gap-2 p-1 
					cursor-pointer hover:bg-light-gray rounded-lg "
						onClick={() => handleClick("userProfile")}
					>
						<img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
						<p>
							<span className="text-14 text-gray-400">Hi, </span>{" "}
							<span className="ml-1 text-14 font-bold text-gray-400 ">
								Michael
							</span>
						</p>
						<MdKeyboardArrowDown className="text-14 text-gray-400" />
					</div>
				</TooltipComponent>
				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;