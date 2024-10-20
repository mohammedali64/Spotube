import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useUserData = () => {
    const [profile,setProfile] = useState(null);
    const client_token = localStorage.getItem('spotify_access_token')
  
  const fetchProfile = async () => {
    const response = await axios.get('https://api.spotify.com/v1/me', 
        {
            headers: {
              Authorization: `Bearer ${client_token}`,
            },
          }
    );

    setProfile(response.data);
  }
  

  useEffect(() => {
    fetchProfile();
  },[])

} 

export default useUserData
