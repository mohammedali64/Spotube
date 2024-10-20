import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import Callback from './Components/Callback';
import ArtistTopTracks from './Components/ArtistTopTracks';
import AlbumTracks from './Components/AlbumTracks';
import PlaylistTracks from './Components/PlaylistTracks';
import LikedSongsTracks from './Components/LikedSongsTracks';
import Player from './Components/player';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/callback",
      element: <Callback />
    },
    {
      path:"/artistTopTracks/:artistId",
      element: <ArtistTopTracks />
    },
    {
      path:"/albumTracks/:albumId/:albumName",
      element: <AlbumTracks />
    },
    {
      path:"/playlistTracks/:playlistId/:playlistName",
      element: <PlaylistTracks />
    },
    {
      path: "/likedSongs",
      element: <LikedSongsTracks />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
      <Player />
    </div>
  );
}

export default App;
