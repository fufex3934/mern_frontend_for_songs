import styled from "@emotion/styled";
import { Box, Text } from "rebass";

export const StatsWrapper = styled(Box)`
  background-color: #f9f9fb;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const StatsTitle = styled(Text)`
  font-size: 35px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
  color: #4e73df;
`;

export const Card = styled(Box)`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const StatText = styled(Text)`
  font-size: 18px;
  margin-bottom: 12px;
  color: #555;
  line-height: 1.6;
`;

export const SelectDropdown = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: #f1f5f9;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4e73df;
    background-color: #e6eff8;
  }
`;

export const SectionTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
