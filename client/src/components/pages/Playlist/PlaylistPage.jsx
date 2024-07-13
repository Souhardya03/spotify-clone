/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSpotify } from "../../context/Context";
import Topbar from "../../common/Topbar/Topbar";
import Loader from "../../common/Loader/Loader";
import "./playlistpage.css";

const PlaylistPage = () => {
	const { id } = useParams();
	const {
		getSinglePlaylist,
		singlePlaylist,
		playSound,
		setCurrentSong,
		changenextsong,
		setchangenextsong,
		changeprevioussong,
		setchangeprevioussong,
		loading, setLoading
	} = useSpotify();
	const [currentSongIndex, setCurrentSongIndex] = useState(null);
	// const [] = useState(true);

	useEffect(() => {
		const fetchPlaylist = async () => {
			await getSinglePlaylist(id);
		};
		fetchPlaylist();
		
	}, [id]);

	useEffect(() => {
		if (singlePlaylist) {
			document.title = `Spotify | ${singlePlaylist ? singlePlaylist.name : ""}`;
		}
	}, [singlePlaylist]);

	useEffect(() => {
		if (changenextsong) {
			playNextSong();
		}
		if (changeprevioussong) {
			playPrevSong();
		}
	}, [changenextsong, changeprevioussong]);

	if (loading) {
		return (
			<div className=" z-[9999] w-full lg:w-[99vw] lg:h-[97vh]  absolute justify-center bg-[#252525] items-center h-full rounded-lg">
				<Loader />
			</div>
		);
	}

	const handleClick = (index) => {
		const song = singlePlaylist.songs[index];
		playSound(song.track);
		setCurrentSong(song);
		setCurrentSongIndex(index);
	};

	const playNextSong = () => {
		if (currentSongIndex !== null && singlePlaylist.songs.length > 0) {
			const nextIndex = (currentSongIndex + 1) % singlePlaylist.songs.length;
			handleClick(nextIndex);
		}
		setchangenextsong(false);
	};

	const playPrevSong = () => {
		if (currentSongIndex !== null && singlePlaylist.songs.length > 0) {
			const prevIndex = (currentSongIndex - 1 + singlePlaylist.songs.length) % singlePlaylist.songs.length;
			handleClick(prevIndex);
		}
		setchangeprevioussong(false);
	};

	return (
		<div className="contentbackground lg:h-[86vh] h-[82vh] p-2 lg:p-4 overflow-auto rounded-md lg:ml-3 w-full">
			<Topbar />
			{/* playlist information */}
			<div className="text-white lg:flex lg:h-[30vh] items-center mt-8">
				<div className="h-full w-full flex items-center justify-center playlistimagebackground rounded-md lg:w-1/2">
					<img
						src={singlePlaylist?.thumbnail}
						alt=""
						className="w-full h-full rounded-md object-cover"
					/>
				</div>
				<div className="h-full w-full">
					<div className="flex flex-col gap-2 lg:gap-4 p-4 w-full">
						<div className="font-semibold">Playlist</div>
						<div className="lg:text-7xl text-5xl font-semibold">
							{singlePlaylist?.name}
						</div>
						<div className="text-sm">
							{"by " +
								singlePlaylist?.owner?.firstName +
								" " +
								singlePlaylist?.owner?.lastName}
						</div>
						<div className="flex gap-2 items-center">
							<div>
								<img
									src="/favicon.ico"
									className="w-6 h-6"
									alt=""
								/>
							</div>
							<div className="text-sm flex items-center gap-1 pt-2">
								<div>Spotify &#x2022;</div>
								<div className="text-sm">
									{singlePlaylist?.songs?.length} Songs
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Buttons */}
			<div className="rounded-lg items-center lg:mt-4 lg:justify-start px-2 flex gap-6 w-full">
				<div
					className="w-14 flex justify-center cursor-pointer items-center p-3 rounded-full bg-green-500"
					onClick={() => handleClick(0)}>
					<img
						src="/assets/play-icon.svg"
						className="w-10"
						alt="Play Next"
					/>
				</div>
				<div>
					<img
						src="/assets/add-icon.png"
						className="w-8"
						alt=""
					/>
				</div>
			</div>

			{/* Songs list */}
			<div className="rounded-lg mt-4 p-4 bg-[#252525] overflow-auto">
				{/* Heading */}
				<div className="flex text-gray-500 justify-between">
					<div className="flex gap-2">
						<div>#</div>
						<div className="ml-2">Title</div>
					</div>
					<div className="pr-4">Duration</div>
				</div>
				<div className="my-2 w-full border border-gray-500" />
				{/* song Details */}
				{singlePlaylist?.songs?.map((song, index) => (
					<div
						key={index}
						className="flex cursor-pointer justify-between hover:rounded-md duration-150 hover:bg-[#363535] px-2 py-3 text-white items-center gap-4 mt-4"
						onClick={() => handleClick(index)}>
						<div className="flex items-center gap-4">
							<div>{index + 1}</div>
							<div className="flex gap-2 items-center">
								<img
									src={song?.thumbnail}
									alt=""
									className="w-12 rounded-lg"
								/>
								<div className="text-white">
									<div className="text-lg">{song?.name}</div>
									<div className="text-xs text-gray-400">
										{"by " + song?.artist?.firstName + song?.artist?.lastName}
									</div>
								</div>
							</div>
						</div>
						<div className="text-sm pr-4">{song?.duration}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PlaylistPage;
