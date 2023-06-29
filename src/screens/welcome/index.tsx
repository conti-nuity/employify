import styled from "styled-components/native";
import Button from "../../components/Button";

const Wrapper = styled.View`
  padding: 70px 30px;
  height: 100%;
  background-color: #fff;
`;

const Logo = styled.Text`
  margin: 120px 0;
  letter-spacing: 7px;
  text-align: center;
  font-size: 20px;
  font-family: "Prompt-Regular";
`;

const ContentButton = styled.View`
  margin-bottom: 20px;
`;

const Index = ({ navigation }: any) => {
  return (
    <Wrapper>
      <Logo>EMPLOYIFY</Logo>
      <ContentButton>
        <Button navigation={navigation} view="LoginCompany" variant="filled">
          Soy empresa
        </Button>
      </ContentButton>
      <Button navigation={navigation} view="LoginEmployee" variant="outlined">
        Soy empleado
      </Button>
      <Button navigation={navigation} view="Posts" variant="text">
        Ver posts
      </Button>
    </Wrapper>
  );
};

export default Index;
