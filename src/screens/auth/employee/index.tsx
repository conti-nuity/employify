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
import { getEmployeeInfo } from "../../../api/employee";
import { useEmployeetStore } from "../../../store";
import { ERRORS } from "../../../constants/errors";

const Index = ({ navigation }: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // @ts-ignore
  const setEmployee = useEmployeetStore(
    // @ts-ignore
    (state) => state.setEmployee
  );

  const onSubmit = (data: any) => {
    setLoading(true);
    login(data.email.toLowerCase(), data.password)
      .then((user: any) => {
        setError(null);
        getEmployeeInfo(user.uid)
          .then((info) => {
            setError(null);
            setLoading(false);
            setEmployee(info);
            navigation.navigate("HomeEmployee");
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.includes("invalid-email")) {
          setError(ERRORS.EMAIL);
        } else {
          setError(ERRORS.PASSWORD);
        }
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <TitleForm>Accede a tu cuenta</TitleForm>
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
          <ButtonText>{loading ? "Cargando..." : "Entrar"}</ButtonText>
        </Button>
        {error !== null && (
          <ErrorMessage>Ocurrio un error, intente más tarde</ErrorMessage>
        )}
      </ContentForm>
    </Wrapper>
  );
};

export default Index;
