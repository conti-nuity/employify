import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

interface headerLeftProps {
  route?: any;
  navigation: any;
}

const Index = ({ route, navigation }: headerLeftProps) => {
  const back = () => {
    navigation.goBack();
  };

  return (
    <View style={{ paddingLeft: 30 }}>
      <TouchableOpacity
        onPress={() => {
          back();
        }}
      >
        <Feather
          style={{ marginRight: 10 }}
          name="arrow-left"
          size={26}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Index;
