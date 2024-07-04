import React from 'react'

const Sidebar = () => {
    return (
        <div className='h-[28vh] p-5 text-white  rounded-md w-[25%] m-3 bg-[#121212] '>
            <div className='flex items-center gap-1'>
                <img src="./assets/iconmonstr-spotify-1-240.png" className='w-6' alt="Spotify logo" />
                <h1 className='text-[16px] pt-1 font-[spotify-font] '>Spotify</h1>
            </div>
            <div className='mt-4 space-y-4 w-full text-[16px]'>
                <div className='flex items-center gap-4 justify-between w-[28%] '>
                    <img src="./assets/home-icon.svg" alt="home-icon" className='w-8' />
                    <div className='pt-2 font-semibold'>Home</div>
                </div>
                <div className='flex items-center gap-4 justify-between w-[28%]'>
                    <img src="./assets/search-icon.png" alt="search-icon" className='w-8' />
                <div className='pt-2 font-semibold'>Search</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
