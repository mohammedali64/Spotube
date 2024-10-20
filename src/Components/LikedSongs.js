import React from 'react'
import { useNavigate } from 'react-router-dom'

const LikedSongs = ({songs}) => {
    const navigate = useNavigate();
    const handleLikedSongs = () => {
      navigate("/likedSongs");
    }
  return (
    <div className='px-2 pt-5 cursor-pointer' onClick={handleLikedSongs}>
      <div className=' rounded-lg flex hover:bg-zinc-700'>
        <img className='w-14 pl-2 py-2 rounded-lg'
        alt='likedsongs'
        src='https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t1080x1080.jpg'
        />
        <div className='flex items-center'>
          <div className='flex-row pl-3 text-left'>
            <p className='text-lg font-semibold text-white'>Liked Songs</p>
            <p className='text-zinc-500'>Playlist</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LikedSongs
