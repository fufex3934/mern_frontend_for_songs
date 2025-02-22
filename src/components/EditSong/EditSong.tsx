/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { EditSongWrapper, EditTitle, StyledInput } from "./EditSongStyles"; // Import styles from EditSongStyles
import { Box, Button, Text } from "rebass";

// Define the Song interface to specify the structure
interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const EditSong: React.FC = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [song, setSong] = useState<Song | null>(null); // Use Song type
  const [error, setError] = useState<string>(""); // To handle error
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`https://mern-backend-for-song.onrender.com/api/songs/${id}`);
        setSong(response.data); // Set the song data
      } catch (error) {
        console.error("Error fetching song:", error);
        setError("Error fetching song"); // Set error message
      }
    };

    if (id) {
      fetchSong(); // Fetch the song if the ID exists in URL
    }
  }, [id]);

  const handleSave = async () => {
    try {
      if (song) {
        await axios.put(`https://mern-backend-for-song.onrender.com/api/songs/${id}`, song); // Update song data
        alert("Song updated successfully!");
        navigate("/"); // Navigate back to the song list after saving
      }
    } catch (error) {
      console.error("Error saving song:", error);
      alert("Error saving song.");
    }
  };

  if (error) {
    return <Text>{error}</Text>; // Display error message if there is one
  }

  return (
    <EditSongWrapper>
      <EditTitle>Edit Song</EditTitle>

      {/* Render song details in form */}
      {song ? (
        <>
          <Box mb={3}>
            <StyledInput
              placeholder="Title"
              value={song.title}
              onChange={(e) => setSong({ ...song, title: e.target.value })}
            />
          </Box>
          <Box mb={3}>
            <StyledInput
              placeholder="Artist"
              value={song.artist}
              onChange={(e) => setSong({ ...song, artist: e.target.value })}
            />
          </Box>
          <Box mb={3}>
            <StyledInput
              placeholder="Album"
              value={song.album}
              onChange={(e) => setSong({ ...song, album: e.target.value })}
            />
          </Box>
          <Box mb={3}>
            <StyledInput
              placeholder="Genre"
              value={song.genre}
              onChange={(e) => setSong({ ...song, genre: e.target.value })}
            />
          </Box>
          <Button
            onClick={handleSave}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              cursor: "pointer",
              background: "blue",
            }}
          >
            Save Changes
          </Button>
        </>
      ) : (
        <Text>Loading...</Text> // Show loading text while data is fetched
      )}
    </EditSongWrapper>
  );
};

export default EditSong;
