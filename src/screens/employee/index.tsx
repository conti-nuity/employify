import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Stack } from "native-base";
import { useEmployeetStore } from "../../store";
import { type Employee } from "../../types";
import Button from "../../components/Button";
import DefaultAvatar from "../../components/DefaultAvatar";

const Wrapper = styled.View`
  padding: 70px 30px;
  height: 100%;
  background-color: #fff;
`;

const Greetings = styled.Text`
  font-family: "Prompt-Regular";
  font-size: 15px;
`;

const Welcome = styled.Text`
  margin-top: 30px;
  font-family: "Prompt-Regular";
  font-size: 19px;
  text-align: center;
`;

const Name = styled.Text`
  font-family: "Prompt-Medium";
  font-size: 21px;
`;

const Content = styled.View`
  margin: 50px 0;
`;

const Index = ({ navigation }: any) => {
  // @ts-ignore
  const employee: Employee = useEmployeetStore(
    // @ts-ignore
    (state) => state.employee
  );

  const first_name = employee.name.split(" ")[0];

  return (
    <Wrapper>
      <Stack
        direction="row"
        space={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <View>
          <Greetings>Hola!</Greetings>
          <Name>{employee.user_name}</Name>
        </View>
        <View>
          <DefaultAvatar name={employee.name} />
        </View>
      </Stack>
      <Content>
        <Image
          style={{
            width: 275,
            height: 196,
          }}
          source={require("../../../assets/images/tasks.png")}
        />
        <Welcome>
          Estas listo para revisar tus tareas de hoy {first_name}
        </Welcome>
      </Content>
      <Button navigation={navigation} view="Welcome" variant="text">
        Cerrar sesión
      </Button>
    </Wrapper>
  );
};

export default Index;
