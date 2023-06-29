import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components/native";
import { addEmployee } from "../../api/employee";
import { useEmployeeListStore } from "../../store";
import {
  Wrapper,
  Button,
  ButtonText,
  InputComponent,
  ErrorMessage,
  ErrorInput,
} from "../../styles";
import { ERRORS } from "../../constants/errors";

const ContentForm = styled.View`
  margin-top: 20px;
`;

const Field = styled.View`
  margin-bottom: 20px;
`;

const Title = styled.Text`
  margin-top: 10px;
  font-size: 28px;
  font-family: "Prompt-SemiBold";
`;

const Index = ({ navigation }: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // @ts-ignore
  const employeeList = useEmployeeListStore((state) => state.employeeList);
  // @ts-ignore
  const setEmployeeList = useEmployeeListStore(
    // @ts-ignore
    (state) => state.setEmployeeList
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    setLoading(true);
    addEmployee(data)
      .then((newEmployee) => {
        setError(null);
        const newEmployeeList = [newEmployee, ...employeeList];
        setEmployeeList(newEmployeeList);
        setLoading(false);
        navigation.navigate("HomeCompany");
      })
      .catch((error) => {
        setLoading(false);
        setError(ERRORS.NETWORK);
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Title>Agregar Empleado</Title>
      <ContentForm>
        <Field>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <InputComponent
                w={{
                  base: "100%",
                  md: "25%",
                }}
                type="text"
                placeholder="Nombre"
                onChangeText={(value: any) => onChange(value)}
              />
            )}
            name="name"
            rules={{ required: true }}
          />
          {errors.name && (
            <ErrorInput variant="caption">Este campo es requerido</ErrorInput>
          )}
        </Field>
        <Field>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <InputComponent
                w={{
                  base: "100%",
                  md: "25%",
                }}
                type="text"
                placeholder="Usuario"
                onChangeText={(value: any) => onChange(value)}
              />
            )}
            name="user_name"
            rules={{ required: true }}
          />
          {errors.user_name && (
            <ErrorInput variant="caption">Este campo es requerido</ErrorInput>
          )}
        </Field>
        <Field>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <InputComponent
                w={{
                  base: "100%",
                  md: "25%",
                }}
                type="email"
                placeholder="Correo electronico"
                onChangeText={(value: any) => onChange(value)}
              />
            )}
            name="email"
            rules={{ required: true }}
          />
          {errors.email && (
            <ErrorInput variant="caption">Este campo es requerido</ErrorInput>
          )}
        </Field>
        <Field>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <InputComponent
                w={{
                  base: "100%",
                  md: "25%",
                }}
                type="password"
                placeholder="Contraseña"
                onChangeText={(value: any) => onChange(value)}
              />
            )}
            name="password"
            rules={{ required: true }}
          />
          {errors.password && (
            <ErrorInput variant="caption">Este campo es requerido</ErrorInput>
          )}
        </Field>
        <Button onPress={handleSubmit(onSubmit)} disabled={loading}>
          <ButtonText>{loading ? "Cargando..." : "Agregar"}</ButtonText>
        </Button>
        {error !== null && <ErrorMessage>{error}</ErrorMessage>}
      </ContentForm>
    </Wrapper>
  );
};

export default Index;
