import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OrderConfirmed = ({navigation}) => {

//continue shopping 
// handle home screen 
const BackToHome=()=>{
  navigation.navigate("HomeComponents");
}

// backward navigations 
const backWardNavigation=()=>{
  navigation.navigate("screen12");
}
//Orders 
const orderNavigation=()=>{
  navigation.navigate("screen18");
}
  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity
        className="bg-gray-100 w-12 h-12 rounded-full mx-5 mt-11 items-center justify-center"
        onPress={backWardNavigation}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} />
      </TouchableOpacity>
      <Image
        source={require("../../assets/Order.png")}
        className="relative -top-16 mx-auto my-auto"
      />
      <View className="relative -top-36">
        <Text className="text-4xl font-bold text-center">Order Confirmed!</Text>
        <Text className="mx-5 text-center text-lg text-gray-500">
          Your order has been confirmed, we will send you confirmation email
          shortly.
        </Text>
      </View>
      <TouchableOpacity   onPress={orderNavigation}>
      <Text
      
        className="text-2xl text-center mx-5 mb-10 bg-gray-200 p-3 rounded-xl text-gray-400 font-semibold"
      >
        Go to Orders
      </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-purple-600" onPress={BackToHome}>
      <Text className=" text-white text-center text-xl p-2 pb-5">
        Continue Shopping
      </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({});