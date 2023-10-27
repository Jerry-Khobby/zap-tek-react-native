import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OrderConfirmed = () => {
  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity
        className="bg-gray-100 w-12 h-12 rounded-full mx-5 mt-5 items-center justify-center"
        onPress={() => alert("Navigate Back is under construction")}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} />
      </TouchableOpacity>
      <Image
        source={require("../../assets/Order.png")}
        className="mx-auto my-auto relative -top-5"
      />
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({});