import React from "react";
import Sidebar from "../../common/Sidebar/Sidebar";
import Bottombar from "../../common/Bottombar/Bottombar";
import SongUI from "../../common/SongUi/SongUI";

const Home = () => {
	return (
		<div className="lg:p-2 lg:h-[99vh]   w-full">
			<Sidebar />
			<SongUI />

			<Bottombar />
		</div>
	);
};

export default Home;
