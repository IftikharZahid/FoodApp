import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { featured } from "../constants";

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0]; // Access the first restaurant
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      {/* Map View */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }}
        ></Marker>
      </MapView>
    </View>
  );
}
