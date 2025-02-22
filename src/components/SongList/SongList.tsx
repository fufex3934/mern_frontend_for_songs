import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  SongListWrapper,
  SongTitle,
  SongItem,
  ActionButton,
  DeleteButton,
  FlexWrapper,
} from "./SongListStyles"; // Import styles from SongListStyles
import { Box, Text, Flex } from "rebass";

type Song = {
  _id: string;
  title: string;
  artist: string;
  album?: string;
  genre?: string;
};

const SongList: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://mern-backend-for-song.onrender.com/api/songs"
        );
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `https://mern-backend-for-song.onrender.com/api/songs/${id}`
      );
      setSongs(songs.filter((song) => song._id !== id));
      alert("Song deleted successfully!");
    } catch (error) {
      console.error("Error deleting song:", error);
      alert("Error deleting song.");
    }
  };

  return (
    <SongListWrapper>
      <SongTitle>Song List</SongTitle>

      <FlexWrapper>
        <Link to="/add">
          <ActionButton mr={3}>Add New Song</ActionButton>
        </Link>
        <Link to="/stats">
          <ActionButton>View Song Stats</ActionButton>
        </Link>
      </FlexWrapper>

      <Box>
        {songs.map((song) => (
          <SongItem key={song._id}>
            <Text>
              {song.title} - {song.artist}
            </Text>
            <Flex>
              <Link to={`/edit/${song._id}`}>
                <ActionButton>Edit</ActionButton>
              </Link>
              <DeleteButton onClick={() => handleDelete(song._id)} ml={3}>
                Delete
              </DeleteButton>
            </Flex>
          </SongItem>
        ))}
      </Box>
    </SongListWrapper>
  );
};

export default SongList;
