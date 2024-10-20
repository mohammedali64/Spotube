import React from 'react'
import AlbumCard from './AlbumCard';

const NewReleases = ({playlist}) => {
    if(!playlist) return null;
  return (
    <div className='ml-4'>
        <p className='text-left text-white pb-3 font-bold text-3xl pt-2'>New Realases</p>
      <div className="grid grid-cols-4 gap-4">
        {playlist.items.slice(0,4).map((album, index) => (
          <AlbumCard key={index} AlbumCard={album} type={album.type} />
        ))}
      </div>
    </div>
  )
}

export default NewReleases
