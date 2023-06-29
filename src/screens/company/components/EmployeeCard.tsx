import styled from "styled-components/native";
import { View } from "react-native";
import { COLORS } from "../../../constants/colors";
import { Stack } from "native-base";
import DefaultAvatar from "../../../components/DefaultAvatar";

const Card = styled.View`
  padding: 15px;
  border: 1px solid #e2e2f0;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-family: "Prompt-Medium";
  font-size: 15px;
`;

const Username = styled.Text`
  font-family: "Prompt-Regular";
  font-size: 11px;
  color: ${COLORS.PRIMARY};
`;

interface employeesProps {
  uid: string;
  name: string;
  user_name: string;
}

const Index = ({ name, user_name }: employeesProps) => {
  return (
    <Card>
      <Stack direction="row" space={4} alignItems="center">
        <DefaultAvatar name={name} />
        <View>
          <Name>{name}</Name>
          <Username>{user_name}</Username>
        </View>
      </Stack>
    </Card>
  );
};

export default Index;
