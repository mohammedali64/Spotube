import React from 'react'
import AlbumCard from './AlbumCard';

const FeaturedPlayList = ({playList}) => {
    
    if (!playList || playList.length === 0) {
        return null;
      }
    
  return (
    <div className="ml-4 mb-40">
        <p className='text-left text-white pb-3 font-bold text-3xl pt-2'>Featured</p>
      <div className="grid grid-cols-4 gap-4">
      {playList.slice(0,4).map((playList) =>{
        return (
            <AlbumCard key={playList.id} AlbumCard = {playList} type ={playList.type}/>
        )
      })}
      </div>
    </div>
  )
}

export default FeaturedPlayList
