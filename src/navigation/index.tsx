import { createStackNavigator } from "@react-navigation/stack";
import HomeCompany from "../screens/company";
import LoginCompany from "../screens/auth/company";
import AddEmployee from "../screens/add-employee";
import Welcome from "../screens/welcome";
import Headerleft from "../components/HeaderLeft";
import LoginEmployee from "../screens/auth/employee";
import HomeEmployee from "../screens/employee";
import Posts from "../screens/posts";
import { COLORS } from "../constants/colors";

const Stack = createStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={({ route, navigation }) => ({
        headerTintColor: `${COLORS.BLACK}`,
        headerStyle: {
          elevation: 0,
          backgroundColor: `${COLORS.WHITE}`,
        },
        headerLeft: () => <Headerleft route={route} navigation={navigation} />,
        cardStyle: { backgroundColor: `${COLORS.WHITE}` },
      })}
    >
      {/* Company */}
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginCompany"
        component={LoginCompany}
        options={{ headerTitle: () => null }}
      />
      <Stack.Screen
        name="HomeCompany"
        component={HomeCompany}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddEmployee"
        component={AddEmployee}
        options={{ headerTitle: () => null }}
      />
      {/* Employee */}
      <Stack.Screen
        name="LoginEmployee"
        component={LoginEmployee}
        options={{ headerTitle: () => null }}
      />
      <Stack.Screen
        name="HomeEmployee"
        component={HomeEmployee}
        options={{ headerShown: false }}
      />
      {/* Posts */}
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{ headerTitle: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Index;
