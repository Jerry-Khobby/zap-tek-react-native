import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from "../../context/darkmode";
/* import { brand } from "../../data/brand"; */
import {useSelector,useDispatch} from "react-redux"
import  {
  removalCartItem,  decreaseQuantity,
  increaseQuantity,
} from "../../state/reducers";


const CartScreen = ({ navigation }) => {
  const likedItems = useSelector((state) => state.wishlist.cartItems);
  const dispatch=useDispatch();

  // navgiation backwards
  const handleBackWardNavigation = () => {
    navigation.navigate("screen9");
  };

  // moving to the delivery address screen
  const deliveryAddress = () => {
    navigation.navigate("screen13");
  };

  // moving to the payment option screen
  const paymentMethod = () => {
    navigation.navigate("screen14");
  };

  //moving order
  const orderConfirmed = () => {
    navigation.navigate("screen16");
  };

  //implementing the dark mode
  const { isDarkMode } = useDarkMode();


  // the item to be implemented by the redux 

  return (
    <ScrollView className="h-full w-full">
      <View className={`flex-1  ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <View className="flex-row mx-5 mt-7 items-center flex justify-between">
          <TouchableOpacity onPress={handleBackWardNavigation}>
            <View
              className={`p-2 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={24}
                color={isDarkMode ? "white" : "black"}
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text
              className={`mx-auto text-2xl font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Cart
            </Text>
          </View>
          <View />
        </View>
        <ScrollView>
          <FlatList
            className="flex-1"
            data={likedItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                className={`flex-row mx-5 mt-4 ${
                  isDarkMode ? "bg-gray-700" : "bg-white"
                } p-3 rounded-xl shadow`}
              >
                <Image
                  source={item.imageSource}
                  className="w-24 h-28 rounded-xl"
                />
                <View className="ml-5">
                  <Text
                    className={`text-base font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.brandName}
                  </Text>
                  <Text
                    className={`text-base font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.product}
                  </Text>
                  <Text
                    className={`text-gray-500 mt-3 ${
                      isDarkMode ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {item.price}
                  </Text>
                  <View className="flex-row mt-1 items-center">
                    <TouchableOpacity
                      className="border-2 border-gray-100 rounded-full p-1 mr-3 text-center"
                      onPress={()=>{
                        dispatch(decreaseQuantity(item.id));
                      }}
                    >
                      <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={isDarkMode ? "white" : "black"}
                      />
                    </TouchableOpacity>
                    <Text style={{ color: isDarkMode ? "white" : "black" }}>
                      {item.quantity}
                    </Text>
                    <TouchableOpacity
                      className={`border-2 border-gray-100 rounded-full p-1 ml-3 text-center ${
                        isDarkMode ? "bg-gray-700" : ""
                      }`}
                      onPress={()=>{
                        dispatch(increaseQuantity(item.id));
                        console.log("it is working");
                      }}
                    >
                      <MaterialCommunityIcons
                        name="chevron-up"
                        size={20}
                        color={isDarkMode ? "white" : "black"}
                      />
                    </TouchableOpacity>
                    <View className="border-2 border-gray-100 rounded-full p-1 ml-16">
                      <MaterialCommunityIcons
                        name="delete-outline"
                        size={20}
                        color={isDarkMode ? "white" : "black"}
                    onPress={()=>{
                      dispatch(removalCartItem(item.id))
                    }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          />

          <TouchableOpacity onPress={deliveryAddress}>
            <View className="flex-row justify-between mx-5 items-center my-2">
              <Text
                className={`text-xl font-medium ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Delivery Address
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={isDarkMode ? "white" : "black"}
              />
            </View>
            <View className="flex-row justify-between mx-5 items-center my-2">
              <View className="flex-row">
                <Image
                  source={require("../../assets/icon.png")}
                  className="w-16 h-16 rounded-2xl"
                />
                <View className="ml-3">
                  <Text className={`text-lg ${isDarkMode ? "text-white" : ""}`}>
                    Chhatak, Sunamgonj 12/8AB
                  </Text>
                  <Text
                    className={`text-base text-gray-500 ${
                      isDarkMode ? "text-gray-400" : ""
                    }`}
                  >
                    Styhet
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="check-circle"
                size={24}
                color="lightgreen"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={paymentMethod}>
            <View className="flex-row justify-between mx-5 items-center my-2">
              <Text
                className={`text-xl font-medium ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Payment Method
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={isDarkMode ? "white" : "black"}
              />
            </View>
            <View className="flex-row justify-between mx-5 items-center my-2">
              <View className="flex-row">
                <Image
                  source={require("../../assets/icon.png")}
                  className="w-16 h-16 rounded-2xl"
                />
                <View className="ml-3">
                  <Text className={`text-lg ${isDarkMode ? "text-white" : ""}`}>
                    Visa Classic
                  </Text>
                  <Text
                    className={`text-base text-gray-500 ${
                      isDarkMode ? "text-gray-400" : ""
                    }`}
                  >
                    **** 7690
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="check-circle"
                size={24}
                color="lightgreen"
              />
            </View>
          </TouchableOpacity>

          <Text
            className={`text-xl font-semibold mx-5 ${
              isDarkMode ? "text-gray-200" : ""
            }`}
          >
            Order Info
          </Text>
          <View className="mx-5 flex-row justify-between items-center">
            <Text className="text-base text-gray-500">Subtotal</Text>
            <Text
              className={`text-base font-semibold ${
                isDarkMode ? "text-white" : "text-gray-500"
              }`}
            >
              $110
            </Text>
          </View>
          <View className="mx-5 flex-row justify-between items-center">
            <Text className="text-base text-gray-500">Shipping cost</Text>
            <Text
              className={`text-base font-semibold ${
                isDarkMode ? "text-white" : "text-gray-500"
              }`}
            >
              $10
            </Text>
          </View>
          <View className="mx-5 mb-14 flex-row justify-between items-center">
            <Text className="text-base text-gray-500">Total</Text>
            <Text
              className={`text-base font-semibold ${
                isDarkMode ? "text-white" : "text-gray-500"
              }`}
            >
              $120
            </Text>
          </View>
        </ScrollView>

        <View className="p-1 pb-2 bottom-0 w-full absolute bg-violet-500 h-11 flex items-center  justify-center">
          <TouchableOpacity onPress={orderConfirmed}>
            <Text className="text-center  text-white text-xl">Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 20,
  },
});