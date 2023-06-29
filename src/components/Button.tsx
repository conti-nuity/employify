import styled, { css } from "styled-components/native";
import { COLORS } from "../constants/colors";
import { type Button } from "../types";

interface pressableProps {
  variant: string;
}

const Button = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding: 17px 20px;
  border-radius: 7px;
  ${({ variant }: pressableProps) =>
    variant == "filled" &&
    css`
      background-color: ${COLORS.BLACK};
    `}
  ${({ variant }: pressableProps) =>
    variant == "outlined" &&
    css`
      background-color: ${COLORS.PRIMARY};
    `};
  ${({ variant }: pressableProps) =>
    variant == "text" &&
    css`
      background-color: ${COLORS.WHITE};
    `};
`;

const ButtonText = styled.Text`
  font-family: "Prompt-Regular";
  font-size: 14.5px;
  ${({ variant }: pressableProps) =>
    (variant == "filled" || variant == "outlined") &&
    css`
      color: ${COLORS.WHITE};
    `}

  ${({ variant }: pressableProps) =>
    variant == "text" &&
    css`
      color: ${COLORS.BLACK};
    `};
`;

const Index = ({ navigation, view, children, variant }: Button) => {
  return (
    <Button onPress={() => navigation.navigate(view)} variant={variant}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </Button>
  );
};

export default Index;
