import React from "react";

const Topbar = () => {
	return (
		<div className="text-white p-4 flex   justify-between w-full items-center ">
			<div className="flex gap-2   w-[10%]">
				<div>
					<img
						src="./assets/fi-rr-angle-small-left.svg"
						alt=""
						className="bg-[#151415] rounded-full p-1 "
					/>
				</div>
				<div>
					<img
						src="./assets/fi-rr-angle-small-right.svg"
						alt=""
						className="bg-[#151415] rounded-full  p-1"
					/>
				</div>
			</div>
			<div className="flex gap-4  justify-end w-[30%]">
				<div className="bg-white rounded-full flex justify-center   items-center p-2 px-4 text-sm  text-black">
					<div className="pt-1">Explore Premium</div>
				</div>
        <div className="bg-green-400 px-4 rounded-full flex justify-center items-center text-black ">
          <div className="pt-1">S</div>
        </div>
			</div>
		</div>
	);
};

export default Topbar;
