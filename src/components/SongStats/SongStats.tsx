/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text } from "rebass";
import {
  StatsWrapper,
  StatsTitle,
  SectionTitle,
  StatText,
  SelectDropdown,
  Card,
} from "./SongStatsStyles";

// Song Stats Data Interface
interface SongStatsData {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsByGenre: { _id: string; count: number }[];
  songsByArtist: { _id: string; songCount: number; albumCount: number }[];
  songsInAlbums: { _id: string; count: number }[];
}

const SongStats: React.FC = () => {
  const [stats, setStats] = useState<SongStatsData | null>(null);
  const [genre, setGenre] = useState<string>("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://mern-backend-for-song.onrender.com/api/songs/stats"
        );
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching statistics", error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <Text>Loading...</Text>;
  }

  const filteredSongsByGenre = genre
    ? stats.songsByGenre.filter((stat) => stat._id === genre)
    : stats.songsByGenre;

  return (
    <StatsWrapper>
      <StatsTitle>Song Statistics</StatsTitle>

      {/* General Info Section */}
      <Card>
        <StatText>Total Songs: {stats.totalSongs}</StatText>
        <StatText>Total Artists: {stats.totalArtists}</StatText>
        <StatText>Total Albums: {stats.totalAlbums}</StatText>
        <StatText>Total Genres: {stats.totalGenres}</StatText>
      </Card>

      {/* Filter by Genre */}
      <Card>
        <SectionTitle>Filter by Genre</SectionTitle>
        <SelectDropdown
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          {stats.songsByGenre.map((g) => (
            <option key={g._id} value={g._id}>
              {g._id}
            </option>
          ))}
        </SelectDropdown>
      </Card>

      {/* Songs per Genre */}
      <Card>
        <SectionTitle>Songs per Genre</SectionTitle>
        {filteredSongsByGenre.length > 0 ? (
          filteredSongsByGenre.map((stat) => (
            <StatText key={stat._id}>
              {stat._id}: {stat.count} song(s)
            </StatText>
          ))
        ) : (
          <StatText>No data available for this genre.</StatText>
        )}
      </Card>

      {/* Songs & Albums per Artist */}
      <Card>
        <SectionTitle>Songs & Albums per Artist</SectionTitle>
        {stats.songsByArtist.length > 0 ? (
          stats.songsByArtist.map((stat) => (
            <StatText key={stat._id}>
              {stat._id}: {stat.songCount} song(s), {stat.albumCount} album(s)
            </StatText>
          ))
        ) : (
          <StatText>No artist data available.</StatText>
        )}
      </Card>

      {/* Songs per Album */}
      <Card>
        <SectionTitle>Songs per Album</SectionTitle>
        {stats.songsInAlbums.length > 0 ? (
          stats.songsInAlbums.map((stat) => (
            <StatText key={stat._id}>
              {stat._id}: {stat.count} song(s)
            </StatText>
          ))
        ) : (
          <StatText>No album data available.</StatText>
        )}
      </Card>
    </StatsWrapper>
  );
};

export default SongStats;
