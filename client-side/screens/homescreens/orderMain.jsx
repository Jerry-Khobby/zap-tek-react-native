// Screen 18 => Livingstone

import {
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
  import twrnc from "tailwind-react-native-classnames";
  import { useSelector } from "react-redux";
  
  const OrderMain = ({navigation}) => {
    const likedItems = useSelector((state) => state.wishlist.orderItems);
    //backwards navigations
    const BackToHome=()=>{
      navigation.navigate("Home");
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
          <View>
           <Text             style={twrnc`text-3xl font-semibold text-${
              !isDarkMode ? "black" : "white"
            }`}>Orders</Text>
          </View>
          <TouchableOpacity  className={`bg-gray-${!isDarkMode ? "200" : "700"} p-2 rounded-full`}>
          <MaterialCommunityIcons
            name="shopping-outline"
            size={24}
            color={`${!isDarkMode ? "black" : "white"}`}
          />
          </TouchableOpacity>
        </View>  
      <FlatList
          className="flex-1"
          data={likedItems}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-1 m-2 mx-3 w-1/2">
              <View className="w-full h-72 rounded-xl bg-red-500">
                <Image
                  source={item.imageSource}
                  className="h-full w-full rounded-xl"
                />
              </View>
              <View>
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
              } text-sm font-bold`}
            >
             Price:{item.price}
            </Text>
            <Text
              className={`text-${
                !isDarkMode ? "black" : "white"
              } text-sm font-bold`}
            >
              {item.quantity} quantity ordered
            </Text>
            </View>

            </View>
          )}
        />
      </View>
    );
  };
  
  export default OrderMain;
  