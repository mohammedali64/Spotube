import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useUserData from '../hooks/useUserData';
import { useDispatch, useSelector } from 'react-redux';
import { addSongName } from '../utils.js/songSlice';
import useSearchSongs from '../hooks/useSearchSongs';
import useToken from "../hooks/useToken";
import useGetFeaturedPlaylist from '../hooks/useGetFeaturedPlaylist';

const Header = () => {
    const dispatch = useDispatch();
    useToken();
    useGetFeaturedPlaylist();
    const [dropDown,setDropDown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    dispatch(addSongName(searchTerm));

    
    const handleDropdown = () =>{
        setDropDown(!dropDown);
    }
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('spotify_access_token');
        navigate("/");
    }

    const handleHome = () =>{
      navigate("/home");
    }


  return (
    <div>
      <div className='flex items-center bg-black py-1'>
            <div className='ml-[1%]'>
            <img className='w-28'
            alt='spotifyLogo'
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png'
            />
            </div>
            <div className='flex items-center ml-[25%] my-[0.3%]'>
                <div className='w-[5%] px-1 py-1 rounded-full mx-[1%] bg-zinc-800 transform transition-transform duration-100 hover:scale-105 cursor-pointer'>
                    <img className='rounded-full ' onClick={handleHome}
                    alt='homeimg'
                    src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png'
                    />
                </div>
                    <div>
                    <input type='text'  className='px-[85%] py-[6%] rounded-full bg-zinc-800 text-white' placeholder='Search Songs Here'  
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </div>
                    <div>
                    <img className='w-[5%] ml-[54%]'
                    alt='search icon'
                    src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png'
                    />
                    </div>
                    <img className='w-[3%] rounded-full ml-[8%] mr-[2%] '
                    alt='bell icon'
                    src='https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-notification-icon-png-image_855007.jpg'
                    />
                    <img className='w-[5%] rounded-full px-1 py-1 bg-zinc-800 ml-[3%] mr-[2%] transform transition-transform duration-100 hover:scale-105 cursor-pointer' onClick={handleDropdown}
                    alt='user icon'
                    src='https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'
                    />
                    {dropDown &&(
                        <div className="absolute right-0 mr-1 mt-[12%] w-48 origin-top-right bg-zinc-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                        <div className="py-1">
                          <a 
                            href="#profile" 
                            className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                          >
                            Profile
                          </a>
                          <a 
                            href="#logout" 
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                          >
                            Logout
                          </a>
                        </div>
                         </div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default Header
