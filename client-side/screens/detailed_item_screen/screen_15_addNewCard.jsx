import { View, Text, TouchableOpacity, TextInput, Image,Dimensions} from "react-native";
import React, { useState } from "react";
import Icon_Ant from "react-native-vector-icons/AntDesign";
import { useDarkMode } from "../../context/darkmode";

const AddNewCard = ({navigation}) => {
  const newCard = [
    require("../../assets/new1.png"),
    require("../../assets/new2.png"),
    require("../../assets/new3.png"),
  ];

  const [active, setActive] = useState("");

  //navigation backwards 

  const backWardNavigation=()=>{
    navigation.navigate("screen14");
  }


// home navigation 
const homeNavigation=()=>{
  navigation.navigate("HomeComponents");
}

const {isDarkMode}=useDarkMode();



  return (
    <View className={`flex flex-col h-screen pt-10 justify-between ${isDarkMode ? 'bg-black' : ''}`}>
      <TouchableOpacity
      className={`h-11 w-11 items-center justify-center rounded-full absolute top-11 ml-3 ${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
      }`}
      onPress={backWardNavigation}
    >
        <Icon_Ant name="arrowleft" size={24} color={isDarkMode ? 'white' : 'black'}/>
      </TouchableOpacity>
      <View>
        <View className="flex-row items-center justify-center mt-6">
        <Text className={`font-semibold text-xl ${isDarkMode ? 'text-white' : ''}`}>
      Add New Card
    </Text>
        </View>
        <View className="mx-3 items-center flex-row justify-between mt-9">
          {newCard.map((item, index) => {
            let isActive = item == active;
            return (
              <TouchableOpacity onPress={() => setActive(item)} key={index}>
                {isActive ? (
                  <View
                    key={index}
                    className="bg-orange-50 px-10 py-5 rounded-xl border border-orange-500"
                  >
                    <Image source={item} />
                  </View>
                ) : (
                  <View
                    key={index}
                    className="bg-gray-100 px-10 py-5 rounded-xl"
                  >
                    <Image source={item}  />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="mx-3 mt-7">
        <Text className={`font-medium text-xl mb-2 ${isDarkMode ? 'text-white' : ''}`}>
      Card Owner
    </Text>
    <TextInput
      className={`bg-${isDarkMode ? 'gray-700' : 'gray-200'} text-white rounded-lg font-normal text-lg p-2.5`}
    />
        </View>
        <View className="mx-3 mt-4">
        <Text className={`font-medium text-xl mb-2 ${isDarkMode ? 'text-white' : ''}`}>
      Card Number
    </Text>
    <TextInput
      className={`bg-${isDarkMode ? 'gray-700' : 'gray-200'} text-white rounded-lg font-normal text-lg p-2.5`}
    />
        </View>
        <View className="mx-3 mt-4 flex-row justify-between">
          <View className="flex-1 mr-4">
          <Text className={`font-medium text-xl mb-2 ${isDarkMode ? 'text-white' : ''}`}>
      EXP
    </Text>
    <TextInput
      className={`bg-${isDarkMode ? 'gray-700' : 'gray-200'} text-white rounded-lg font-normal text-lg p-2.5`}
    />
          </View>
          <View className="flex-1">
          <Text className={`font-medium text-xl mb-2 ${isDarkMode ? 'text-white' : ''}`}>
      CVV
    </Text>
    <TextInput
      className={`bg-${isDarkMode ? 'gray-700' : 'gray-200'} text-white rounded-lg font-normal text-lg p-2.5`}
    />
          </View>
        </View>
      </View>
      <View className="w-screen h-14 items-center justify-center bg-violet-500">
      <TouchableOpacity onPress={homeNavigation}>
        <Text className="text-white text-lg font-medium">Add Card</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNewCard;