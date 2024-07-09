import React, { useState } from "react";
import { useSpotify } from "../../context/Context";

const MySongCard = ({ mySongs, playSound }) => {
    const [show, setshow] = useState(false);
    const { setCurrentSong } = useSpotify();

    const handleClick = () => {
        playSound(mySongs?.track);
        setCurrentSong(mySongs);
    };

    return (
        <div
            className="bg-[#303030] cursor-pointer w-full gap-4 h-[10vh] flex items-center rounded-md"
            onMouseEnter={() => setshow(true)}
            onMouseLeave={() => setshow(false)}
            onClick={handleClick}
        >
            <div
                className="lg:w-[8%] w-1/4 rounded-l-md h-full"
                style={{
                    backgroundImage: `url(${mySongs?.thumbnail})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div
                    className={`w-full h-full rounded-l-md bg-black ${
                        show ? "opacity-55" : "opacity-0"
                    } flex justify-center items-center duration-150`}
                >
                    <img
                        src="./assets/play-icon.png"
                        className="w-12"
                        alt="Play Icon"
                    />
                </div>
            </div>
            <div className="text-white text-sm h-full flex flex-col justify-center w-full">
                <div className="pt-1">{mySongs?.name}</div>
                <div className="space-x-1">
                    <span>{mySongs?.artist?.firstName}</span>
                    <span>{mySongs?.artist?.lastName}</span>
                </div>
            </div>
        </div>
    );
};

export default MySongCard;