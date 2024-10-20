import React from 'react';
import useAritists from '../hooks/useAritists';
import { useDispatch, useSelector } from 'react-redux';
import ArtistCard from './ArtistCard';
import { addArtistId } from '../utils.js/artistSlice';
import { useNavigate } from 'react-router-dom';

const Artists = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useAritists(id); 
  const data = useSelector((store) => store.artists.artistData);

  const handleArtistClick = (artistId) => {
    navigate(`/artistTopTracks/${artistId}`);    
  };

  if (!id || !data || data.length === 0) {
    return null;
  }

  return (
    <div>
      <p className='text-left text-2xl pb-3 font-bold text-white'>Artists</p>
      <div className='overflow-x-auto whitespace-nowrap'>
        <div className='flex flex-nowrap'>
          {data.slice(0, 4).map((artist, index) => (
            <ArtistCard 
              key={index} 
              id={artist.id} 
              image={artist.images[0]?.url} 
              name={artist.name} 
              onClick={() => handleArtistClick(artist.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
