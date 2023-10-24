import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import Icon_Ant from "react-native-vector-icons/AntDesign";
import Icon_Fontiso from "react-native-vector-icons/FontAwesome";

const Payment = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const cards = [
    require("../../assets/Card_1.png"),
    require("../../assets/Card_1.png"),
    require("../../assets/Card_1.png"),
  ];

  return (
    <View className="flex flex-col h-screen justify-between">
      <TouchableOpacity className="h-11 w-11 bg-gray-100 items-center justify-center rounded-full absolute top-3 ml-3">
        <Icon_Ant name="arrowleft" size={25} />
      </TouchableOpacity>
      <View>
        <View className="flex-row items-center justify-center mt-6">
          <Text className="font-semibold text-xl">Payment</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-8">
          {cards.map((item, index) => {
            return (
              <View key={index} className="mx-3">
                <Image source={item} />
              </View>
            );
          })}
        </ScrollView>
        <View className="mx-3 mt-4 items-center flex-row justify-center border border-violet-500 rounded-xl py-5 bg-violet-50">
          <View className="border px-1 rounded mr-2 border-violet-500">
            <Text className="text-violet-500">+</Text>
          </View>
          <Text className="font-medium text-xl text-violet-500">
            Add new Card
          </Text>
        </View>
        <View className="mx-3 mt-4">
          <Text className="font-medium text-xl mb-2">Card Owner</Text>
          <TextInput className="bg-gray-100 rounded-lg font-normal text-lg p-2.5" />
        </View>
        <View className="mx-3 mt-4">
          <Text className="font-medium text-xl mb-2">Card Number</Text>
          <TextInput className="bg-gray-100 rounded-lg font-normal text-lg p-2.5" />
        </View>
        <View className="mx-3 mt-4 flex-row justify-between">
          <View className="flex-1 mr-4">
            <Text className="font-medium text-xl mb-2">EXP</Text>
            <TextInput className="bg-gray-100 rounded-lg font-normal text-lg p-2.5" />
          </View>
          <View className="flex-1">
            <Text className="font-medium text-xl mb-2">CVV</Text>
            <TextInput className="bg-gray-100 rounded-lg font-normal text-lg p-2.5" />
          </View>
        </View>
        <View className="mx-3 mt-4 flex-row items-center justify-between">
          <Text className="font-medium text-base">Save card info</Text>
          <TouchableOpacity onPress={handleToggle}>
            <Icon_Fontiso
              name={isToggled ? "toggle-on" : "toggle-off"}
              color={isToggled ? "green" : "gray"}
              size={32}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-screen h-20 items-center justify-center bg-violet-500">
        <Text className="text-white text-lg font-medium">Save Card</Text>
      </View>
    </View>
  );
};

export default Payment;
