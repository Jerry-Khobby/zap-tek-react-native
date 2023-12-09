import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import twrnc from "tailwind-react-native-classnames";
import Icon_SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Icon_Encrypto from "react-native-vector-icons/Entypo";
import { DrawerActions } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon_Ant from "react-native-vector-icons/AntDesign";
import { items } from "../../data/carouseldata";
import { brand } from "../../data/brand";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from "../../context/darkmode";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
  addToMovableItems,
} from "../../state/reducers";

const Homescreen = ({ navigation }) => {
  // a function that will open the drawer and close it
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const { isDarkMode } = useDarkMode();

  /// dispatching the redux reducers
  const dispatch = useDispatch();

  // implementing a function for the search textinput fields
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(brand);

  // handling the color of the icons on clicked
  const [isClicked, setIsClicked] = useState(false);
  const handlePress = () => {
    // Toggle the state when the button is pressed
    setIsClicked(!isClicked);
  };

  const searchFilteredFunction = (text) => {
    setSearch(text);
    const filteredItems = brand.filter((item) =>
      item.brandName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  // defining a function that will handle the brands of the carousels at the top
  const ListCategories = () => {
    const minorCategoryList = ["Choose Brand", "View All"];
    const [selectedMinorCategoryIndex, setSelectedMinorCategoryIndex] =
      useState(0);
    return (
      <View style={twrnc`mt-2 flex-row justify-between mx-5`}>
        {minorCategoryList.map((minor, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedMinorCategoryIndex(index)}
          >
            <Text
              style={[
                minorCategoryListText,
                index === selectedMinorCategoryIndex &&
                  minorActiveCategoryListText,
              ]}
            >
              {minor}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  //ArrivalList function that must be  called  in the main body
  const ArrivalList = () => {
    const categoryList = ["New Arrival", "View All"];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const handleCategoryPress = (index) => {
      setSelectedCategoryIndex(index);

      // Check if "View All" is clicked, then navigate to "Nike"
      if (index === 1) {
        navigation.navigate("nike");
      }
    };

    return (
      <View style={twrnc`mt-2 mx-6 flex-row justify-between`}>
        {categoryList.map((minor, index) => (
          <Pressable key={index} onPress={() => handleCategoryPress(index)}>
            <Text
              style={[
                minorCategoryListText,
                index === selectedCategoryIndex && minorActiveCategoryListText,
              ]}
            >
              {minor}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const likedItems = useSelector((state) => state.wishlist.wishListItems);

  const handleLikeToggle = (itemId) => {
    const isItemLiked = likedItems.some((item) => item.id === itemId);

    if (isItemLiked) {
      // If item is liked, remove it from the wishlist
      dispatch(removeFromWishList(itemId));
    } else {
      // If item is not liked, add it to the wishlist
      const selectedItem = filteredData.find((item) => item.id === itemId);
      dispatch(addToWishList(selectedItem));
    }
  };

  return (
    <View
      style={
        !isDarkMode
          ? twrnc`flex w-full h-full flex-col  pt-11 relative bg-white`
          : twrnc`flex w-full h-full flex-col  pt-11 relative bg-black`
      }
    >
      {/** the header will consist of two iccons at the top of the screen  */}
      <StatusBar
        backgroundColor={!isDarkMode ? "white" : "white"} // Set status bar background color based on dark mode state
      />

      <View style={twrnc`flex flex-row items-center justify-between`}>
        {/** the icon for navigation backwards  */}
        <View style={twrnc`mx-5`}>
          <TouchableOpacity
            style={
              !isDarkMode
                ? twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`
                : twrnc`bg-gray-700 items-center justify-center  rounded-full h-11 w-11`
            }
            onPress={openDrawer}
          >
            {/** this is the view for the icon  */}
            <Icon_Encrypto
              name="menu"
              size={25}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
        {/** the icon for navigation backwards  */}
        <View style={twrnc`mx-5`}>
          <TouchableOpacity
            style={
              !isDarkMode
                ? twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`
                : twrnc`bg-gray-700  rounded-full h-11 w-11 items-center justify-center`
            }
            onPress={() => {
              navigation.navigate("Order");
            }}
          >
            {/** this is the view for the icon  */}
            <Icon_SimpleLineIcons
              name="handbag"
              size={25}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/** now the remaining codes  this where the Hello and the welcoming on the screen is */}
      <View style={twrnc`flex flex-col mx-5 mt-5`}>
        <View>
          <Text
            style={
              !isDarkMode
                ? twrnc`text-black text-4xl `
                : twrnc`text-white text-4xl`
            }
          >
            Hello
          </Text>
        </View>
        <View>
          <Text
            style={
              !isDarkMode
                ? twrnc`text-gray-400 text-xl`
                : twrnc`text-gray-500 text-xl`
            }
          >
            Welcome to Laza
          </Text>
        </View>
      </View>

      {/** this where the search and the microphone icons will be , the search functionalities will implemented here  */}
      <View
        style={twrnc`flex flex-row  justify-between items-center mx-5 mt-3`}
      >
        {/* Search Box */}
        <View
          style={
            !isDarkMode
              ? twrnc`flex-row items-center   bg-gray-200 rounded-xl`
              : twrnc`rounded-xl flex-row items-center bg-gray-700`
          }
        >
          <View
            style={twrnc`flex flex-row items-center justify-around px-2 h-10 w-10/12`}
          >
            <Icon_Ant name="search1" size={20} style={twrnc`mr-2`} />
            <TextInput
              style={
                !isDarkMode
                  ? twrnc`flex-1 h-8 text-base font-normal pb-0`
                  : twrnc`flex-1 h-8 text-base font-normal pb-0`
              }
              placeholder="Search..."
              underlineColorAndroid="transparent"
              placeholderTextColor={isDarkMode ? "#999999" : "#CCCCCC"} // Change placeholder text color based on isDarkMode state
              onChangeText={(text) => searchFilteredFunction(text)}
              value={search}
            />
          </View>
        </View>

        {/* Microphone Icon */}
        <TouchableOpacity
          style={[
            twrnc`h-10 w-12 rounded-xl items-center bg-gray-300`,
            styles.primary,
          ]}
        >
          <View style={twrnc`flex items-center justify-center`}>
            <MaterialIcons
              name="keyboard-voice"
              size={24}
              color="white"
              style={twrnc`mt-2`}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/** working the adidas carousel that were showing at the top  */}
      <ListCategories />
      {/** the mapping of the carousel  */}
      <View style={twrnc`flex-row mx-5 mt-1`}>
        <FlatList
          data={items}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={twrnc`h-14  mx-1 w-28 bg-gray-200 flex-row items-center rounded-lg justify-around`}
            >
              <View style={twrnc`h-9 w-9 bg-white  rounded-lg`}>
                <View style={twrnc`items-center mt-1`}>
                  <Image
                    source={item.image}
                    resizeMode={"contain"}
                    style={twrnc`h-7 w-7`}
                  />
                </View>
              </View>
              <Text style={twrnc`font-medium`}>{item.text}</Text>
            </View>
          )}
        />
      </View>

      <ArrivalList />
      <FlatList
        className="flex-1"
        data={filteredData}
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
                onPress={() => handleLikeToggle(item.id)}
                className="absolute top-5 right-5"
              >
                <MaterialCommunityIcons
                  name={
                    likedItems.some((likedItem) => likedItem.id === item.id)
                      ? "heart"
                      : "heart-outline"
                  }
                  size={24}
                  color={
                    likedItems.some((likedItem) => likedItem.id === item.id)
                      ? "red"
                      : "gray"
                  }
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  addToMovableItems({
                    id: item.id,
                    imageSource: item.imageSource,
                    brandName: item.brandName,
                    product: item.product,
                    price: item.price,
                    description: item.description,
                    rating: item.rating,
                  })
                );
                navigation.navigate("screen9");
              }}
            >
              <Text
                style={
                  !isDarkMode
                    ? twrnc`font-semibold text-base`
                    : [twrnc`font-semibold text-base`, { color: "#CCCCCC" }]
                }
              >
                {item.brandName}
              </Text>
              <Text
                style={
                  !isDarkMode
                    ? twrnc`text-base font-semibold`
                    : [twrnc`text-base font-semibold`, { color: "#CCCCCC" }]
                }
              >
                {item.product}
              </Text>
              <Text
                style={
                  !isDarkMode
                    ? twrnc`text-lg font-bold`
                    : [twrnc`text-lg font-bold`, { color: "#CCCCCC" }]
                }
              >
                ${item.price}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Homescreen;
const styles = StyleSheet.create({
  primary: {
    backgroundColor: "#9775FA",
  },
});
const minorCategoryListText = twrnc``;
const minorActiveCategoryListText = twrnc`font-bold text-lg`;
