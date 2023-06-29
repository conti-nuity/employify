import { useEffect, useState } from "react";
import styled from "styled-components/native";
import Button from "../../components/Button";
import AddEmployee from "../../components/AddEmployee";
import EmployeeCard from "./components/EmployeeCard";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { Stack } from "native-base";
import { Loading, NoResults, ErrorMessage } from "../../styles";
import { getEmployees } from "../../api/employee";
import { useEmployeeListStore } from "../../store";
import { ERRORS } from "../../constants/errors";

const Wrapper = styled.View`
  padding: 40px 30px;
  height: 100%;
  background-color: #fff;
`;

const Logo = styled.Text`
  margin-top: 40px;
  margin-bottom: 40px;
  letter-spacing: 7px;
  text-align: center;
  font-size: 20px;
  font-family: "Prompt-Regular";
`;

const Index = ({ navigation }: any) => {
  interface employeesProps {
    uid: string;
    name: string;
    user_name: string;
  }

  // @ts-ignore
  const employeeList = useEmployeeListStore((state) => state.employeeList);

  // @ts-ignore
  const setEmployeeList = useEmployeeListStore(
    // @ts-ignore
    (state) => state.setEmployeeList
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getEmployees()
      .then((res: any) => {
        setLoading(false);
        setEmployeeList(res);
        setError(null);
      })
      .catch((error: any) => {
        setLoading(false);
        setError(ERRORS.NETWORK);
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <View>
        <Stack
          direction="row"
          space={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <View>
            <Logo>COMPANY</Logo>
          </View>
          <View>
            <AddEmployee navigation={navigation}>
              {/* @ts-ignore */}
              <Feather
                style={{ marginRight: 10 }}
                name="plus"
                size={26}
                color="#2654FF"
              />
            </AddEmployee>
          </View>
        </Stack>
        {loading ? (
          <Loading>Cargando...</Loading>
        ) : (
          <View>
            {employeeList && employeeList.length ? (
              <>
                {employeeList.map((employee: employeesProps) => (
                  <EmployeeCard key={employee.uid} {...employee} />
                ))}
              </>
            ) : (
              <NoResults>No hay empleados</NoResults>
            )}
            {error !== null && <ErrorMessage>{error}</ErrorMessage>}
            <Button navigation={navigation} view="Welcome" variant="text">
              Cerrar sesión
            </Button>
          </View>
        )}
      </View>
    </Wrapper>
  );
};

export default Index;
