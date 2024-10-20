import { createSlice } from "@reduxjs/toolkit";

const artistSlice = createSlice({
    name: "artists",
    initialState:{
        addArtistsData: null,
        addArtistId:null,
    },
    reducers:{
        addArtistsData: (state,action) =>{
            state.artistData = action.payload;
        },
        addArtistId: (state,action) =>{
            state.artistId = action.payload;
        }
    }
})

export const {addArtistsData, addArtistId} = artistSlice.actions;
export default artistSlice.reducer;