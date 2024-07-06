import React, { useState } from 'react'
import Content from '../../pages/Content/Content';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    const [control, setcontrol] = useState(true);
    return (
        <div className='flex lg:p-3 max-h-screen  pb-0 w-full'>
            {/* Sidebar */}
            <div className={`duration-150 lg:block hidden ${control ? "w-[30%]" : "w-[40%]"}`}>
                <div className={`h-[28vh] p-5 text-white  rounded-md mb-3 bg-[#121212]`}>
                    <div className='flex items-center  gap-1'>
                        <img src="./assets/iconmonstr-spotify-1-240.png" className='w-8' alt="Spotify logo" />
                        <h1 className='text-[18px] pt-1 font-[spotify-font] '>Spotify</h1>
                    </div>
                    <div className='mt-5 space-y-4 w-full text-[16px]'>
                        <div className='flex items-center gap-4  w-[28%] '>
                            <img src="./assets/home-icon.svg" alt="home-icon" className='w-8' />
                            <Link to="/" className='pt-2 font-semibold'>Home</Link>
                        </div>
                        <div className='flex items-center gap-4  w-[28%]'>
                            <img src="./assets/search-icon.png" alt="search-icon" className='w-8' />
                            <Link to="/search" className='pt-2 font-semibold'>Search</Link>
                        </div>
                    </div>
                </div>
                <div className={`h-[60vh] p-5 text-white rounded-md bg-[#121212]`}>
                    <div className='flex justify-end cursor-pointer ' onClick={() => setcontrol(!control)}>
                        <img src="./assets/right.svg" className={`hover:bg-[#2b2a2ac0] ${control ? " rotate-0" : "rotate-180"} duration-150 rounded-full p-2 w-8 `} alt="" />
                    </div>
                    <div className=' h-full flex justify-between  flex-col w-full text-[16px]'>
                        <div className='space-y-6 mt-4 '>
                            <div className='flex items-center gap-4 '>
                                <img src="./assets/create-icon.svg" alt="search-icon" className='w-8' />
                                <div className='pt-2 font-semibold'>Create Playlist</div>
                            </div>
                            <div className='flex items-center gap-6  '>
                                <img src="./assets/library-icon.svg" alt="home-icon" className='w-6' />
                                <div className='pt-2 font-semibold'>Your Library</div>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <img src="./assets/fi-ss-heart.svg" alt="search-icon" className='w-8' />
                                <div className='pt-2 font-semibold'>Search</div>
                            </div>
                        </div>
                        <div className='flex pb-8 items-center gap-5  '>
                            <img src="./assets/install-icon.svg" alt="search-icon" className='w-7' />
                            <div className='pt-2 font-semibold'>Install App</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right bar */}
            <Outlet/>
            
        </div>
    )
}

export default Sidebar
