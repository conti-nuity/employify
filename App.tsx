import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Navegation from "./src/navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Medium": require("./assets/fonts/Prompt-Medium.ttf"),
    "Prompt-SemiBold": require("./assets/fonts/Prompt-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navegation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
