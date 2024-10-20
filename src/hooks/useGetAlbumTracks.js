import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useGetAlbumTracks = (id) => {
const  [tracks, setTracks] = useState("");
  const token = localStorage.getItem("spotify_access_token");

  const fetchArtistTracks = async(id) => {
    const response = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTracks(data);
}
useEffect(() =>{
    fetchArtistTracks(id);
},[id]);

return tracks;
}

export default useGetAlbumTracks;
