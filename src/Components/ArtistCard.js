import React from 'react';

const ArtistCard = ({ id, image, name, onClick }) => {
  return (
    <div onClick={onClick} className='cursor-pointer'>
      <div className='h-[20%] col-auto mx-5 mb-5'>
        <img className='w-52 h-52 rounded-full'
          alt='artist'
          src={image}
        />
        <p className='text-left text-lg mt-[1%] text-white'>{name}</p>
        <p className='text-left text-gray-400'>Artist</p>
      </div>
    </div>
  );
};

export default ArtistCard;
