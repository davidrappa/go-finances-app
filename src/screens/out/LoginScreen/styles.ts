import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
`;
export const GoFinance = styled.View`
  background: ${theme.colors.primary};
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 104px;
  padding-bottom: 67px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  margin-top: 40px;
  font-size: ${RFValue(28)}px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
  font-family: ${theme.fonts.medium};
`;
export const Subtitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
export const SocialLogin = styled.View`
  background-color: #ff872c;
  height: 100%;
  align-items: center;
`;
