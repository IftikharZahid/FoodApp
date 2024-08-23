import { View, Text } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { Navigation } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import DeliveryScreen from "./DeliveryScreen";

export default function OrderPreparingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <LottieView
        source={require("../assets/lottie.json")}
        autoPlay
        loop
        speed={0.5}
        style={{
          height: 500,
          width: 500,
          alignSelf: "center",
          marginRight: 50,
        }}
      />

    </View>
  );
}
