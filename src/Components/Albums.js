import React from 'react';
import { useSelector } from 'react-redux';
import useAlbumId from '../hooks/useAlbumId';
import AlbumCard from './AlbumCard';

const Albums = () => {
  const songs = useSelector((state) => state.songs.tracks);

  const albums = [
    useAlbumId(songs[0]?.album.id),
    useAlbumId(songs[1]?.album.id),
    useAlbumId(songs[2]?.album.id),
    useAlbumId(songs[3]?.album.id),
  ];

  const validAlbums = albums;

  if (!songs || songs.length <= 0 || validAlbums.length === 0) {
    return null;
  }

  return (
    <div className="px-4 py-4">
      <p className="text-left pb-4 text-2xl font-bold text-white">Albums</p>
      <div className="grid grid-cols-4 gap-4">
        {validAlbums.map((album, index) => (
          <AlbumCard key={index} AlbumCard={album[0]} type={album.type} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
