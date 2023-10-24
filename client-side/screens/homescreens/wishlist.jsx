// Screen 19 => Livingstone
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    StatusBar,
  } from "react-native";
  import React,{useState} from "react";
  import { useNavigation } from "@react-navigation/native";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { brand } from "../../data/brand";
  
  const Wishlist = ({navigation}) => {
  // navigation backward function for wishlist screen to the homescreen 

const handleBackWardNavigation=()=>{
    navigation.navigate("Home");
}

    const [likedItems, setLikedItems] = useState({});
  
    const handleLikeToggle = (itemId) => {
      setLikedItems((prevLikedItems) => {
        return { ...prevLikedItems, [itemId]: !prevLikedItems[itemId] };
      });
    };



    return (
      <View className="flex-1">
        <View className="flex-1 bg-white pt-5">
          {/* Top part */}
          <View className="flex-row justify-between items-center mx-5 my-5">
            {/* Navigate back */}
            <TouchableOpacity
              className="bg-gray-200 p-2 rounded-full"
              onPress={handleBackWardNavigation}
            >
              <MaterialCommunityIcons name="arrow-left" size={24} />
            </TouchableOpacity>
            <Text className="text-xl font-bold">Wishlist</Text>
            <TouchableOpacity className="bg-gray-200 p-2 rounded-full">
              <MaterialCommunityIcons name="shopping-outline" size={24} />
            </TouchableOpacity>
          </View>
          {/*  */}
  
          <View className="flex-row justify-between mx-5 items-center">
            <View>
              <Text className="font-semibold text-xl">365 Items</Text>
              <Text className="text-gray-500 text-lg">in wishlist</Text>
            </View>
            <View className="flex-row items-center bg-gray-200 p-2 rounded-xl">
              <MaterialCommunityIcons name="draw-pen" size={24} />
              <Text className="ml-2 text-xl font-semibold ">Edit</Text>
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
                  <TouchableOpacity className="absolute top-5 right-5">
                  <MaterialCommunityIcons
                  name={
                    likedItems[item.id]
                      ? "heart"
                      : "heart-outline"
                  }
                  size={24}
                  color={likedItems[item.id] ? "red" : "gray"}
                />
                  </TouchableOpacity>
                </View>
                <Text className="font-semibold text-base">{item.brandName}</Text>
                <Text className="text-base font-semibold">{item.product}</Text>
                <Text className="text-lg font-bold">{item.price}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  };
  
export default Wishlist;