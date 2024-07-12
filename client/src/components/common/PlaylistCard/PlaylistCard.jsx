import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = (props) => {
	return (
		<Link to={`/playlist/${props.id}`}>
			<div className=" w-full cursor-pointer p-3 hover:bg-[#1f1f1f] duration-150 rounded-lg h-[25vh] lg:h-[30vh]">
				<div className=" lg:h-2/3 h-1/2 w-full rounded-lg">
					<img
						src={props.thumbnail}
						className="rounded-lg object-cover w-full h-full"
						alt=""
					/>
				</div>
				<div className="pt-4 ">
					<div className="lg:text-lg text-sm font-semibold">{props.name}</div>
					<div className="lg:text-xs text-[6px] italic"> by {props.owner}</div>
				</div>
			</div>
		</Link>
	);
};

export default PlaylistCard;
