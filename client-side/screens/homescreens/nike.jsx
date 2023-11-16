// Screen 18 => Livingstone

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
  } from "react-native";
  import React from "react";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { brand } from "../../data/brand";
  import { useDarkMode } from "../../context/darkmode";
  import { StatusBar } from "expo-status-bar";
  
  const Nike = ({navigation}) => {
    //backwards navigations
    const BackToHome=()=>{
      navigation.navigate("Home");
    }


    const navigateScreenNine=()=>{
      navigation.navigate("screen9");
    }

    const { isDarkMode } = useDarkMode();
    return (
      <View className={`flex-1 pt-11 bg-${!isDarkMode ? "white" : "black"}`}>
        {/* Top part */}
        <StatusBar
        backgroundColor={!isDarkMode ? 'white' : 'white'} // Set status bar background color based on dark mode state
      />
        <View className="flex-row justify-between items-center mx-5 my-5">
          {/* Navigate back */}
          <TouchableOpacity
            className={`bg-gray-${!isDarkMode ? "200" : "700"} p-2 rounded-full`}
            onPress={BackToHome}
          >
             <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={`${!isDarkMode ? "black" : "white"}`}
          />
          </TouchableOpacity>
          <View className="bg-gray-200 p-3 px-5 rounded-xl h-11 w-20">
            <Image source={require("../../assets/Vector.png")} />
          </View>
          <TouchableOpacity  className={`bg-gray-${!isDarkMode ? "200" : "700"} p-2 rounded-full`}>
          <MaterialCommunityIcons
            name="shopping-outline"
            size={24}
            color={`${!isDarkMode ? "black" : "white"}`}
          />
          </TouchableOpacity>
        </View>
  
        <View className="flex-row justify-between mx-5 items-center">
          <View>
          <Text
            className={`text-${
              !isDarkMode ? "black" : "white"
            } font-semibold text-xl`}
          >
            365 Items
          </Text>
            <Text className="text-gray-500 text-lg">Available in stock</Text>
          </View>
          <View className={`flex-row items-center bg-gray-${
            !isDarkMode ? "200" : "700"
          } p-2 rounded-xl`}>
             <MaterialCommunityIcons
            name="text"
            size={24}
            color={`${!isDarkMode ? "black" : "white"}`}
          />
          <Text
            className={`text-${
              !isDarkMode ? "black" : "white"
            } ml-2 text-xl font-medium`}
          >
            Sort
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
              <View className="w-full h-72 rounded-xl bg-red-500">
                <Image
                  source={item.imageSource}
                  className="h-full w-full rounded-xl"
                />
                <View className="absolute top-5 right-5">
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color="gray"
                  />
                </View>
              </View>
              <TouchableOpacity onPress={navigateScreenNine}>
              <Text
              className={`text-${
                !isDarkMode ? "black" : "white"
              } font-semibold text-base`}
            >
              {item.brandName}
            </Text>
            <Text
              className={`text-${
                !isDarkMode ? "black" : "white"
              } text-base font-semibold`}
            >
              {item.product}
            </Text>
              <Text
              className={`text-${
                !isDarkMode ? "black" : "white"
              } text-lg font-bold`}
            >
              {item.price}
            </Text>
            </TouchableOpacity>

            </View>
          )}
        />
      </View>
    );
  };
  
  export default Nike;
  