import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: "songs",
    initialState:{
        addsongName: null,
        addsongArtist: null,
        addTracks:null,
        addUserTracks:null,
        addAlbumData:null,
        addSongId:null,
    },
    reducers:{
        addSongName: (state,action) =>{
            state.songName = action.payload;
        },
        addTracks: (state,action) =>{
            state.tracks = action.payload;
        },
        addUserTracks: (state,action) =>{
            state.userTracks = action.payload;
        },
        addAlbumId: (state,action) =>{
            state.albumData = action.payload;
        },
        addSongId: (state,action) =>{
            state.songId = action.payload;
        }
    }
})

export const {addSongName,addTracks,addUserTracks,addAlbumData,addSongId} = songSlice.actions;
export default songSlice.reducer;