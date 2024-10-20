import React from 'react';
import { useDispatch } from 'react-redux';
import { addSongId } from '../utils.js/songSlice';

const SearchIcon = ({ song }) => {
  const dispatch = useDispatch();
    const milliseconds = song.duration_ms;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60); 
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    const handleSong = (id) => {
      dispatch(addSongId(id));

    }

  return (
    <div className='pl-[2%]' onClick={() => handleSong(song.id)}>
      <div className='flex mt-[2%] items-center'>
        <img
          className='w-12 h-auto rounded-md' 
          alt='listOfSongs'
          src={song.album.images[0].url}
        />
        <div className='flex ml-[2%] justify-between w-full items-center'> 
          <div>
            <p className='text-left text-lg'>{song?.name}</p>
            <p className='text-left text-zinc-600'>
              {song?.artists?.[0]?.name} &nbsp;{song?.artists?.[1]?.name}&nbsp;{song?.artists?.[2]?.name}
            </p>
          </div>
          <div>
            <p className='text-right mr-6'>{minutes}:{formattedSeconds}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchIcon;
