import React from 'react';
import { useDispatch } from 'react-redux';
import { addSongId } from '../utils.js/songSlice';

const SongCard = ({ name, image, time, index, id }) => {
  const milliseconds = time;
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  const dispatch = useDispatch();

  const handleid = () => {
    dispatch(addSongId(id));
  }

  return (
    <div className='overflow-y-auto'>
      <div className='flex items-center text-white p-3 rounded-lg hover:bg-zinc-800 cursor-pointer' onClick={handleid}>
        <p className='pr-4 text-left w-[5%] text-lg'>{index}</p>
        {image &&<img className='w-[4%] rounded-sm' alt='song' src={image} />}
        <p className='text-white pl-4 w-[70%] text-lg text-left'>{name}</p>
        <p className='text-white text-right w-[25%] pr-4'>{minutes}:{formattedSeconds}</p>
      </div>
    </div>
  );
};

export default SongCard;
