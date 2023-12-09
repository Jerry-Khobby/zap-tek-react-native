import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from "../../context/darkmode";

const OrderConfirmed = ({ navigation }) => {
  //continue shopping
  // handle home screen
  const BackToHome = () => {
    navigation.navigate("HomeComponents");
  };

  // backward navigations
  const backWardNavigation = () => {
    navigation.navigate("screen12");
  };
  //Orders
  const orderNavigation = () => {
    navigation.navigate("Order");
  };

  const { isDarkMode } = useDarkMode();
  return (
    <View className={`flex-1 ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <TouchableOpacity
        className={`w-12 h-12 mx-5 mt-11 items-center justify-center rounded-full ${
          isDarkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
        onPress={backWardNavigation}
      >
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={isDarkMode ? "white" : "black"}
        />
      </TouchableOpacity>

      <Image
        source={require("../../assets/Order.png")}
        className="relative -top-16 mx-auto my-auto"
      />
      <View className="relative -top-14">
        <Text
          className={`text-4xl font-bold text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Order Confirmed!
        </Text>

        <Text
          className={`mx-5 text-center text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Your order has been confirmed, we will send you confirmation email
          shortly.
        </Text>
      </View>
      <TouchableOpacity onPress={orderNavigation}>
        <Text className="text-2xl text-center mx-5 mb-10 bg-gray-200 p-3 rounded-xl text-gray-400 font-semibold">
          Go to Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-purple-600" onPress={BackToHome}>
        <Text className=" text-white text-center text-xl p-2 pb-5">
          Continue Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({});
