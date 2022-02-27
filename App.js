import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Home from "./src/screens/HomeScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { APP } from "./src/helpers/data";
const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homeNavigation"
        component={Home}
        options={{
          title: "Home",
          headerLeft: null,
          headerStyle: {
            backgroundColor: APP.primary,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  flex: 1,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? APP.primary : "#fff",
                }}
              >
                <FontAwesomeIcon
                  size={20}
                  color={focused ? "#fff" : APP.primary}
                  name="home"
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="products"
        component={ProductsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  flex: 1,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? APP.primary : "#fff",
                }}
              >
                <FontAwesomeIcon
                  size={20}
                  color={focused ? "#fff" : APP.primary}
                  name="table"
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      <StatusBar style="light" backgroundColor={APP.primary} />
    </NavigationContainer>
  );
}
