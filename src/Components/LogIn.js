import React from 'react';
import { CLIENT_ID } from '../utils.js/constants';

const LogIn = () => {

  const handleLogin = () => {
    const clientId = CLIENT_ID;
    const redirectUri = 'http://localhost:3000/callback';
    const scopes = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
      'playlist-read-collaborative',
      'user-library-read',
      'user-library-modify',
      'user-follow-read',
      'user-follow-modify',
      'user-top-read',
      'user-read-private',
      'streaming',
    ];

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes.join(
      '%20'
    )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    window.location.href = authUrl;
  };

  return (
    <div className='flex bg-zinc-950 h-screen justify-center items-center'>
      <div className='bg-black h-[90%] w-[50%] rounded-2xl'>
        <div className='w-[50%] ml-[25%]'>
          <img
            alt='spotify'
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/12/Spotify_Logo_RGB_White-1.png'
          />
        </div>
        <p className='text-green-700 font-bold text-3xl -mt-7'>Music for Everyone</p>
        <button className='bg-green-700 text-white font-bold px-[15%] py-[2%] mt-[15%] rounded-full' onClick={handleLogin}>
          Log In
        </button>
        <div className='flex text-white justify-center items-center mt-[20%]'>
          <p className='text-zinc-400'>Don't have an account?</p>
          <button className='underline' onClick={handleLogin}>Sign up here</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
