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

import Button from "../components/form/Button2";

export default function HomeScreen(props) {
  console.log(props.navigation);
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.headCard}>
          <Image
            source={require("./../assets/images/item392x252.png")}
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
          />
          <View>
            <Button label="Add to cart" />
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Best Articles</Text>
          <View style={styles.cardlistContainer}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headCard: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    height: 300,
    padding: 20,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginHorizontal: "2.5%",
    borderRadius: 10,
    marginVertical: 20,
  },
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
  cardlistContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
