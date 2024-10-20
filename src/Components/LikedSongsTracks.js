import React from 'react'
import useLikedSongs from '../hooks/useLikedSongs'
import Header from './Header';
import Library from './Library';
import SongCard from './SongCard';

const LikedSongsTracks = () => {
    const tracks = useLikedSongs();
    if(!tracks) return null;

  return (
    <div className='bg-black w-screen h-screen'>
      <Header />
      <Library />
      <div className='fixed w-[73.5%] h-[100%] bg-zinc-900 ml-[26%] mt-[0.5%] mr-4 rounded-lg'>
        <div className='flex bg-zinc-800 rounded-lg items-center p-4'>
          <img className='h-16 rounded-xl'
            alt='play'
            src='https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t1080x1080.jpg'
          />
          <p className='font-bold text-xl text-white ml-4'>Liked Songs</p>
        </div>

        <div className='p-4'>
          <p className='text-white text-left text-2xl font-bold mb-4'>Popular</p>

          <div className='h-[60vh] overflow-y-auto hide-scrollbar'>
            {tracks.items.map((song, index) => (
              <SongCard
                key={index}
                name={song.track.name}
                image={song.track?.album?.images[0]?.url}
                time={song.track.duration_ms}
                index={index + 1} 
                id={song.track.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LikedSongsTracks
