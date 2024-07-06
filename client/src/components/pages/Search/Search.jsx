import React, { useEffect, useState } from "react";
import SearchTopbar from "./SearchTopbar";

const Search = () => {
	const [showhover, setshowhover] = useState(false);
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
			<div
				className={`bg-[#0000009b] fixed items-center left-0 top-0 flex p-4 justify-center w-screen h-screen transition-opacity duration-200 ${
					show ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setShow(false)}>
				<div
					onClick={(e) => e.stopPropagation()}
					className="rounded-md lg:space-y-8 gap-4 flex lg:p-10 p-8 flex-col items-center lg:w-[30%]  bg-[#272626cd]">
					<div className="w-full space-y-1">
						<div className="w-full gap-3 lg:mb-8 mb-6 text-white flex-col flex items-center justify-center">
							<img
								src="./assets/iconmonstr-spotify-1-240.png"
								className="w-10"
								alt=""
							/>
							<div className="text-xl">Upload your song on Spotify</div>
						</div>
						<label
							for="name"
							className="text-white pl-2">
							Name of the song
						</label>
						<div className="border rounded-full flex items-center border-white w-full">
							<input
								id="name"
								name="name"
								type="text"
								className="bg-transparent pl-4 p-3 text-white px-3 text-lg placeholder:text-sm w-full outline-none focus:outline-none"
								placeholder="Name of the song"
							/>
						</div>
					</div>
					<div className="w-full space-y-1">
						<label
							for="thumbnail"
							className="text-white pl-2">
							Thumbnail of the song
						</label>
						<div className="border rounded-full flex items-center border-white w-full">
							<input
								id="thumbnail"
								name="thumbnail"
								type="text"
								className="bg-transparent pl-4 p-3 text-white px-3 text-lg placeholder:text-sm w-full outline-none focus:outline-none"
								placeholder="Thumbnail of the song"
							/>
						</div>
					</div>
					<div className="w-full space-y-1">
						<label
							for="track"
							className="text-white pl-2">
							Track of the song
							<div
								className="relative border mt-1 rounded-full flex justify-end  items-center border-white w-full"
								onMouseEnter={() => setshowhover(true)}
								onMouseLeave={() => setshowhover(false)}>
								<div className="text-gray-500 ml-4 w-full">
									Click here to upload
								</div>
								<input
									id="track"
									type="file"
									className="bg-transparent pl-4 p-2  text-white px-3 text-lg placeholder:text-sm opacity-0 w-[0%] outline-none focus:outline-none"
									placeholder="Click here to upload the track"
								/>
								<img
									src="./assets/upload-icon.png"
									className="w-8 pr-3 mr-2"
									alt=""
								/>
								<div
									className={`p-2 ${
										showhover
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4"
									} text-white flex items-center justify-center mb-14 text-xs rounded-md bg-black absolute transition-all duration-300`}>
									Upload
								</div>
							</div>
						</label>
					</div>
					<div className=" p-3 px-10 rounded-full text-white bg-gray-700 border-white">
						Upload
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
