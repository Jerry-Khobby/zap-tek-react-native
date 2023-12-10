// Screen 19 => Livingstone
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { brand } from "../../data/brand";
import { useDarkMode } from "../../context/darkmode";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishList } from "../../state/reducers";

const Wishlist = ({ navigation }) => {
  // navigation backward function for wishlist screen to the homescreen

  const handleBackWardNavigation = () => {
    navigation.navigate("Home");
  };

  const wishlistItems = useSelector((state) => state.wishlist.wishListItems);
  const dispatch = useDispatch();
  // Initialize likedItems state with IDs of items in the wishlist
  const initialLikedItems = wishlistItems.reduce((acc, item) => {
    acc[item.id] = true;
    return acc;
  }, {});
  const [likedItems, setLikedItems] = useState(initialLikedItems);

  const { isDarkMode } = useDarkMode();

  const handleLikeToggle = (itemId) => {
    // Dispatch the removeFromWishList action with the item ID
    dispatch(removeFromWishList(itemId));

    // Update likedItems state by removing the item with the given ID
    setLikedItems((prevLikedItems) => {
      const newLikedItems = { ...prevLikedItems };
      delete newLikedItems[itemId];
      return newLikedItems;
    });
  };

  // I will be doing the

  //moving to the next screen on clicking the an image
  const handleScreenMovement = () => {
    navigation.navigate("screen9");
  };
  const handleCartScreenNavigation = () => {
    navigation.navigate("screen12");
  };

  return (
    <View className={!isDarkMode ? "flex-1 bg-white" : "flex-1 bg-black"}>
      <StatusBar
        backgroundColor={!isDarkMode ? "white" : "black"}
        barStyle={!isDarkMode ? "dark-content" : "light-content"}
      />
      <View className="flex-1  pt-5">
        {/* Top part */}
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
            Wishlist
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
        {/*  */}

        <View className="flex-row justify-between mx-5 items-center">
          <View>
            <Text
              className={
                !isDarkMode
                  ? "font-semibold text-xl"
                  : "font-semibold text-xl text-white"
              }
            >
              365 Items
            </Text>
            <Text
              className={
                !isDarkMode ? "text-gray-700 text-lg" : "text-gray-400 text-lg"
              }
            >
              in wishlist
            </Text>
          </View>
          <View
            className={`flex-row items-center ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } p-2 rounded-xl`}
          >
            <MaterialCommunityIcons
              name="draw-pen"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
            <Text
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } ml-2 text-xl font-semibold`}
            >
              Edit
            </Text>
          </View>
        </View>

        <FlatList
          className="flex-1"
          data={wishlistItems} // Use wishlistItems instead of brand
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-1 m-2 mx-3 w-1/2">
              <View className="w-full h-72 rounded-xl bg-red-500">
                <Image
                  source={item.imageSource}
                  className="h-full w-full rounded-xl"
                />
                <TouchableOpacity
                  className="absolute top-5 right-5"
                  onPress={() => handleLikeToggle(item.id)} // Pass the item ID to handleLikeToggle
                >
                  <MaterialCommunityIcons
                    name={likedItems[item.id] ? "heart" : "heart"}
                    size={24}
                    color="red" // Set color to red for liked items
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleScreenMovement}>
                <Text
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-semibold text-base`}
                >
                  {item.brandName}
                </Text>
                <Text
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-semibold text-base`}
                >
                  {item.product}
                </Text>
                <Text
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } text-lg font-bold`}
                >
                  {item.price}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Wishlist;
