import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Icon_Ant from "react-native-vector-icons/AntDesign";

const NewPassword = () => {
  return (
    <View className="flex flex-col h-screen justify-between">
      <TouchableOpacity className="h-11 w-11 bg-gray-100 items-center justify-center rounded-full ml-3 absolute top-3">
        <Icon_Ant name="arrowleft" size={25} />
      </TouchableOpacity>
      <View className="mt-16 items-center">
        <Text className="text-3xl font-semibold">New Password</Text>
      </View>
      <View className="mx-3 -mt-24">
        <View className="mb-5">
          <Text className="text-sm font-normal text-gray-400">Password</Text>
          <TextInput className="border-b-0.5 border-gray-400 text-base font-medium h-10" />
        </View>
        <View>
          <Text className="text-sm font-normal text-gray-400">
            Confirm Password
          </Text>
          <TextInput className="border-b-0.5 border-gray-400 text-base font-medium h-10" />
        </View>
      </View>
      <View>
        <View className="items-center mb-6">
          <Text className="text-sm font-normal text-gray-400">
            Please enter your new password.
          </Text>
        </View>
        <View className="w-screen h-20 items-center justify-center bg-violet-500">
          <Text className="text-white text-lg font-medium">Reset Password</Text>
        </View>
      </View>
    </View>
  );
};

export default NewPassword;
