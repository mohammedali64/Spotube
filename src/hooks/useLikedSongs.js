import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useLikedSongs = () => {
const  [tracks, setTracks] = useState("");
  const token = localStorage.getItem("spotify_access_token");

  const fetchArtistTracks = async(id) => {
    const response = await fetch(`https://api.spotify.com/v1/me/tracks?limit=50&offset=0`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTracks(data);
}
console.log(tracks);
useEffect(() =>{
    fetchArtistTracks();
},[]);

return tracks;
}

export default useLikedSongs;
