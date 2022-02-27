import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "../components/CategoryCard";
export default function ProductsCategoriesScreen(props) {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView style={{ height: "100%" }}>
        <CategoryCard nav={props.navigation.navigate} />
      </ScrollView>
    </SafeAreaView>
  );
}
