import React, { useState} from "react";
import { useSpotify } from "../../context/Context";

const PlaylistModal = (props) => {
    
    
	const { createPlaylist } = useSpotify();

	const [playlistData, setplaylistData] = useState({
		name: "",
		thumbnail: "",
	});

	const handleChange = (e) => {
		setplaylistData({ ...playlistData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		createPlaylist(playlistData);
		props.setShow(false);
	};

	return (
		<div
			className={`bg-[#0000009b] fixed items-center left-0 top-0 flex p-4 justify-center w-screen h-screen transition-opacity duration-200 ${
				props.show ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			onClick={() => props.setShow(false)}>
			<div
				onClick={(e) => e.stopPropagation()}
				className="rounded-md lg:space-y-3 gap-4 flex lg:p-10 p-8 flex-col items-center lg:w-[30%]  bg-[#272626cd]">
				<div className="w-full space-y-1">
					<div className="w-full gap-3 lg:mb-8 mb-6 text-white flex-col flex items-center justify-center">
						<img
							src="./assets/iconmonstr-spotify-1-240.png"
							className="w-10"
							alt=""
						/>
						<div className="text-xl">Create your playlist on Spotify</div>
					</div>
					<label
						htmlFor="name"
						className="text-white pl-2">
						Name of the playlist
					</label>
					<div className="border rounded-full flex items-center border-white w-full">
						<input
							id="name"
							value={playlistData.name}
							onChange={handleChange}
							name="name"
							type="text"
							className="bg-transparent pl-4 p-3 text-white px-3 text-lg placeholder:text-sm w-full outline-none focus:outline-none"
							placeholder="Name of the playlist"
						/>
					</div>
				</div>
				<div className="w-full space-y-1">
					<label
						htmlFor="thumbnail"
						className="text-white pl-2">
						Thumbnail of the playlist
					</label>
					<div className="border rounded-full flex items-center border-white w-full">
						<input
							id="thumbnail"
							name="thumbnail"
							value={playlistData.thumbnail}
							onChange={handleChange}
							type="text"
							className="bg-transparent pl-4 p-3 text-white px-3 text-lg placeholder:text-sm w-full outline-none focus:outline-none"
							placeholder="Thumbnail of the playlist"
						/>
					</div>
				</div>
				<div
					className=" p-3 px-10 rounded-full cursor-pointer text-white bg-gray-700 border-white"
					onClick={handleSubmit}>
					Create
				</div>
			</div>
		</div>
	);
};

export default PlaylistModal;
