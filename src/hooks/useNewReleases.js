import React, { useEffect, useState } from 'react'

const useNewReleases = () => {
    const [playlists, setPlaylists] = useState([]);
    const token = localStorage.getItem('spotify_access_token'); // Assuming the token is stored in localStorage
  
    const fetchNewRealeases = async () => {
      const response = await fetch(`https://api.spotify.com/v1/browse/new-releases`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      setPlaylists(data);
    };

  
    useEffect(() => {
      fetchNewRealeases();
    }, []);

    return playlists;
}

export default useNewReleases;
