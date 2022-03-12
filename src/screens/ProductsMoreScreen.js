import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from "../components/form/Button2";
import { APP } from "../helpers/data";
import React, { useState, useEffect } from "react";

function Counter({ nbr = 1, onUpdate = () => {} }) {
  const [qte, setqte] = useState(nbr);
  onUpdate(qte);
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          if (qte !== 1) {
            setqte(qte - 1);
            // onUpdate(qte);
          }
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: APP.primary,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "#fff",
            }}
          >
            -
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: APP.secondary,
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: APP.primary,
          }}
        >
          {qte}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setqte(qte + 1);
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: APP.primary,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "#fff",
            }}
          >
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function ProductsMoreScreen(props) {
  const colors = [APP.secondary, APP.colorGreen, APP.colorRed, "#000"];
  const [qte, setqte] = useState(1);
  useEffect(() => {
    fetch(APP.server);
  }, []);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.header}>
          <View
            style={{
              flex: 0.5,
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              T-Shirt
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              $15.5
            </Text>
          </View>
          <View
            style={{
              flex: 0.5,
              transform: [
                {
                  translateY: 50,
                },
              ],
            }}
          >
            <Image
              source={require("./../assets/images/tshirt.png")}
              resizeMode="contain"
              style={{ width: 200, height: 200 }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 50,
            width: "90%",
            marginHorizontal: "5%",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Colors
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              {colors.map((color, k) => (
                <View
                  style={{
                    width: 25,
                    height: 25,
                    backgroundColor: color,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                  key={k}
                ></View>
              ))}
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id
              quidem delectus, praesentium, quia commodi velit iure
              necessitatibus nostrum sapiente numquam vel. Nam architecto
              nesciunt dignissimos labore esse, quisquam in?
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ marginBottom: 10, fontSize: 25, fontWeight: "bold" }}
            >
              Quantity
            </Text>
            <Counter onUpdate={setqte} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ marginBottom: 10, fontSize: 25, fontWeight: "bold" }}
            >
              Total
            </Text>
            <Text
              style={{ fontWeight: "bold", color: APP.primary, fontSize: 20 }}
            >
              ${15.5 * qte}
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              onPress={() => {
                props.navigation.navigate("productsListNavigation");
              }}
              label="Add to cart"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: APP.primary,
  },
});
