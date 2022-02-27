import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ children }) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 40,
        paddingVertical: 15,
        backgroundColor: "#000",
        borderRadius: 50,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
