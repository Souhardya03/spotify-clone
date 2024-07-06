import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpotify } from "../../context/Context";

const SearchTopbar = (props) => {
	const { isLoggedIn, user, logoutUser } = useSpotify();
	const [show, setShow] = useState(false);

	return (
		<div className="text-white flex pt-2 lg:pt-0 justify-between w-full items-center">
			<div className="flex gap-2 items-center lg:w-[35%]">
				<div>
					<img
						src="./assets/fi-rr-angle-small-left.svg"
						alt="Back"
						className="bg-[#151415] w-10 rounded-full p-1"
					/>
				</div>
				<div>
					<img
						src="./assets/fi-rr-angle-small-right.svg"
						alt="Forward"
						className="bg-[#151415] rounded-full w-10 p-1"
					/>
				</div>
				<div className="border rounded-full lg:flex hidden items-center border-white w-full">
					<div className="pl-3">
						<img
							src="./assets/search-icon.png"
							className="w-5"
							alt="Search"
						/>
					</div>
					<input
						type="text"
						className="bg-transparent p-3 px-3 text-lg placeholder:text-sm w-full outline-none focus:outline-none"
						placeholder="What do you want to play?"
					/>
				</div>
			</div>

			<div className="flex gap-4 justify-end lg:w-[30%]">
				{/* Logged in component */}
				{isLoggedIn ? (
					<>
						<div
							className="bg-white rounded-full flex justify-center items-center p-2 px-4 text-sm text-black cursor-pointer"
							onClick={() => props.show(true)}>
							<div className="pt-1">Upload Song</div>
						</div>
						<div
							className="bg-green-400 cursor-pointer px-4 rounded-full flex justify-center items-center text-black"
							onClick={() => setShow(!show)}>
							<div className="pt-1 uppercase">
								{user.firstName.substring(0, 1)}
							</div>
						</div>
					</>
				) : (
					<>
						<Link
							to="/signup"
							className="px-4 rounded-full hover:scale-105 duration-150 flex justify-center items-center">
							<div className="pt-1">Sign Up</div>
						</Link>
						<Link
							to="/login"
							className="bg-white rounded-full flex hover:scale-105 duration-150 justify-center items-center p-3 px-8 text-sm text-black">
							<div className="pt-1 font-semibold">Log In</div>
						</Link>
					</>
				)}
			</div>
			<div
				className={`lg:w-[18%] ${
					show
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-4 pointer-events-none"
				} right-10 top-20 duration-200 text-sm bg-[#282828] absolute rounded-md`}>
				<div className="flex flex-col p-2">
					<div className="hover:bg-[#3d3b3b] cursor-pointer rounded-sm p-3">
						Profile
					</div>
					<div className="hover:bg-[#3d3b3b] w-full cursor-pointer rounded-sm p-3">
						Upgrade to Premium
					</div>
					<div className="hover:bg-[#3d3b3b] cursor-pointer rounded-sm p-3">
						Settings
					</div>
					<div className="border border-[#484849] w-full"></div>
					<div
						className="hover:bg-[#3d3b3b] cursor-pointer rounded-sm p-3 pt-4"
						onClick={logoutUser}>
						Log out
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default SearchTopbar;
