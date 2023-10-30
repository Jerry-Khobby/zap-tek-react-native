// Screen 19 => Livingstone
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { brand } from "../../data/brand";
import { useDarkMode } from "../../context/darkmode";

const wishlist = () => {
  const navigation = useNavigation();

  const { isDarkMode } = useDarkMode();

  return (
    <View className="flex-1">
      <View className={`flex-1 bg-${!isDarkMode ? "white" : "black"} mt-5`}>
        {/* Top part */}
        <View className="flex-row justify-between items-center mx-5 my-5">
          {/* Navigate back */}
          <TouchableOpacity
            className={`bg-gray-${
              !isDarkMode ? "200" : "700"
            } p-2 rounded-full`}
            onPress={() => alert("Navigate Back is under construction")}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={30}
              color={`${!isDarkMode ? "black" : "white"}`}
            />
          </TouchableOpacity>
          <Text
            className={`text-xl font-bold text-${
              !isDarkMode ? "black" : "white"
            }`}
          >
            Wishlist
          </Text>
          <TouchableOpacity
            className={`bg-gray-${
              !isDarkMode ? "200" : "700"
            } p-2 rounded-full`}
          >
            <MaterialCommunityIcons
              name="shopping-outline"
              size={30}
              color={`${!isDarkMode ? "black" : "white"}`}
            />
          </TouchableOpacity>
        </View>
        {/*  */}

        <View className="flex-row justify-between mx-5 items-center">
          <View>
            <Text
              className={`text-${
                !isDarkMode ? "black" : "white"
              } font-semibold text-2xl`}
            >
              365 Items
            </Text>
            <Text className="text-gray-500 text-lg">in wishlist</Text>
          </View>
          <View
            className={`flex-row items-center bg-gray-${
              !isDarkMode ? "200" : "700"
            } p-2 rounded-xl`}
          >
            <MaterialCommunityIcons
              name="draw-pen"
              size={30}
              color={`${!isDarkMode ? "black" : "white"}`}
            />
            <Text
              className={`ml-2 text-2xl font-semibold text-${
                !isDarkMode ? "black" : "white"
              }`}
            >
              Edit
            </Text>
          </View>
        </View>

        <FlatList
          className="flex-1"
          data={brand}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-1 m-2 mx-3 w-1/2">
              <View className="w-full h-72 rounded-xl bg-gray-500">
                <Image
                  source={item.imageSource}
                  className="h-full w-full rounded-xl"
                />
                <View className="absolute top-5 right-5">
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={30}
                    color="gray"
                  />
                </View>
              </View>
              <Text
                className={`font-semibold text-base text-${
                  !isDarkMode ? "black" : "white"
                }`}
              >
                {item.brandName}
              </Text>
              <Text
                className={`text-base font-semibold text-${
                  !isDarkMode ? "black" : "white"
                }`}
              >
                {item.product}
              </Text>
              <Text
                className={`text-lg font-bold text-${
                  !isDarkMode ? "black" : "white"
                }`}
              >
                {item.price}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default wishlist;

const styles = StyleSheet.create({});
