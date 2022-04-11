import { StyleProp, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export type ButtonProps = {
  isGoogle: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 311px;
  height: 56px;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 36px;
  justify-content: flex-start;
  margin-top: -20px;
  flex-direction: row;
  align-items: center;
`;
export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-color: ${theme.colors.background};
  border-right-width: 1px;
`;
export const Title = styled.Text`
  text-align: center;
  color: #363f5f;
  margin-top: 2px;
  margin-left: 40px;
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
