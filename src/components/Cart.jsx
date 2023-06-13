import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Button } from ".";
import { cartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Cart = () => {
	const { currentColor, handleUnClick } = useStateContext();
	return (
		<div className="fixed top-0 right-0 nav-item w-full bg-half-transparent ">
			<div
				className="float-right md:w-400 p-8 h-screen 
			bg-white dark:[#484B52] dark:text-gray-200
			duration-1000 ease-in-out transition-all"
			>
				<div className="flex justify-between items-center">
					<p className="text-lg font-semibold">Shopping Cart</p>
					<button
						type="button"
						style={{ color: "rgb(153, 171, 180", borderRadius: "50" }}
						className="p-3 text-2xl rounded-full hover:drop-shadow-xl hover:bg-light-gray"
						onClick={handleUnClick}
					>
						<MdOutlineCancel />
					</button>
				</div>
				{cartData.map((item, index) => (
					<div key={index}>
						<div className="flex items-center leading-9 gap-5 p-4 border-b-1 border-color dark:border-gray-600">
							<img
								className="rounded-lg h-80 w-24"
								src={item.image}
								alt={item.name}
							/>
							<div>
								<p className="font-semibold">{item.name}</p>
								<p className="font-semibold text-sm text-gray-600 dark:text-gray-400">
									{item.category}
								</p>
								<div className="flex gap-4 items-center mt-2">
									<p className="font-semibold text-lg">{item.price}</p>
									<div className="flex items-center border-1 border-r-0 border-color rounded">
										<p className="p-2 border-r-1 border-color dark:border-gray-600 text-red-600">
											<AiOutlineMinus />
										</p>
										<p className="p-2 border-r-1 border-color dark:border-gray-600">
											0
										</p>
										<p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
											<AiOutlinePlus />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="mt-3 mb-3">
					<div className="flex justify-between items-center">
						<p className="text-gray-500 dark:text-gray-200">SubTotal</p>
						<p className="font-semibold">$890</p>
					</div>
					<div className="flex justify-between items-center mt-3">
						<p className="text-gray-500 dark:text-gray-200">Total</p>
						<p className="font-semibold">$890</p>
					</div>
				</div>
				<div className="mt-5">
					<Button
						color="white"
						bgColor={currentColor}
						text="Place Order"
						borderRadius="10px"
						width="100%"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cart;
