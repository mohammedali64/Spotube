import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useGetPlaylistTracks = (id) => {
const  [tracks, setTracks] = useState("");
  const token = localStorage.getItem("spotify_access_token");

  const fetchPlaylistTracks = async(id) => {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTracks(data);
}
useEffect(() =>{
    fetchPlaylistTracks(id);
},[id]);

return tracks;
}

export default useGetPlaylistTracks;
