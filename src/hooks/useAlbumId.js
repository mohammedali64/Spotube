import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAlbumData } from '../utils.js/songSlice';

const useAlbumId = (id) => {
  const [albums,setAlbums] = useState("");
  const token = localStorage.getItem("spotify_access_token");
  const dispatch = useDispatch();

  const fetchAlbums = async(id) =>{
    const response = await fetch(`https://api.spotify.com/v1/albums?ids=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setAlbums(data.albums);
  }
  

  useEffect(()=>{
    fetchAlbums(id);
  },[id]);

  return albums;
}

export default useAlbumId;
