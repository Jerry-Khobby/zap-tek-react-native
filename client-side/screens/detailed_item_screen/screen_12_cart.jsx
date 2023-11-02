import { StyleSheet, Text, View, Image,ScrollView,FlatList,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from "../../context/darkmode";

const CartScreen = ({navigation}) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 8) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // navgiation backwards 
  const handleBackWardNavigation=()=>{
    navigation.navigate("screen9");
  }

  // moving to the delivery address screen 
  const deliveryAddress=()=>{
    navigation.navigate("screen13");
  }


  // moving to the payment option screen
  const paymentMethod=()=>{
    navigation.navigate("screen14");
  }

  //moving order 
  const orderConfirmed=()=>{
    navigation.navigate("screen16");
  }

//implementing the dark mode 
const {isDarkMode}=useDarkMode();
  return (
    <View className={`flex-1 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <View className="flex-row mx-5 mt-7 items-center flex justify-between">
        <TouchableOpacity onPress={handleBackWardNavigation}>
        <View className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <MaterialCommunityIcons name="arrow-left" size={24} color={isDarkMode ? 'white' : 'black'} />
    </View>
        </TouchableOpacity>
        <View>
        <Text className={`mx-auto text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
      Cart
    </Text>
        </View>
        <View/>
      </View>
      <ScrollView>
      <View className={`flex-row mx-5 mt-4 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-3 rounded-xl shadow`}>
      <Image source={require('../../assets/icon.png')} className="w-24 h-28 rounded-xl" />
      <View className="ml-5">
        <Text className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Men's Tie-Dye T-shirt
        </Text>
        <Text className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Nike Sportswear
        </Text>
        <Text className={`text-gray-500 mt-3 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>
          $45 (-$4.00 Tax)
        </Text>
        <View className="flex-row mt-1 items-center">
          <TouchableOpacity className="border-2 border-gray-100 rounded-full p-1 mr-2 text-center" onPress={decrement}>
            <MaterialCommunityIcons name="chevron-down" size={20} color={isDarkMode ? 'white' : 'black'} />
          </TouchableOpacity>
          <Text style={{ color: isDarkMode ? 'white' : 'black' }}>{count}</Text>
          <TouchableOpacity className="border-2 border-gray-100 rounded-full p-1 ml-2 text-center" onPress={increment}>
            <MaterialCommunityIcons name="chevron-up" size={20} color={isDarkMode ? 'white' : 'black'} />
          </TouchableOpacity>
          <View className="border-2 border-gray-100 rounded-full p-1 absolute -right-14">
            <MaterialCommunityIcons name="delete-outline" size={20} color={isDarkMode ? 'white' : 'black'} />
          </View>
        </View>
      </View>
    </View>
    <View className={`flex-row mx-5 mt-4 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-3 rounded-xl shadow`}>
      <Image source={require('../../assets/icon.png')} className="w-24 h-28 rounded-xl" />
      <View className="ml-5">
        <Text className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Men's Tie-Dye T-shirt
        </Text>
        <Text className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Nike Sportswear
        </Text>
        <Text className={`text-gray-500 mt-3 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>
          $45 (-$4.00 Tax)
        </Text>
        <View className="flex-row mt-1 items-center">
          <TouchableOpacity className="border-2 border-gray-100 rounded-full p-1 mr-2 text-center" onPress={decrement}>
            <MaterialCommunityIcons name="chevron-down" size={20} color={isDarkMode ? 'white' : 'black'} />
          </TouchableOpacity>
          <Text style={{ color: isDarkMode ? 'white' : 'black' }}>{count}</Text>
          <TouchableOpacity className={`border-2 border-gray-100 rounded-full p-1 ml-2 text-center ${isDarkMode ? 'bg-gray-700' : ''}`} onPress={increment}>
      <MaterialCommunityIcons name="chevron-up" size={20} color={isDarkMode ? 'white' : 'black'} />
    </TouchableOpacity>
          <View className="border-2 border-gray-100 rounded-full p-1 absolute -right-14">
            <MaterialCommunityIcons name="delete-outline" size={20} color={isDarkMode ? 'white' : 'black'} />
          </View>
        </View>
      </View>
    </View>



    
    <TouchableOpacity onPress={deliveryAddress}>
      <View className="flex-row justify-between mx-5 items-center my-2">
      <Text className={`text-xl font-medium ${isDarkMode ? 'text-white' : ''}`}>Delivery Address</Text>
      <MaterialCommunityIcons
    name="chevron-right"
    size={24}
    color={isDarkMode ? 'white' : 'black'}
/>
      </View>
      <View className="flex-row justify-between mx-5 items-center my-2">
        <View className="flex-row">
          <Image
            source={require("../../assets/icon.png")}
            className="w-16 h-16 rounded-2xl"
          />
          <View className="ml-3">
  <Text className={`text-lg ${isDarkMode ? 'text-white' : ''}`}>Chhatak, Sunamgonj 12/8AB</Text>
<Text className={`text-base text-gray-500 ${isDarkMode ? 'text-gray-400' : ''}`}>Styhet</Text>

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
        <Text className={`text-xl font-medium ${isDarkMode ? 'text-white' : ''}`}>Payment Method</Text>
<MaterialCommunityIcons
  name="chevron-right"
  size={24}
  color={isDarkMode ? 'white' : 'black'}
/>

      </View>
      <View className="flex-row justify-between mx-5 items-center my-2">
        <View className="flex-row">
          <Image
            source={require("../../assets/icon.png")}
            className="w-16 h-16 rounded-2xl"
          />
          <View className="ml-3">
           <Text className={`text-lg ${isDarkMode ? 'text-white' : ''}`}>Visa Classic</Text>
<Text className={`text-base text-gray-500 ${isDarkMode ? 'text-gray-400' : ''}`}>**** 7690</Text>

          </View>
        </View>
        <MaterialCommunityIcons
          name="check-circle"
          size={24}
          color="lightgreen"
        />
      </View>
      </TouchableOpacity>


      <Text className={`text-xl font-semibold mx-5 ${isDarkMode?'text-gray-200':''}`}>Order Info</Text>
      <View className="mx-5 flex-row justify-between items-center">
        <Text className="text-base text-gray-500">Subtotal</Text>
       <Text className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>$110</Text>

      </View>
      <View className="mx-5 flex-row justify-between items-center">
        <Text className="text-base text-gray-500">Shipping cost</Text>
        <Text className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>$10</Text>
      </View>
      <View className="mx-5 flex-row justify-between items-center">
        <Text className="text-base text-gray-500">Total</Text>
        <Text className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>$120</Text>
      </View>
      </ScrollView>

<View className="p-1 pb-2 bottom-0 w-full absolute bg-violet-500 h-11 flex items-center  justify-center">
    <TouchableOpacity onPress={orderConfirmed}>
      <Text className="text-center  text-white text-xl">
        Checkout
      </Text>
    </TouchableOpacity>
      </View>
    </View>
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