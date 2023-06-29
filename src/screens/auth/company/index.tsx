import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { login } from "../../../api/company";
import {
  Wrapper,
  Button,
  ButtonText,
  InputComponent,
  ErrorInput,
  ErrorMessage,
  ContentForm,
  Field,
  TitleForm,
} from "../../../styles";
import { ERRORS } from "../../../constants/errors";

const Index = ({ navigation }: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    setLoading(true);
    // The accesses are detailed in the README of the project.
    login(data.email.toLowerCase(), data.password.toLowerCase())
      .then(() => {
        setError(null);
        setLoading(false);
        navigation.navigate("HomeCompany");
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.includes("invalid-email")) {
          setError(ERRORS.EMAIL);
        } else {
          setError(ERRORS.PASSWORD);
        }
        console.log(error.message);
      });
  };

  return (
    <Wrapper>
      <TitleForm>Iniciar Sesión</TitleForm>
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
                minLength={6}
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
          <ButtonText>{loading ? "Cargando..." : "Entrar"}</ButtonText>
        </Button>
      </ContentForm>
      {error !== null && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Index;
