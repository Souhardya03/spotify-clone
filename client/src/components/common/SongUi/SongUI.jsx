/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useSpotify } from "../../context/Context";
import AddToPlaylistModal from "../../pages/Modal/AddToPlaylistModal";
import "./SongUI.css"; // Import the CSS file

const SongUI = () => {
	const {
		currentSong,
		currentTime,
		duration,
		setCurrentTime,
		togglePlayPause,
		isPlaying,
		soundPlayed,
		nextsong,
		previoussong,
		getyourPlaylist,
	} = useSpotify();

	const [show, setShow] = useState(false);
	const [volume, setVolume] = useState(100); // Add volume state
	const seekbarRef = useRef(null);
	const volumeRef = useRef(null); // Ref for volume seekbar

	useEffect(() => {
		let animationFrameId;

		const updateCurrentTime = () => {
			if (soundPlayed && soundPlayed.playing()) {
				setCurrentTime(soundPlayed.seek());
				animationFrameId = requestAnimationFrame(updateCurrentTime);
			}
		};

		if (soundPlayed) {
			updateCurrentTime();
		}

		return () => cancelAnimationFrame(animationFrameId);
	}, [soundPlayed, setCurrentTime]);

	const handleSeek = (event) => {
		const seekTime = (event.target.value / 100) * duration;
		setCurrentTime(seekTime);
		if (soundPlayed) {
			soundPlayed.seek(seekTime);
		}
	};

	const handleVolumeChange = (event) => {
		const newVolume = event.target.value;
		setVolume(newVolume);
		if (soundPlayed) {
			soundPlayed.volume(newVolume / 100);
		}
	};

	const handleClick = () => {
		setShow(true);
		getyourPlaylist();
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	const seekbarBackground = {
		background: `linear-gradient(to right, #4caf50 ${
			(currentTime / duration) * 100
		}%, #383737 ${(currentTime / duration) * 100}%)`,
	};

	useEffect(() => {
		if (seekbarRef.current) {
			seekbarRef.current.style.background = seekbarBackground.background;
		}
	}, [currentTime, duration, seekbarBackground]);
	const volumeBackground = {
		background: `linear-gradient(to right, #4caf50 ${
			volume
		}%, #383737 ${volume}%)`,
	};

	useEffect(() => {
		if (volumeRef.current) {
			volumeRef.current.style.background = volumeBackground.background;
		}
	}, [volume, volumeBackground]);

	return (
		<div className="text-white  rounded-b-lg z-[999] lg:p-2 py-3  w-full  flex justify-between items-center bg-[#202020]">
			<div className="flex lg:pl-4 items-center gap-2 justify-start w-[90%] lg:w-[25%] h-full">
				{currentSong ? (
					<>
						<div className="h-full w-1/2 lg:w-[40%] bg-[#0f0f0f77]  rounded-md">
							<img
								src={currentSong?.thumbnail}
								className="w-full h-full rounded-md object-cover"
								alt="thumbnail"
							/>
						</div>

						<div className="w-full text-sm">
							<div>{currentSong?.name}</div>
							<div className="text-[#a3a3a3]">
								{currentSong?.artist?.firstName +
									" " +
									currentSong?.artist?.lastName}
							</div>
						</div>
					</>
				) : (
					<div className="w-full pl-4 text-sm">
						<div>Select a song to play</div>
					</div>
				)}
			</div>
			<div className="w-full lg:pr-0 flex-col flex items-center lg:justify-center justify-between h-full">
				<div className="lg:w-[50%] gap-4 lg:gap-6 flex items-center justify-center">
					<button
						onClick={handleClick}
						disabled={!currentSong}>
						<img
							src="/assets/add_to_playlist.svg"
							className="w-4"
							alt=""
						/>
					</button>
					<button onClick={previoussong}>
						<img
							src="/assets/previous.svg"
							className="w-4 cursor-pointer"
							alt=""
						/>
					</button>
					<button
						onClick={togglePlayPause}
						disabled={!currentSong}>
						<img
							src={
								currentSong && isPlaying
									? "/assets/pause.svg"
									: "/assets/play.png"
							}
							className="w-10"
							alt=""
						/>
					</button>
					<button onClick={nextsong}>
						<img
							src="/assets/next.svg"
							className="w-4 cursor-pointer"
							alt="Next"
						/>
					</button>
					<img
						src="/assets/Like.svg"
						className="w-4"
						alt=""
					/>
				</div>
				<div className="seek-bar-section lg:w-[80%] mr-3 w-full">
					<div className="seek-bar-container">
						<span className="text-right lg:w-[15%]">
							{formatTime(currentTime)}
						</span>
						<input
							ref={seekbarRef}
							type="range"
							min={`${currentSong ? "0" : "100"}`}
							max="100"
							value={(currentTime / duration) * 100}
							onInput={handleSeek}
							className="seek-bar"
						/>
						<span className="lg:w-[15%]">{formatTime(duration)}</span>
					</div>
				</div>
			</div>
			<div className="w-[25%] hidden lg:flex gap-6 justify-end pr-4 h-full">
				<div className="volume-section lg:w-[80%] mr-3 w-full mt-2">
					<div className="volume-container flex items-center gap-2">
						<img src="/assets/volume.svg" alt="" />
						<input
							ref={volumeRef}
							type="range"
							min="0"
							max="100"
							value={volume}
							onInput={handleVolumeChange}
							className="volume-bar"
						/>
					</div>
				</div>
			</div>
			<AddToPlaylistModal
				show={show}
				setShow={setShow}
			/>
		</div>
	);
};

export default SongUI;
