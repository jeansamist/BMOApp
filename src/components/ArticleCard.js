import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "./form/Button2";
const ArticleCard = ({
  img,
  name,
  category,
  colors = ["red", "yellow", "blue"],
  price = 0,
  nav,
}) => (
  <View style={styles.articleCard}>
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
      {img}
    </View>
    <View style={{ marginTop: 80 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 14, color: "#aaa" }}>{category}</Text>
    </View>
    <View style={{ flex: 1, flexDirection: "row", marginTop: 15 }}>
      {colors.map((color, k) => (
        <View
          style={{
            width: 15,
            height: 15,
            backgroundColor: color,
            borderRadius: 20,
            marginRight: 10,
          }}
          key={k}
        ></View>
      ))}
    </View>
    <View>
      <Button
        onPress={() => {
          nav("productsMoreNavigation");
        }}
        label={`$${price}`}
      />
    </View>
  </View>
);

export default ArticleCard;

const styles = StyleSheet.create({
  articleCard: {
    width: 175,
    height: 300,
    padding: 20,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
});
