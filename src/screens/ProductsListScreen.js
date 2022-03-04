import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { APP } from "../helpers/data";

export default function ProductsListScreen(props) {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([
    {
      cover: require("../assets/images/item392x252.png"),
      category: "Electro",
      name: "PS4 Controler",
      price: Math.round(Math.random() * 50),
    },
    {
      cover: require("../assets/images/item2.png"),
      category: "Electro",
      name: "PS4 Controler",
      price: Math.round(Math.random() * 50),
    },
    {
      cover: require("../assets/images/shoes2.png"),
      category: "Electro",
      name: "PS4 Controler",
      price: Math.round(Math.random() * 50),
    },
    {
      cover: require("../assets/images/tshirt.png"),
      category: "Electro",
      name: "PS4 Controler",
      price: Math.round(Math.random() * 50),
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ height: "100%" }}>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.container}>
            <ActivityIndicator size={"large"} color={APP.primary} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ height: "100%" }}>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.container}>
            {products.map((product, k) => (
              <ArticleCard
                img={product.cover}
                name={product.name}
                category={product.category}
                price={product.price}
                nav={props.navigation.navigate}
                key={k}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
