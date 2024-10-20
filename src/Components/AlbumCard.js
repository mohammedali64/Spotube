import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumCard = ({ AlbumCard,type }) => {
    const navigate = useNavigate();
  const album = AlbumCard;

  const getalbumid = (id) => {
    if(album.type === "album"){
        navigate(`/albumTracks/${album.id}/${album.name}`);
    }else if(album.type === "playlist"){
        navigate(`/playlistTracks/${album.id}/${album.name}`);
    }
  };

  if (!AlbumCard || !AlbumCard.id || !AlbumCard.type) {
    return null;
  }

  return (
    <div>
      <div onClick={() => getalbumid(album.id)}>
        <img className="w-56 rounded-lg" alt="album" src={album?.images[0]?.url} />
      </div>
      <div className="max-w-[90%] text-left text-base text-white font-bold mt-3">
        <p>{album.name}</p>
      </div>
      {album.type === "album" &&<div className="text-left text-zinc-300">
        <p>{album.artists[0]?.name}</p>
      </div>}
    </div>
  );
};

export default AlbumCard;
