import styled from "@emotion/styled";
import { Box, Text } from "rebass";

export const StatsWrapper = styled(Box)`
  padding: 40px;
  max-width: 900px;
  margin: auto;
  background-color: #f4f7fa;
  border-radius: 15px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f6d365, #fda085);
  color: #333;
`;

export const StatsTitle = styled(Text)`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #5e72e4;
`;

export const SectionTitle = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #4a4a4a;
`;

export const StatText = styled(Text)`
  font-size: 18px;
  margin-bottom: 8px;
  color: #555;
`;

export const SelectDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #f9fafb;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #5e72e4;
    background-color: #f1f5fb;
  }
`;

export const Card = styled(Box)`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
