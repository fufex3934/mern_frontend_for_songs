import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongsState {
  songs: Song[];
}

const initialState: SongsState = {
  songs: [],
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setSongs(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
    },
    addSong(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload); // Add the new song to the state
    },
    updateSong(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex((song) => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSong(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
  },
});

export const { setSongs, addSong, updateSong, deleteSong } = songsSlice.actions;
export default songsSlice.reducer;
