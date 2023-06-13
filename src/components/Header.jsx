import React from "react";

const Header = ({ category, title }) => {
	return (
		<div className="mb-10">
			<p className="text-gray-400">{category}</p>
			<p className="text-xl text-slate-900 font-extrabold tracking-tight dark:text-white">
				{title}
			</p>
		</div>
	);
};

export default Header;
