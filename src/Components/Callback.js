import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CLIENT_ID, CLIENT_SECRET } from '../utils.js/constants';
import axios from 'axios';
import useUserData from '../hooks/useUserData';

const Callback = () => {
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();
  const fetchToken = async () => {
    const code = new URLSearchParams(window.location.search).get('code');

    if(code) {
      const client_id = CLIENT_ID;
      const secret_id = CLIENT_SECRET;
      const redirectUri = "http://localhost:3000/callback";

      const authOptions = {
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          Authorization: `Basic ${btoa(client_id + ':' + secret_id)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri,
        }).toString(),
      };
      try{
        const response = await axios(authOptions);
        const accessToken = response.data.access_token;
        localStorage.setItem('spotify_access_token',accessToken);
        accessToken ? navigate("/home") : navigate("/");
      }catch(error){
        console.log('Error fetching token');
      }
    }
  }

  useEffect(() =>{
    fetchToken();
  },[]);


  
  return (
    <div>
      Loading ....
    </div>
  )
}

export default Callback
