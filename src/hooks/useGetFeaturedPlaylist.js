import React, { useEffect, useState } from 'react'

const useGetFeaturedPlaylist = () => {
    const [playlists, setPlaylists] = useState([]);
    const token = localStorage.getItem("spotify_access_token"); 
  
    const fetchFeaturedPlaylists = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        setPlaylists(data.playlists.items);
      } catch (error) {
        console.error('Error fetching featured playlists:', error);
      }
    };

  
    useEffect(() => {
      fetchFeaturedPlaylists();
    }, []);

    return playlists;
}

export default useGetFeaturedPlaylist;
