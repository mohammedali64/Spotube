import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLIENT_TOKEN } from '../utils.js/constants';
import { addTracks } from '../utils.js/songSlice';

const useSearchSongs = () => {
    const dispatch = useDispatch();
    const [tracks, setTracks] = useState("");
    const songName = useSelector((store) => store.songs.songName);

    if(tracks){}
    const searchSongs = async (songName) => {
        if(!songName) return;
        const response = await axios.get(
             `https://api.spotify.com/v1/search?q=${encodeURIComponent(songName)}&type=track&limit=10`,
             {
                headers: {
                  Authorization: `Bearer ${CLIENT_TOKEN}`,
                },
              }
            
        )
        setTracks(response.data.tracks.items);
    }

    dispatch(addTracks(tracks));

    useEffect(() => {
        searchSongs(songName);
    },[songName]);
}

export default useSearchSongs
