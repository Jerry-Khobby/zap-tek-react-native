import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from "../../context/darkmode";
import { brand } from "../../data/brand";

const Order = ({ navigation }) => {
  const handleBackWardNavigation = () => {
    navigation.navigate("Home");
  };

  const handleCartScreenNavigation = () => {
    navigation.navigate("screen12");
  };

  const { isDarkMode } = useDarkMode();
  return (
    <View className={`mt-2 bg-${!isDarkMode ? "white" : "black"} flex-1`}>
      <View className="flex-row justify-between items-center mx-5 my-5">
        {/* Navigate back */}
        <TouchableOpacity
          className={
            !isDarkMode
              ? "bg-gray-200 p-2 rounded-full"
              : "bg-gray-700 p-2 rounded-full"
          }
          onPress={handleBackWardNavigation}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text
          className={
            !isDarkMode ? "text-xl font-bold" : "text-xl font-bold text-white"
          }
        >
          Orders
        </Text>
        <TouchableOpacity
          className={
            !isDarkMode
              ? "bg-gray-200 p-2 rounded-full"
              : "bg-gray-700 p-2 rounded-full"
          }
          onPress={handleCartScreenNavigation}
        >
          <MaterialCommunityIcons
            name="shopping-outline"
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={brand}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            className={`flex-row justify-between items-center mx-5 my-2 bg-gray-${
              !isDarkMode ? "200" : "700"
            } rounded-md `}
          >
            <View className="flex-row justify-between items-center">
              <Image
                source={item.imageSource}
                className="w-24 h-28 rounded-md"
              />
              <View className="ml-5">
                <Text
                  className={
                    !isDarkMode
                      ? "text-lg font-bold"
                      : "text-lg font-bold text-white"
                  }
                >
                  {item.brandName}
                </Text>
                <Text
                  className={
                    !isDarkMode
                      ? "text-lg font-bold"
                      : "text-lg font-bold text-white"
                  }
                >
                  ${item.price}
                </Text>
                <Text
                  className={
                    !isDarkMode
                      ? "text-lg font-bold"
                      : "text-lg font-bold text-white"
                  }
                >
                  {item.date}22/12/2020
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Order;
