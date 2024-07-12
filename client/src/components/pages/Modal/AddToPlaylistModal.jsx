import React from "react";
import { useSpotify } from "../../context/Context";

const AddToPlaylistModal = (props) => {
	const { playlist,addSongToPlaylist } = useSpotify();
	return (
		<div
			className={`bg-[#0000009b] fixed items-center left-0 top-0 flex p-4 justify-center w-screen h-screen transition-opacity duration-200 ${
				props.show ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			onClick={() => props.setShow(false)}>
			<div
				onClick={(e) => e.stopPropagation()}
				className="rounded-md lg:space-y-3 gap-3 flex lg:p-10 p-8 flex-col items-center lg:w-[30%]  bg-[#272626cd]">
				<div className="w-full gap-3  mb-2 text-white flex-col flex items-center justify-center">
					<img
						src="./assets/iconmonstr-spotify-1-240.png"
						className="w-10"
						alt=""
					/>
					<div className="text-xl">Add songs to your playlist on Spotify</div>
				</div>
				{playlist &&
					playlist.map((info, index) => (
						<div
							className="w-full flex gap-4 cursor-pointer bg-[#313131] items-center rounded-md text-white text-sm  h-[10vh]"
							onClick={()=>addSongToPlaylist(info._id)}
							key={index}>
							<div className=" rounded-l-md  h-full w-1/4">
								<img
									src={info.thumbnail}
									alt=""
									className="w-full h-full rounded-l-md object-cover"
								/>
							</div>
							<div className="flex flex-col text-xs text-white justify-center ">
								<div className="text-lg">{info.name}</div>
								<div>{ "by " + info.owner.firstName + " " + info.owner.lastName}</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default AddToPlaylistModal;
