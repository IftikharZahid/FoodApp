import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { Platform } from "react-native"; // Import Platform for conditional rendering
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";



export default function RestaurantCard({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback 
    onPress={()=>navigation.navigate("Resturent" , {...item})}
    >
{/* Creating Shadow  */}

      <View 
        className={`mr-6 bg-slate-200 pb-2 rounded-3xl ${
          Platform.OS === "ios" ? "shadow-orange-300" : "elevation: 3" // Conditional shadow for iOS/Android
        }`}
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View>
          <Text className="text-lg font-bold p-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1 pl-2">
          
          <Icon.Star  height={"20"} width={"20"} stroke={'orange'} />
            
            <Text className="text-green-700"> {item.stars} </Text>

            <Text className="text-gray-700">
              ({item.reviews} reviews).
              <Text className="font-bold">Fast Food</Text>
            </Text>
          </View>
          <View className="flex-row p-2">
            {/* <Image
              className=" w-4 h-4"
              source={require("../assets/images/categories/icons8-takeout-box-96.png")}
            /> */}
                      <Icon.MapPin  height={"20"} width={"20"} stroke={"gray"} />

            <Text className="font-normal "> Nearby - {item.address} </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
