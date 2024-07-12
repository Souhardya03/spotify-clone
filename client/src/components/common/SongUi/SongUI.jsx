import React, { useState } from "react";
import { useSpotify } from "../../context/Context";
import AddToPlaylistModal from "../../pages/Modal/AddToPlaylistModal";

const SongUI = () => {
	const { currentSong, togglePlayPause, isPlaying, getyourPlaylist } = useSpotify();
	const [show, setShow] = useState(false);
    
	const handleClick = () => {
		setShow(true);
		getyourPlaylist();
	};

	return (
		<div className="text-white h-[9vh] z-[999] fixed lg:bottom-0 bottom-16 w-full p-1 flex justify-between items-center bg-[#202020]">
			<div className="flex lg:pl-4 items-center gap-2 justify-start lg:w-[25%] h-full">
				{currentSong ? (
					<>
						<div className="h-full bg-[#0f0f0f77] p-2 rounded-md">
							<img
								src={currentSong?.thumbnail}
								className="w-full h-full object-contain"
								alt="thumbnail"
							/>
						</div>

						<div className="w-full text-xs">
							<div>{currentSong?.name}</div>
							<div className="text-[#a3a3a3]">
								{currentSong?.artist?.firstName + " " + currentSong?.artist?.lastName}
							</div>
						</div>
					</>
				) : (
					<div className="w-full pl-4 text-sm">
						<div>Select a song to play</div>
					</div>
				)}
			</div>
			<div className="lg:w-1/2 gap-4 pr-4 lg:pr-0 lg:gap-8 flex items-center justify-center h-full">
				<img
					src="/assets/add_to_playlist.svg"
					className="w-4 lg:hidden block"
					alt=""
				/>
				<img
					src="/assets/previous.svg"
					className="w-4 cursor-pointer"
					alt=""
				/>
				<button
					onClick={togglePlayPause}
					disabled={!currentSong}>
					<img
						src={currentSong && !isPlaying ? "/assets/pause.svg" : "/assets/play.png"}
						className="w-10"
						alt=""
					/>
				</button>
				<button >
					<img
						src="/assets/next.svg"
						className="w-4 cursor-pointer"
						alt="Next"
						
					/>
				</button>
				<img
					src="/assets/Like.svg"
					className="w-4 lg:hidden block"
					alt=""
					
				/>
			</div>
			<div className="w-[25%] hidden lg:flex gap-6 justify-end pr-4 h-full">
				<button
					onClick={handleClick}
					disabled={!currentSong}>
					<img
						src="/assets/add_to_playlist.svg"
						className="w-6"
						alt=""
					/>
				</button>
				<img
					src="/assets/Like.svg"
					className="w-6"
					alt=""
				/>
			</div>
			<AddToPlaylistModal
				show={show}
				setShow={setShow}
			/>
		</div>
	);
};

export default SongUI;
