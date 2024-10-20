import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Library from './Library';
import useUserData from '../hooks/useUserData';
import useSearchSongs from '../hooks/useSearchSongs';
import SearchIcon from './SearchIcon';
import Artists from './Artists';
import {  addSongId } from '../utils.js/songSlice';
import Albums from './Albums';
import useGetFeaturedPlaylist from '../hooks/useGetFeaturedPlaylist';
import FeaturedPlayList from './FeaturedPlayList';
import NewReleases from './NewReleases';
import useNewReleases from '../hooks/useNewReleases';
import Player from './player';

const Home = () => {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.songs.tracks);

  useUserData();
  useSearchSongs();

  const [isPlaying, setIsPlaying] = useState(false); // Player controls
  const [currentSong, setCurrentSong] = useState(null); // Track currently playing

  const handlePage = () => {
    // Logic for handling the page change (if any)
  };

  const handlePlaySong = (song) => {
    console.log(song);
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleSong = (songId) =>{
    console.log(songId);
    dispatch(addSongId(songId));
  }

  return (
    <div className='bg-black h-screen w-screen'>
      <Header />
      <Library />
      <div className='fixed w-[73.5%] h-[100%] bg-zinc-900 ml-[26%] mt-[0.5%] mr-4 rounded-lg'>
        <div className='flex text-white ml-[3%] mt-[2%] mb-3'>
          <button className='px-[1.5%] py-[0.5%] rounded-full bg-zinc-600' onClick={handlePage}>All</button>
          <button className='px-[1.5%] py-[0.5%] bg-zinc-600 rounded-full ml-[0.8%]'>Music</button>
        </div>

        {song && song.length > 0 && song[0]?.name ? (
          <div className='overflow-y-auto h-[80%] hide-scrollbar'>
            <div className='flex text-white'>
              <div className='w-[50%] mt-[5%]'>
                <p className='text-left ml-[5%] text-2xl font-bold'>Top Result</p>
                <div className='mt-[2%] bg-zinc-800 ml-[5%] rounded-2xl' onClick={() =>handleSong(song[0]?.id)}>
                  <img className='w-[28%] pl-[5%] mb-6 pt-[5%] rounded-lg'
                    alt='songImage'
                    src={song[0]?.album?.images?.[0]?.url}
                  />
                  <p className='text-white text-left text-3xl font-bold ml-[5%] mb-[2%]'>{song[0]?.name}</p>
                  <p className='text-left ml-[5%] pb-[5%]'>
                    <span className='text-gray-400'>{song[0]?.type}</span> · {song[0]?.artists?.[0]?.name} &nbsp;&nbsp;&nbsp;{song[0]?.artists?.[1]?.name} &nbsp;&nbsp;&nbsp;{song[0]?.artists?.[2]?.name}
                  </p>
                </div>
              </div>

              <div className='w-[50%] mt-[5%] h-full'>
                <p className='text-left text-2xl font-bold pb-2'>Songs</p>
                <div className='overflow-y-auto max-h-[250px] hide-scrollbar'> {/* Set max height and enable scrolling here */}
                  {song.map((song, index) => (
                    <SearchIcon key={index} song={song} />
                  ))}
                </div>
              </div>
            </div>

            <div className=' ml-[2.5%] mr-0 mt-[5%]'>
              <Artists id={song[0]?.artists?.[0]?.id}/>
            </div>
            <div className='ml-[2.5%] mr-0 mt-[2%] mb-36'>
              <Albums />
            </div>
          </div>
        ) : null}

        {/* Scrollable container for NewReleases and FeaturedPlayList */}
        <div className='h-full overflow-y-auto hide-scrollbar p-4'> {/* Adjust height for the scroll area */}
          <div>
            <NewReleases playlist={useNewReleases().albums} />
          </div>
          <div>
            <FeaturedPlayList playList={useGetFeaturedPlaylist()} />
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
