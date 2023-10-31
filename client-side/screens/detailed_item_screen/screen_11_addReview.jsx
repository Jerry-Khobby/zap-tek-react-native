import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import twrnc from 'tailwind-react-native-classnames';
import Slider from '@react-native-community/slider';
import { useDarkMode } from '../../context/darkmode';

const AddReview = ({navigation}) => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');


  const [rating, setRating] = useState(2.5); // Initial rating value

  //moving to backwards 
  const handleBackWardMovement=()=>{
navigation.navigate("screen10");
  }

  // handle home screen 
  const BackToHome=()=>{
    navigation.navigate("HomeComponents");
  }

  const {isDarkMode} = useDarkMode();
  

  return (
    <View style={!isDarkMode?twrnc`flex flex-1 w-full h-full flex-col pt-11 relative bg-white`:twrnc`flex flex-1 w-full h-full flex-col pt-11 relative bg-black`}>
      {/* Top View */}
      <View style={twrnc`mx-5 flex items-center flex-row justify-between `}>
        <View>
          <TouchableOpacity onPress={handleBackWardMovement}  style={twrnc`bg-${isDarkMode ? 'gray-700' : 'gray-200'} p-2 rounded-full`}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={isDarkMode ? 'white' : 'black'} />
          </TouchableOpacity>
        </View>
        <View>
        <Text style={twrnc`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Add Review</Text>
        </View>
        <View></View>
      </View>

      {/* Name Text Input */}
      <View style={twrnc`mt-5 flex items-start mx-5 flex-col justify-between`}>
      <Text style={twrnc`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-medium mb-2`}>Name</Text>
      <TextInput
      style={twrnc`h-12 w-full rounded-lg pl-2 font-normal text-sm ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
    }`}
    placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
        placeholder="Type your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      </View>

      {/* Experience Text Input */}
      <View className="mt-5 flex items-start mx-5 flex-col justify-between">
      <Text style={twrnc`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-medium mb-2`}>How was your Experience?</Text>
      <TextInput
      style={twrnc`h-56 w-full rounded-lg pl-3 font-normal text-base ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
    }`}
    placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
        placeholder="Describe your experience"
        multiline={true}
        numberOfLines={4}
        value={experience}
        onChangeText={(text) => setExperience(text)}
      />
  </View>

      {/* Star Text and Rating Scale */}
      <View className="flex flex-col mt-5 w-full mx-5">
      <Text className={isDarkMode ? 'text-white font-medium text-lg' : 'font-medium text-lg'}>
        Star
      </Text>
      </View>
      <View style={twrnc`flex flex-row items-center justify-start mx-5`}>
      <Text style={isDarkMode ? twrnc`text-white text-sm mr-1` : twrnc`text-sm mr-1`}>0.0</Text>
        <View className="flex-1 w-3/4">
        <Slider
          minimumValue={0}
          maximumValue={5}
          step={0.1}
          className=""
          value={rating}
          onValueChange={(value) => setRating(value)}
        />
        </View>
        <Text style={isDarkMode ? twrnc`text-white text-sm ml-1` : twrnc`text-sm ml-1`}>5.0</Text>
      </View>


{/** the buttom sections where the submit review is  */}
<View>
  {/** I want the something at the bottom of screen , it will remain the bottom of the screen and I have a text of Submit review meaning , it is a button  I want it to remain at the bottom of the screen no matter the screen size */}
  <View style={twrnc`flex-1 justify-center items-center top-36 absolute  w-full h-14 bg-purple-500`}>
        <TouchableOpacity className="flex items-center justify-center"
        onPress={BackToHome}
        >
          <Text style={twrnc`text-white text-lg font-medium`}>Submit Review</Text>
        </TouchableOpacity>
      </View>
</View>



      </View>

  );
};

export default AddReview;
