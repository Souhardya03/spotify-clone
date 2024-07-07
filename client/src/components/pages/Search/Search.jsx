import React, { useEffect, useState } from "react";
import SearchTopbar from "./SearchTopbar";
import UploadSongModal from "../Modal/UploadSongModal";

const Search = () => {
	useEffect(() => {
		document.title = "Spotify | Search";
	}, []);
	const [show, setShow] = useState(false);
	return (
		<div className="contentbackground p-2 lg:p-4 h-[90vh] rounded-md lg:ml-3 w-full relative">
			<SearchTopbar show={setShow} />
			<div className="border rounded-full mt-4 flex lg:hidden items-center border-white w-full">
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
			<div>
				<h1 className="text-2xl lg:mt-8 mt-4 font-semibold text-white">
					Your top genres
				</h1>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4 lg:mt-8">
					<div className=" bg-[#303030] w-full  h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="./assets/fi-ss-heart.svg"
								alt="Liked Songs"
								className="object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1">Liked Songs</div>
						</div>
					</div>
					<div className=" bg-[#303030] w-full h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="./assets/neffex_playlist.svg"
								alt="Neffex Playlist"
								className="object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1">Neffex Playlist</div>
						</div>
					</div>
					<div className=" bg-[#303030] w-full  h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="./assets/kda.svg"
								alt="K / DA"
								className="object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1">K / DA</div>
						</div>
					</div>
					<div className=" bg-[#303030] w-full  h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="./assets/dance.svg"
								alt="Dance Mix"
								className="object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1">Dance Mix</div>
						</div>
					</div>
				</div>
			</div>
			<UploadSongModal show={show} setShow={setShow}/>
		</div>
	);
};

export default Search;
