import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useDarkMode } from "../../context/darkmode";

const orderConfirmed = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <View className={`flex-1 bg-${!isDarkMode ? "white" : "black"}`}>
      <TouchableOpacity
        className={`bg-gray-${
          !isDarkMode ? "200" : "700"
        } w-12 h-12 rounded-full mx-5 mt-5 items-center justify-center`}
        onPress={() => alert("Navigate Back is under construction")}
      >
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color={`${!isDarkMode ? "black" : "white"}`}
        />
      </TouchableOpacity>
      <Image
        source={
          !isDarkMode
            ? require("../../assets/phonelight.png")
            : require("../../assets/phonedark.png")
        }
        className="relative -top-16 mx-auto my-auto"
      />
      <View className="relative -top-36">
        <Text
          className={`text-${
            !isDarkMode ? "black" : "white"
          } text-4xl font-bold text-center`}
        >
          Order Confirmed
        </Text>
        <Text className="mx-5 text-center text-lg text-gray-500">
          Your order has been confirmed, we will send you confirmation email
          shortly.
        </Text>
      </View>
      <Text
        onPress={() => alert("Currently not working")}
        className={`text-2xl text-center mx-5 mb-10 bg-gray-${
          !isDarkMode ? "200" : "700"
        } p-3 rounded-xl text-gray-400`}
      >
        Go to Orders
      </Text>
      <Text className="bg-purple-500 text-white text-center text-xl p-2 pb-5">
        Continue Shopping
      </Text>
    </View>
  );
};

export default orderConfirmed;

const styles = StyleSheet.create({});
