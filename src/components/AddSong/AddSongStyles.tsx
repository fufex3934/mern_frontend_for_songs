// src/components/AddSong/AddSongStyles.tsx
import styled from "@emotion/styled";
import { Box, Text } from "rebass";

// Styled wrapper for the form
export const AddSongWrapper = styled(Box)`
  padding: 40px;
  max-width: 600px;
  margin: auto;
  background-color: #f4f7fa;
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
`;

// Styled title for the form
export const AddSongTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

// Styled input fields for the form
export const StyledInput = styled.input`
  padding: 12px;
  font-size: 16px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;
