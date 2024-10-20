import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const token = localStorage.getItem('spotify_access_token');
  const songId = useSelector((store) => store.songs.songId); // Track ID selected by user
  const playerRef = useRef(null); // Ref for player instance
  const [deviceId, setDeviceId] = useState(null); // Store device ID

  useEffect(() => {
    // Initialize the Spotify Web Playback SDK
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Player',
        getOAuthToken: (cb) => { cb(token); },
        volume: 0.7,
      });

      playerRef.current = player; // Store player instance in the ref

      // Connect the player
      player.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });

      // When the SDK is ready
      player.addListener('ready', ({ device_id }) => {
        console.log('The Web Playback SDK is ready to play music!');
        console.log('Device ID:', device_id);
        setDeviceId(device_id); // Store the device ID
      });

      // Handle playback state changes
      player.addListener('player_state_changed', (state) => {
        if (state) {
          const currentTrack = state.track_window.current_track;
          setCurrentSong(currentTrack); // Set the currently playing track
          setIsPlaying(!state.paused); // Set the play/pause state
          console.log('Currently Playing:', currentTrack);
        }
      });

      // Clean up the player on unmount
      return () => {
        player.disconnect();
      };
    };
  }, [token]);

  // Play the song on the Web Playback SDK device
  const playTrack = async () => {
    if (playerRef.current && songId && deviceId) {
      // Start playback on the Spotify device with the selected song
      await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: [`spotify:track:${songId}`] }), // Play selected song
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setIsPlaying(true); // Update the playing state
    }
  };

  // Play song when songId changes
  useEffect(() => {
    if (songId) {
      playTrack(); // Automatically play the selected song
    }
  }, [songId]); // Triggered when songId is updated

  // Resume/pause the song using the Web Playback SDK
  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause(); // Pause playback
      } else {
        playerRef.current.resume(); // Resume playback
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  // Handle clicking on the song icon to play/resume
  const handleSongIconClick = () => {
    if (!isPlaying) {
      playTrack(); // Play the song if not already playing
    } else {
      handlePlayPause(); // Pause if playing
    }
  };

  // Function to skip to the next track
  const playNextTrack = async () => {
    if (playerRef.current && deviceId) {
      await fetch(`https://api.spotify.com/v1/me/player/next?device_id=${deviceId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setIsPlaying(true); // Ensure it's in playing state after skipping
    } else {
      console.error("Device ID not found or Player not initialized.");
    }
  };

  // Function to go back to the previous track
  const playPreviousTrack = async () => {
    if (playerRef.current && deviceId) {
      await fetch(`https://api.spotify.com/v1/me/player/previous?device_id=${deviceId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setIsPlaying(true); // Ensure it's in playing state after skipping
    } else {
      console.error("Device ID not found or Player not initialized.");
    }
  };

  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 p-4 text-white">
        <div className="flex items-center justify-between">
          {currentSong && (
            <div className="flex items-center">
              <img
                src={currentSong.album.images[0]?.url}
                alt="songImage"
                className="w-10 h-10 rounded-lg mr-4 cursor-pointer"
                onClick={handleSongIconClick} // Song icon click to play/resume
              />
              <div>
                <p className="text-lg font-bold">{currentSong.name}</p>
                <p className="text-gray-400">{currentSong.artists[0]?.name}</p>
              </div>
            </div>
          )}
          <div className="flex items-center">
            <button
              className="px-4 py-2 rounded-full bg-zinc-600 mr-4"
              onClick={handlePlayPause}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <div className="flex items-center">
              <p className="text-gray-400 mr-4">0:00</p>
              <div className="w-40 h-2 bg-zinc-600 rounded-full mr-4">
                <div className="h-2 bg-zinc-400 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <p className="text-gray-400">3:20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
