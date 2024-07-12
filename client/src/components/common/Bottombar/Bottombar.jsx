import React from "react";
import { NavLink } from "react-router-dom";
const Bottombar = () => {
	return (
		<div className="text-white z-[999] fixed w-full bottom-0 bg-black lg:hidden flex justify-between p-4 pb-0 items-center ">
			<NavLink
				to="/"
				className="flex gap-1 flex-col items-center">
				<img
					src="/assets/home-icon.svg"
					className="w-6"
					alt=""
				/>
				<div className="text-sm">Home</div>
			</NavLink>
			<NavLink
				to="/search"
				className="flex gap-1 flex-col items-center">
				<img
					src="/assets/search-icon.png"
					className="w-6"
					alt=""
				/>
				<div className="text-sm">Search</div>
			</NavLink>
			<div className="flex gap-1 flex-col items-center">
				<img
					src="/assets/library-icon.svg"
					className="w-6"
					alt=""
				/>
				<div className="text-sm">Your Library</div>
			</div>
			<div className="flex flex-col gap-1 items-center">
				<img
					src="/assets/iconmonstr-spotify-1-240.png"
					className="w-6"
					alt=""
				/>
				<div className="text-sm">Get App</div>
			</div>
		</div>
	);
};

export default Bottombar;
