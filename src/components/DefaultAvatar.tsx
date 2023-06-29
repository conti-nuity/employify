import styled from "styled-components/native";
import { View } from "react-native";

const Avatar = styled.View`
  background-color: #f3f3f3;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Letter = styled.Text`
  font-family: "Prompt-Medium";
  font-size: 20px;
`;

interface defaultAvatar {
  name: string;
}

const Index = ({ name }: defaultAvatar) => {
  return (
    <Avatar>
      <View>
        <Letter>{name.charAt(0)}</Letter>
      </View>
    </Avatar>
  );
};

export default Index;
