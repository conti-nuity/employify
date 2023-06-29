import styled from "styled-components/native";
import { COLORS } from "../../../constants/colors";
import { type Post } from "../../../types";

const Card = styled.View`
  padding: 15px;
  background-color: #e2e2f0;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-family: "Prompt-Medium";
  font-size: 15px;
  color: ${COLORS.PRIMARY};
`;

const Description = styled.Text`
  font-family: "Prompt-Regular";
  font-size: 11px;
`;

const Index = ({ id, title, body }: Post) => {
  return (
    <Card key={id}>
      <Title>{title}</Title>
      <Description>{body}</Description>
    </Card>
  );
};

export default Index;
