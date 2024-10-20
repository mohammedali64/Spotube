import React, { useEffect, useState } from 'react'

const useGetArtist = (id) => {
    const [artist,setArtist] = useState("");
    const token = localStorage.getItem("spotify_access_token");

    const fetchAritist = async(id) => {
        const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setArtist(data);
    }
    console.log(artist);
    useEffect(()=>{
        fetchAritist(id);
    },[]);
    return artist;
}

export default useGetArtist
