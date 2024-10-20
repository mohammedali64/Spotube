export const CLIENT_ID = "c695632e82aa405da8ce364ea27f7248";

export const CLIENT_SECRET = "bdfb8cf121ea49d9a5c697ddb68d8cf4";

export const CLIENT_TOKEN = localStorage.getItem('spotify_access_token');
export const CLIENT_HEADER = {
    headers: {
      Authorization: `Bearer ${CLIENT_TOKEN}`,
    },
  }

  
