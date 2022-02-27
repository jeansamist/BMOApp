import { View, StyleSheet, TextInput } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { APP } from "../../helpers/data";
export default function Field({
  label = "Empty",
  type = "text",
  icoName = "user",
}) {
  const [value, setValue] = useState("");
  let isPassword = false;
  if (type === "password") {
    isPassword = true;
  }
  return (
    <View
      style={{ flex: 1, flexDirection: "row", width: "100%", marginTop: 10 }}
    >
      <View style={{ width: "85%" }}>
        <TextInput
          placeholder={label}
          value={value}
          style={styles.input}
          onChangeText={setValue}
          secureTextEntry={isPassword}
        />
      </View>
      <View style={styles.ico}>
        <FontAwesomeIcon size={24} color={APP.primary} name={icoName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    width: "100%",
  },
  ico: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    width: "10%",
  },
});
