import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import twrnc from 'tailwind-react-native-classnames';

const AddReview = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const navigation = useNavigation();

  const submitReview = () => {
    navigation.navigate('Screen12');
  };

  return (
    <View style={twrnc`flex flex-1 w-full h-full flex-col pt-11 relative bg-white`}>
      {/* Top View */}
      <View style={twrnc`mx-5 flex items-center flex-row justify-between `}>
        <View>
          <TouchableOpacity onPress={() => { /* navigation function to go back */ }}   className="bg-gray-200 p-2 rounded-full">
            <MaterialCommunityIcons name="arrow-left" size={24}/>
          </TouchableOpacity>
        </View>
        <View>
        <Text style={twrnc`text-xl font-bold`}>Add Review</Text>
        </View>
        <View></View>
      </View>

      {/* Name Text Input */}
      <View style={twrnc`mt-5 flex items-start mx-5 flex-col justify-between`}>
      <Text className="text-lg font-medium mb-2">Name</Text>
      <TextInput
      className="h-12 w-full bg-gray-100 rounded-lg pl-2 font-normal text-sm"
        placeholder="Type your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      </View>

      {/* Experience Text Input */}
      <View className="mt-5 flex items-start mx-5 flex-col justify-between">
      <Text className="text-lg font-medium mb-2">How was your Experience?</Text>
      <TextInput
      className="h-56 w-full bg-gray-100 rounded-lg pl-3 font-normal text-base "
        placeholder="Describe your experience"
        multiline={true}
        numberOfLines={4}
        value={experience}
        onChangeText={(text) => setExperience(text)}
      />
  </View>

      {/* Star Text and Rating Scale */}
      <Text style={{ marginVertical: 15, marginHorizontal: 30 }}>Star</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 8 }}>
        <Text style={{ flex: 1, textAlign: 'center' }}>0.0</Text>
        <View style={{ height: 10, backgroundColor: 'gray', flex: 1, marginHorizontal: 50, borderRadius: 5 }} />
        <Text style={{ flex: 1, textAlign: 'center' }}>5.0</Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#9775FA',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 30,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onPress={submitReview}
      >
        <Text style={{ color: 'white' }}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddReview;
