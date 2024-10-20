import React from 'react'
import useLikedSongs from '../hooks/useLikedSongs'
import LikedSongs from './LikedSongs';

const Library = () => {
  return (
    <div>
       <div className='fixed w-[25%] h-[95%] bg-zinc-800 mt-[0.5%] ml-[0.5%] rounded-lg'>
          <p className='mt-[5%] mr-[50%] font-bold text-xl text-zinc-400'>Your Library</p>
          <div>
            < LikedSongs/>
          </div>

        </div>
    </div>
  )
}

export default Library
