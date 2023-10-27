import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const screen_12 = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row mx-5 mt-10 items-center">
        <View className="bg-gray-100 p-2 rounded-full">
          <MaterialCommunityIcons name="arrow-left" size={30} />
        </View>
        <Text className="mx-auto text-2xl font-semibold">Cart</Text>
      </View>
      <View className="flex-row">
        <Image
          source={require("../../assets/icon.png")}
          className="w-20 h-20"
        />
        <View>
          <Text>Men's Tie-Dye T-shirt</Text>
          <Text>Nike Sportswear</Text>
          <Text>$45 (-$4.00 Tax)</Text>
          <View className="flex-row">
            <View>
              <MaterialCommunityIcons name="arrow-down" size={20} />
            </View>
            <Text>1</Text>
            <View>
              <MaterialCommunityIcons name="arrow-up" size={20} />
            </View>
            <View>
              <MaterialCommunityIcons name="home" size={20} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default screen_12;

const styles = StyleSheet.create({});
