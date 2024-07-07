import React, { useState, useEffect } from "react";
import { useSpotify } from "../../context/Context";

const UploadSongModal = (props) => {
	const [showhover, setshowhover] = useState(false);
	const { uploadSongWidget, uploadSong } = useSpotify();
	const [displayname, setDisplayname] = useState();
	const [trackUrl, setTrackUrl] = useState();
	const [songData, setsongData] = useState({
		name: "",
		thumbnail: "",
		track: "",
	});

	useEffect(() => {
		if (trackUrl) {
			setsongData((prevData) => ({
				...prevData,
				track: trackUrl,
			}));
		}
	}, [trackUrl]);

	const CloudinaryUpload = async () => {
		try {
			const result = await uploadSongWidget();
			if (result) {
				setDisplayname(result.display_name);
				setTrackUrl(result.secure_url);
			}
		} catch (error) {
			console.error("Upload failed", error);
		}
	};

	const handleChange = (e) => {
		setsongData({ ...songData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		uploadSong(songData);
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
						<div className="text-xl">Upload your song on Spotify</div>
					</div>
					<label
						htmlFor="name"
						className="text-white pl-2">
						Name of the song
					</label>
					<div className="border rounded-full flex items-center border-white w-full">
						<input
							id="name"
							value={songData.name}
							onChange={handleChange}
							name="name"
							type="text"
							className="bg-transparent pl-4 p-3 text-white px-3 text-lg placeholder:text-sm w-full outline-none focus:outline-none"
							placeholder="Name of the song"
						/>
					</div>
				</div>
				<div className="w-full space-y-1">
					<label
						htmlFor="thumbnail"
						className="text-white pl-2">
						Thumbnail of the song
					</label>
					<div className="border rounded-full flex items-center border-white w-full">
						<input
							id="thumbnail"
							name="thumbnail"
							value={songData.thumbnail}
							onChange={handleChange}
							type="text"
							className="bg-transparent pl-4 p-3 text-white px-3 text-lg placeholder:text-sm w-full outline-none focus:outline-none"
							placeholder="Thumbnail of the song"
						/>
					</div>
				</div>
				<div className="w-full space-y-1">
					<label
						htmlFor="track"
						className="text-white pl-2"
						onClick={CloudinaryUpload}>
						Track of the song
						<div
							className="relative border p-3 mt-1 rounded-full flex justify-end  items-center border-white w-full"
							onMouseEnter={() => setshowhover(true)}
							onMouseLeave={() => setshowhover(false)}>
							<div className="text-gray-500 ml-2 w-full">
								{displayname ? displayname : "Click here to upload"}
							</div>
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
				<div
					className=" p-3 px-10 rounded-full cursor-pointer text-white bg-gray-700 border-white"
					onClick={handleSubmit}>
					Upload
				</div>
			</div>
		</div>
	);
};

export default UploadSongModal;
