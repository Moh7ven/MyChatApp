import { SafeAreaView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { React } from "react";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Yes</Text>
        <FontAwesomeIcon icon={faMugSaucer} />
      </View>
    </SafeAreaView>
  );
}
