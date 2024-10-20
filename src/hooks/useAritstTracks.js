import React, { useEffect, useState } from 'react'

const useAritstTracks = (artistId) => {
  const  [tracks, setTracks] = useState("");
  const token = localStorage.getItem("spotify_access_token");

  const fetchArtistTracks = async(id) => {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTracks(data);
}
console.log(tracks)
useEffect(() =>{
    fetchArtistTracks(artistId);
},[]);

return tracks;

}

export default useAritstTracks
