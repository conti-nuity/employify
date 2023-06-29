import styled from "styled-components/native";
import { COLORS } from "../constants/colors";
import { Input } from "native-base";

// MIXINS
export const feedbackText = `
  text-align: center;
  font-size: 18px;
  font-family: "Prompt-Regular";
`;

interface Button {
  disabled: boolean;
}

export const Wrapper = styled.View`
  padding: 10px 30px;
  background-color: #fff;
`;

export const Button = styled.Pressable`
  align-items: center;
  padding: 17px 20px;
  border-radius: 8px;
  background-color: ${COLORS.BLACK};
  opacity: ${({ disabled }: Button) => (disabled ? 0.5 : 1)};
  transition: opacity 0.3s ease-out;
`;

export const InputComponent = styled(Input)`
  padding: 15px;
  font-size: 15px;
  font-family: "Prompt-Regular";
`;

export const ButtonText = styled.Text`
  font-size: 15.5px;
  color: ${COLORS.WHITE};
  font-family: "Prompt-Medium";
`;

export const ErrorInput = styled.Text`
  font-size: 12px;
  color: ${COLORS.ERROR};
  font-family: "Prompt-Regular";
`;

export const ErrorMessage = styled.Text`
  margin-top: 15px;
  font-size: 12px;
  color: ${COLORS.ERROR};
  font-family: "Prompt-Regular";
`;

export const Loading = styled.Text`
  ${feedbackText};
`;

export const NoResults = styled.Text`
  ${feedbackText};
  padding: 50px 0;
`;

// Auth

export const ContentForm = styled.View`
  margin-top: 20px;
`;

export const Field = styled.View`
  margin-bottom: 20px;
`;

export const TitleForm = styled.Text`
  margin-top: 10px;
  font-size: 28px;
  font-family: "Prompt-SemiBold";
`;
