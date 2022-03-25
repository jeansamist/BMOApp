import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Button from "./form/Button2";
import { APP } from "../helpers/data";
const ArticleCard = ({
  img,
  name = "Articles",
  category = 'Clothes',
  colors = [APP.secondary, APP.colorGreen, APP.colorRed],
  price = 0,
  nav,
}) => (
  <View style={styles.articleCard}>
    <View>
      <Image source={img} resizeMode="cover" style={{ width: "100%", height: 150, borderRadius: 20 }} />
    </View>
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 14, color: "#aaa" }}>{category}</Text>
    </View>
    <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 20, marginBottom: 20 }}>
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
    <View style={{paddingHorizontal: 10, marginBottom: 10 }}>
      <Button
        onPress={() => {
          nav("productsMoreNavigation");
        }}
        label={`$ ${price}`}
      />
    </View>
  </View>
);

export default ArticleCard;

const styles = StyleSheet.create({
  articleCard: {
    width: 175,
    height: 335,
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
});
