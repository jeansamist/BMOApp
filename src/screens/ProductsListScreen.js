import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import ArticleCard from "../components/ArticleCard";

export default function ProductsListScreen(props) {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.container}>
          <ArticleCard
            img={
              <Image
                source={require("./../assets/images/item392x252.png")}
                resizeMode="contain"
                style={{ width: 125, height: 125 }}
              />
            }
            name="PS4 Controler"
            category="Electro"
            price={20.74}
            nav={props.navigation.navigate}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
