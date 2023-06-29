import { Text, Dimensions } from "react-native";
import { COLORS } from "../constants/colors";
import styled from "styled-components/native";

interface buttonProps {
  navigation: any;
  children: string;
}

const Button = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding: 13px 15px;
  border-radius: 7px;
  background-color: ${COLORS.LIGHTPRIMARY};
`;

const Index = ({ navigation, children }: buttonProps) => {
  return (
    <Button onPress={() => navigation.navigate("AddEmployee")}>
      <Text>{children}</Text>
    </Button>
  );
};

export default Index;
