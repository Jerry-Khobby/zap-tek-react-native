// I think we should delete this file by Livingstone

import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import twrnc from "tailwind-react-native-classnames";
import React from "react";
import { View, Text } from "react-native";
import { useDarkMode } from "../context/darkmode";

{
  /*Star-like ratings ascribed to each review*/
}
export const Review_rating = ({ numOfStars }) => {
  const { isDarkMode } = useDarkMode();

  numOfStars = Math.floor(numOfStars);

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < numOfStars) {
      stars.push(
        <View key={i}>
        <Ionicons name="star" size={12} color="orange" style={twrnc`mr-0.5`} />
        </View>
      );
    } else {
      stars.push(
        <View key={i}>
        <Ionicons
          name="star-outline"
          size={12}
          color={!isDarkMode ? "black" : "white"}
          style={twrnc`mr-0.5`}
        />
        </View>
      );
    }
  }

  return (
    <View style={twrnc`flex-row`}>
      {stars}
      {/* <Text>{numOfStars}</Text> */}
    </View>
  );
};