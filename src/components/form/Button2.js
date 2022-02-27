import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button({ label = "empty", onPress = () => {} }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <View>
        <Text style={styles.btnLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#000",
    borderRadius: 50,
  },
  btnLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
