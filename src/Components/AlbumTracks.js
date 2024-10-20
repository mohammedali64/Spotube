import React from 'react'
import { useParams } from 'react-router-dom'
import useGetAlbumTracks from '../hooks/useGetAlbumTracks';
import Header from "./Header";
import Library from "./Library";
import SongCard from "./SongCard";

const AlbumTracks = () => {
  const { albumId,albumName } = useParams();
  const album = useGetAlbumTracks(albumId);
  const albumTracks = album.items;

  if(!albumTracks){
    return null;
  }
  return (
    <div className='bg-black w-screen h-screen'>
      <Header />
      <Library />
      <div className='fixed w-[73.5%] h-[100%] bg-zinc-900 ml-[26%] mt-[0.5%] mr-4 rounded-lg'>
        <div className='flex bg-zinc-800 rounded-lg items-center p-4'>
          <img className='h-16'
            alt='play'
            src='https://cdn-icons-png.flaticon.com/512/8212/8212668.png'
          />
          <p className='font-bold text-xl text-white ml-4'>{albumName}</p>
        </div>

        <div className='p-4'>
          <p className='text-white text-left text-2xl font-bold mb-4'>Popular</p>

          <div className='h-[60vh] overflow-y-auto hide-scrollbar'>
            {albumTracks.map((song, index) => (
              <SongCard
                key={index}
                id={song.id}
                name={song.name}
                time={song.duration_ms}
                index={index + 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumTracks
