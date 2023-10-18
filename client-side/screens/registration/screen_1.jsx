import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import twrnc from 'tailwind-react-native-classnames';
import { LinearGradient } from 'expo-linear-gradient';

const SalutationScreen = () => {
  return (
    <LinearGradient colors={['#B0A3E5', '#7661C5', '#4B3F72']} style={twrnc`flex flex-1 items-center justify-center`}>
      {/* Container for the image and white background */}
      <View style={twrnc`relative`}>
        {/* View for the image */}
        <View>
          <Image source={require("../../assets/salutationImage.png")} style={twrnc`mt-1`} />
        </View>

        {/* View with white background that slightly covers the bottom of the image */}
        <View style={twrnc`bg-white w-96 h-64 mb-12 rounded-2xl absolute bottom-0 `}>
          {/* Your content inside the white background goes here */}
          <View style={twrnc`flex flex-col items-center justify-between mx-20 pt-7`}>
            <View style={twrnc`flex flex-col items-center justify-center`}>
              {/** this will contain the heading and the other texts */}
              <Text style={twrnc`font-semibold text-2xl text-center`}>Look Good, Feel Good</Text>
              <Text style={twrnc`font-normal text-sm text-center`}>Create your individual & unique style</Text>
              <Text style={twrnc`font-normal text-sm text-center`}>and look amazing everyday.</Text>
            </View>
            <View style={twrnc`flex flex-row mt-4`}>
              {/** this will contain the two buttons  */}
              <TouchableOpacity style={twrnc`bg-gray-100 p-4 rounded-md mr-1 w-40 h-16 flex justify-center items-center`}>
                <Text style={twrnc`text-black font-medium text-lg`}>Men</Text>
              </TouchableOpacity>
              <TouchableOpacity style={twrnc`bg-purple-500 p-4 rounded-md ml-1 w-40 h-16 flex justify-center items-center`}>
                <Text style={twrnc`text-white font-medium text-lg`}>Women</Text>
              </TouchableOpacity>
            </View>
            <View>
              {/** this will have the skip text */}
              <TouchableOpacity style={twrnc`bg-transparent`}>
                <Text style={twrnc`text-gray-500 font-medium text-lg`}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default SalutationScreen;
