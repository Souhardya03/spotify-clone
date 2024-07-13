import React, { useEffect, useState } from "react";
import Topbar from "../../common/Topbar/Topbar";
import { useSpotify } from "../../context/Context";
import MySongCard from "../../common/MySongCard/MySongCard";
const MyLibrary = () => {
	const { user, apiUrl, authorizationToken, playSound } = useSpotify();
	const [mySongs, setMySongs] = useState([]);
	useEffect(() => {
		document.title = "Spotify | My Songs";
		const getMySongs = async () => {
			const response = await fetch(`${apiUrl}/song/get-mysong`, {
				method: "GET",
				headers: {
					Authorization: authorizationToken,
				},
			});
			const data = await response.json();
			if (response.ok) {
				setMySongs(data.songs);
			}
		};
		getMySongs();
	}, [apiUrl, authorizationToken]);


	return (
		<div className="contentbackground p-2 lg:p-4 h-[86vh] overflow-auto rounded-md lg:ml-3 w-full">
			<Topbar />
			<div>
				<h1 className="text-2xl mt-8 font-medium text-white">
					Welcome <span className="italic font-bold">{user?.firstName}</span> to your favourite musical world !!!
				</h1>
				<div className="flex flex-col gap-3 mt-8">
					{mySongs.length > 0
						? mySongs.map((song, index) => (
								<MySongCard
									key={index}
									mySongs={song}
									playSound={playSound}
								/>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default MyLibrary;
