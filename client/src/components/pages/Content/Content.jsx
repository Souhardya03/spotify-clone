import React from 'react';
import "./ContentStyle.css";
import Topbar from '../../common/Topbar/Topbar';

const Content = () => {
    return (
        <div className='contentbackground p-4 rounded-md ml-3 w-full'>
            <Topbar />
            <div>
                <h1 className='text-2xl mt-8 font-semibold text-white'>Good morning</h1>
                <div className='grid grid-cols-4 gap-3 mt-8'>
                    <div className=' bg-[#303030] w-full  h-[10vh] flex items-center rounded-md '>
                        <div
                            className='w-[30%] rounded-l-md h-full '

                        >
                            <img src="./assets/fi-ss-heart.svg" alt="" className=' object-cover rounded-l-md w-full h-full' />
                        </div>
                        <div className='text-white text-sm h-full flex items-center justify-center w-1/2'>
                            <div className='pt-1'>Liked Songs</div>
                        </div>
                    </div>
                    <div className=' bg-[#303030] w-full h-[10vh] flex items-center rounded-md '>
                        <div
                            className='w-[30%] rounded-l-md h-full '

                        >
                            <img src="./assets/neffex_playlist.svg" alt="" className=' object-cover rounded-l-md w-full h-full' />
                        </div>
                        <div className='text-white text-sm h-full flex items-center justify-center w-1/2'>
                            <div className='pt-1'>Neffex Playlist</div>
                        </div>
                    </div>
                    <div className=' bg-[#303030] w-full  h-[10vh] flex items-center rounded-md '>
                        <div
                            className='w-[35%] rounded-l-md h-full '

                        >
                            <img src="./assets/kda.svg" alt="" className=' object-cover rounded-l-md w-full h-full' />
                        </div>
                        <div className='text-white text-sm h-full flex items-center pl-6 w-full'>
                            <div className='pt-1'>K / DA</div>
                        </div>
                    </div>
                    <div className=' bg-[#303030] w-full  h-[10vh] flex items-center rounded-md '>
                        <div
                            className='w-[35%] rounded-l-md h-full '

                        >
                            <img src="./assets/dance.svg" alt="" className=' object-cover rounded-l-md w-full h-full' />
                        </div>
                        <div className='text-white text-xs h-full flex items-center justify-center w-full'>
                            <div className='pt-1'>Dance / Electronic Mix</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
