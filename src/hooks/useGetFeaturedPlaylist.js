import React, { useEffect, useState } from 'react'

const useGetFeaturedPlaylist = () => {
    const [playlists, setPlaylists] = useState([]);
    const token = localStorage.getItem('spotify_access_token'); // Assuming the token is stored in localStorage
  
    const fetchFeaturedPlaylists = async () => {
      const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      setPlaylists(data.playlists.items);
    };

  
    useEffect(() => {
      fetchFeaturedPlaylists();
    }, []);

    return playlists;
}

export default useGetFeaturedPlaylist;
