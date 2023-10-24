import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon_Ant from "react-native-vector-icons/AntDesign";

const pin = [7, 4, 2, 3];

const VerificationCode = () => {
  return (
    <View className="flex flex-col h-screen justify-between">
      <TouchableOpacity className="h-11 w-11 bg-gray-100 items-center justify-center rounded-full ml-3 absolute top-3">
        <Icon_Ant name="arrowleft" size={25} />
      </TouchableOpacity>
      <View className="mt-16 items-center">
        <Text className="text-3xl font-semibold">Verification Code</Text>
      </View>
      <View>
        <View className="items-center -mt-36">
          <Image source={require("../../assets/lock.png")} />
        </View>
        <View className="flex-row items-center w-screen justify-between px-3 mt-10">
          {pin.map((number, index) => {
            return (
              <View
                key={index}
                className="border-0.5 rounded-lg p-8 border-gray-400"
              >
                <Text className="text-2xl font-medium">{number}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <View className="flex-row mb-6 items-center justify-center">
          <Text className="text-sm font-medium">00:20 </Text>
          <Text className="text-sm font-normal text-gray-400">
            resend confirmation code.
          </Text>
        </View>
        <View className="w-screen h-20 items-center justify-center bg-violet-500">
          <Text className="text-white text-lg font-medium">Confirm Code</Text>
        </View>
      </View>
    </View>
  );
};

export default VerificationCode;
