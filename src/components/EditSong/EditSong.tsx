import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { EditSongWrapper, EditTitle, StyledInput } from "./EditSongStyles";
import { Box, Button, Text } from "rebass";

interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const EditSong: React.FC = () => {
  const { id } = useParams();
  const [song, setSong] = useState<Song | null>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(
          `https://mern-backend-for-song.onrender.com/api/songs/${id}`
        );
        setSong(response.data);
      } catch (error) {
        console.error("Error fetching song:", error);
        setError("Error fetching song");
      }
    };

    if (id) {
      fetchSong();
    }
  }, [id]);

  const handleSave = async () => {
    try {
      if (song) {
        await axios.put(
          `https://mern-backend-for-song.onrender.com/api/songs/${id}`,
          song
        );
        alert("Song updated successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error saving song:", error);
      alert("Error saving song.");
    }
  };

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <EditSongWrapper>
      <EditTitle>Edit Song</EditTitle>

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
        <Text>Loading...</Text>
      )}
    </EditSongWrapper>
  );
};

export default EditSong;
