import React from "react";
import "./Loader.css";
const Loader = () => {
	return (
		<div className="flex z-[9999] rounded-lg  w-full justify-center bg-[#252525] items-center h-full">
			<span className="blob1 blob"></span>
			<span className="blob2 blob"></span>
			<span className="blob3 blob"></span>
		</div>
	);
};

export default Loader;
