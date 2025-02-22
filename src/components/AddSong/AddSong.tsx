/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addSong } from "../../redux/songSlice";
import { AddSongWrapper, AddSongTitle, StyledInput,ActionButton } from "./AddSongStyles";
import { Box } from "rebass";

const AddSong: React.FC = () => {
  const dispatch = useDispatch();
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleAddSong = async () => {
    try {
      const response = await axios.post(
        "https://mern-backend-for-song.onrender.com/api/songs",
        songData
      );
      dispatch(addSong(response.data));
      alert("Song added successfully!");
      setSongData({ title: "", artist: "", album: "", genre: "" });
    } catch (error) {
      console.error("Error adding song", error);
      alert("Error adding song.");
    }
  };

  return (
    <AddSongWrapper>
      <AddSongTitle>Add a New Song</AddSongTitle>
      <Box mb={3}>
        <StyledInput
          type="text"
          name="title"
          value={songData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </Box>
      <Box mb={3}>
        <StyledInput
          type="text"
          name="artist"
          value={songData.artist}
          onChange={handleInputChange}
          placeholder="Artist"
        />
      </Box>
      <Box mb={3}>
        <StyledInput
          type="text"
          name="album"
          value={songData.album}
          onChange={handleInputChange}
          placeholder="Album"
        />
      </Box>
      <Box mb={3}>
        <StyledInput
          type="text"
          name="genre"
          value={songData.genre}
          onChange={handleInputChange}
          placeholder="Genre"
        />
      </Box>
      <ActionButton
        onClick={handleAddSong}
        
      >
        Add Song
      </ActionButton>
    </AddSongWrapper>
  );
};

export default AddSong;
