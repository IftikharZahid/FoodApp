import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import RestaurantCard from "../components/restaurantCard";
import { featured } from "../constants";
import OrderPreparingScreen from "./OrderPreparingScreen";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";

export default function CartScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-white flex-1">
      {/* goBack button code */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500 text-xl">
            {restaurant.name}
          </Text>
        </View>
      </View>

      {/* Delivery Time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/bicegay.png")}
          className="w-20 h-20 rounded-full bg-gray-100"
        />
        <Text className="flex-1 pl-4">Delivery in 20 - 30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // Ensures padding for scroll
        className="bg-white pt-2 flex-1"
      >
        {restaurant.dishes.map((dish, index) => (
          <View
            key={index}
            className="flex-row items-center space-x-2 py-2 px-4 bg-gray-100 rounded-3xl mx-2 m-2 shadow-md"
          >
            <Text className="font-bold" style={{ color: themeColors.text }}>
              2x
            </Text>
            <Image className="h-14 w-14 rounded-full" source={dish.image} />
            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
            <Text className="font-semibold text-base">${dish.price}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                stroke={"white"}
                strokeWidth={2}
                height={20}
                width={20}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Totals */}
      <View
        className="p-5 px-6 rounded-t-3xl space-y-3"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$10</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$30</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparing")}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
