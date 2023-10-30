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
  import { useDarkMode } from "../../context/darkmode";
  
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



  const {isDarkMode}=useDarkMode();



    return (
      <View className={!isDarkMode ? "flex-1 bg-white" : "flex-1 bg-black"}>
        <View className="flex-1  pt-5">
          {/* Top part */}
          <View className="flex-row justify-between items-center mx-5 my-5">
            {/* Navigate back */}
            <TouchableOpacity
        className={!isDarkMode ? "bg-gray-200 p-2 rounded-full" : "bg-gray-700 p-2 rounded-full"}
        onPress={handleBackWardNavigation}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color={isDarkMode ? 'white' : 'black'}/>
      </TouchableOpacity>
            <Text className={!isDarkMode ? "text-xl font-bold" : "text-xl font-bold text-white"}>Wishlist</Text>
            <TouchableOpacity
        className={!isDarkMode ? "bg-gray-200 p-2 rounded-full" : "bg-gray-700 p-2 rounded-full"}
      >
        <MaterialCommunityIcons name="shopping-outline" size={24} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
          </View>
          {/*  */}
  
          <View className="flex-row justify-between mx-5 items-center">
            <View>
            <Text className={!isDarkMode ? "font-semibold text-xl" : "font-semibold text-xl text-white"}>
            365 Items
          </Text>
          <Text className={!isDarkMode ? "text-gray-700 text-lg" : "text-gray-400 text-lg"}>
            in wishlist
          </Text>
            </View>
            <View className={`flex-row items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} p-2 rounded-xl`}>
  <MaterialCommunityIcons name="draw-pen" size={24} color={isDarkMode ? 'white' : 'black'} />
  <Text className={`${isDarkMode ? 'text-white' : 'text-black'} ml-2 text-xl font-semibold`}>Edit</Text>
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
                <Text className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-base`}>{item.brandName}</Text>
<Text className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-base`}>{item.product}</Text>
<Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-bold`}>{item.price}</Text>

              </View>
            )}
          />
        </View>
      </View>
    );
  };
  
export default Wishlist;