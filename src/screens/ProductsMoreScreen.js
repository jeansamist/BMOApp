import { View, Text, Button } from "react-native";
import React from "react";

export default function ProductsMoreScreen(props) {
  return (
    <View>
      <Text>ProductsMoreScreen</Text>
      <Button
        onPress={() => {
          props.navigation.push("ProductsMoreNavigation");
        }}
        title="Navig"
      ></Button>
    </View>
  );
}
