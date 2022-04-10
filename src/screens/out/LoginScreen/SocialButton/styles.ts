import { StyleProp, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonProps = {
  isGoogle: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 311px;
  height: 56px;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 36px;
  justify-content: center;
  margin-top: -20px;
`;
export const Title = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #363f5f;
`;
