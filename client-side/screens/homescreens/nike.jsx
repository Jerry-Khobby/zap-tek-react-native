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
  import { useNavigation } from "@react-navigation/native";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { brand } from "../../data/brand";
  
  const nike = () => {
    const navigation = useNavigation();
    return (
      <View className="flex-1 bg-white">
        {/* Top part */}
        <View className="flex-row justify-between items-center mx-5 my-5">
          {/* Navigate back */}
          <TouchableOpacity
            className="bg-gray-200 p-2 rounded-full"
            onPress={() => alert("Navigate Back is under construction")}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} />
          </TouchableOpacity>
          <View className="bg-gray-200 p-3 px-5 rounded-xl">
            <Image source={require("../../assets/Vector.png")} />
          </View>
          <TouchableOpacity className="bg-gray-200 p-2 rounded-full">
            <MaterialCommunityIcons name="shopping-outline" size={24} />
          </TouchableOpacity>
        </View>
  
        <View className="flex-row justify-between mx-5 items-center">
          <View>
            <Text className="font-semibold text-2xl">365 Items</Text>
            <Text className="text-gray-500 text-lg">Available in stock</Text>
          </View>
          <View className="flex-row items-center bg-gray-200 p-2 rounded-xl">
            <MaterialCommunityIcons name="text" size={24} />
            <Text className="ml-2 text-2xl font-medium">Sort</Text>
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
              <Text className="font-semibold text-base">{item.brandName}</Text>
              <Text className="text-base font-semibold">{item.product}</Text>
              <Text className="text-lg font-bold">{item.price}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  
  export default nike;
  
  const styles = StyleSheet.create({});