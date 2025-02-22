// src/components/SongList/SongListStyles.tsx
import styled from "@emotion/styled";
import { Box, Text, Button, Flex } from "rebass";

// Styled wrapper for the song list page
export const SongListWrapper = styled(Box)`
  background-color: #f4f7fa;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: auto;
`;

// Styled title for the song list
export const SongTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

// Styled item for each song in the list
export const SongItem = styled(Box)`
  background-color: white;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #444;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// Styled action button for editing or deleting
export const ActionButton = styled(Button)`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled button for deleting a song
export const DeleteButton = styled(ActionButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

// Styled container for navigation buttons
export const FlexWrapper = styled(Flex)`
  justify-content: center;
  margin-bottom: 20px;
`;
