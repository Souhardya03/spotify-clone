import React, { useEffect } from "react";
import "./ContentStyle.css";
import Topbar from "../../common/Topbar/Topbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PlaylistCard from "../../common/PlaylistCard/PlaylistCard";
import { Pagination } from "swiper/modules";
import { useSpotify } from "../../context/Context";
import MySongCard from "../../common/MySongCard/MySongCard";

const Content = () => {
	const { getAllPlaylist, allPlaylist, user, getAllSongs, allSongs, playSound } =
		useSpotify();
	useEffect(() => {
		document.title = "Spotify | Home";
		getAllPlaylist();
		getAllSongs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="contentbackground lg:h-[86vh] h-[82vh]  p-2 lg:p-4  overflow-auto  rounded-md lg:ml-3 w-full">
			<Topbar />
			<div>
				<h1 className="text-2xl mt-8 font-semibold text-white">Good morning</h1>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
					<div className=" bg-[#303030] w-full  h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="/assets/fi-ss-heart.svg"
								alt=""
								className=" object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1">Liked Songs</div>
						</div>
					</div>
					<div className=" bg-[#303030] w-full h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="/assets/neffex_playlist.svg"
								alt=""
								className=" object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1">Neffex Playlist</div>
						</div>
					</div>
					<div className=" bg-[#303030] w-full  h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="/assets/kda.svg"
								alt=""
								className=" object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1">K / DA</div>
						</div>
					</div>
					<div className=" bg-[#303030] w-full  h-[10vh] flex items-center rounded-md ">
						<div className="w-[40%] rounded-l-md h-full ">
							<img
								src="/assets/dance.svg"
								alt=""
								className=" object-cover rounded-l-md w-full h-full"
							/>
						</div>
						<div className="text-white text-sm h-full flex items-center justify-center w-full">
							<div className="pt-1"> Dance Mix</div>
						</div>
					</div>
				</div>
			</div>
			{/* Playlist */}
			<div className="text-white flex flex-col  gap-3 mt-8 text-2xl">
				<div className="font-semibold">
					{user
						? `Playlist for ${user?.firstName + " " + user?.lastName}`
						: "Playlists on Spotify"}
				</div>
				<div className="max-w-screen-lg">
					<Swiper
						slidesPerView={3}
						spaceBetween={0}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 0,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 0,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 0,
							},
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper">
						{allPlaylist &&
							allPlaylist.map((info, index) => (
								<SwiperSlide key={index}>
									<PlaylistCard
										id={info._id}
										name={info.name}
										thumbnail={info.thumbnail}
										owner={info.owner?.firstName + " " + info.owner?.lastName}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>

			{/* Tracks */}
			<div className="text-white flex flex-col  gap-3 mt-8 text-2xl">
				<div className="font-semibold">Tracks on Spotify</div>
				{allSongs && allSongs.map((info,index)=>(
					<MySongCard key={index} mySongs={info} playSound={playSound}/>
				))}
			</div>
		</div>
	);
};

export default Content;
