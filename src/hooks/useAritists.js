import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addArtistsData } from '../utils.js/artistSlice';

const useAritists = (id) => {
    const dispatch = useDispatch();
    const[relatedArtist, setRealtedArtist] = useState("");
    const token = localStorage.getItem("spotify_access_token");

    const fetchRelatedAritists = async(id) => {
        const response = await fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setRealtedArtist(data.artists);
    }
    useEffect(() => {
        fetchRelatedAritists(id);
    },[id])
    dispatch(addArtistsData(relatedArtist))

    console.log(relatedArtist);
    
}

export default useAritists;
