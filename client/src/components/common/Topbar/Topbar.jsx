import React from "react";
import { Link } from "react-router-dom";
const Topbar = () => {
	return (
		<div className="text-white  flex   justify-between w-full items-center ">
			<div className="flex gap-2   w-[10%]">
				<div>
					<img
						src="./assets/fi-rr-angle-small-left.svg"
						alt=""
						className="bg-[#151415] rounded-full p-1 "
					/>
				</div>
				<div>
					<img
						src="./assets/fi-rr-angle-small-right.svg"
						alt=""
						className="bg-[#151415] rounded-full  p-1"
					/>
				</div>
			</div>
			<div className="flex gap-4  justify-end w-[30%]">
				{/* Logged in componenr */}
				{/* <div className="bg-white rounded-full flex justify-center   items-center p-2 px-4 text-sm  text-black">
					<div className="pt-1">Explore Premium</div>
				</div>
				<div className="bg-green-400 px-4 rounded-full flex justify-center items-center text-black ">
					<div className="pt-1">S</div>
				</div> */}

				{/* Not logged in component */}
				<Link
					to="/signup"
					className=" px-4 rounded-full hover:scale-105 duration-150 flex justify-center items-center ">
					<div className="pt-1">Sign Up</div>
				</Link>
				<Link
					to="/login"
					className="bg-white rounded-full flex hover:scale-105 duration-150 justify-center   items-center p-3 px-8 text-sm  text-black">
					<div className="pt-1 font-semibold">Log In</div>
				</Link>
			</div>
		</div>
	);
};

export default Topbar;
