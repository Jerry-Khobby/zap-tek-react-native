import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    <SafeAreaView style={twrnc`flex w-full h-full flex-col mt-11 relative`}>
      {/* Top View */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#F5F6FA', borderRadius: 50, padding: 10, marginRight: -15, marginLeft: 20 }}>
          <TouchableOpacity onPress={() => { /* navigation function to go back */ }}>
            <Icon name="arrow-left" size={24} color="black" style={{ fontSize: 30 }} />
          </TouchableOpacity>
        </View>
        <Text style={{ marginLeft: 100, fontSize: 23, fontWeight: 'bold' }}>Add Review</Text>
      </View>

      {/* Name Text Input */}
      <Text style={{ marginVertical: 15, marginHorizontal: 30 }}>Name</Text>
      <TextInput
        style={{
          borderColor: 'white',
          borderWidth: 3,
          borderRadius: 20,
          padding: 25,
          marginVertical: 8,
          backgroundColor: '#f5f6fA',
          marginHorizontal: 25,
        }}
        placeholder="Type your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Experience Text Input */}
      <Text style={{ marginVertical: 15, marginHorizontal: 30 }}>How was your Experience?</Text>
      <TextInput
        style={{
          borderColor: 'white',
          borderWidth: 3,
          borderRadius: 20,
          padding: 25,
          marginVertical: 8,
          backgroundColor: '#f5f6fA',
          marginHorizontal: 25,
        }}
        placeholder="Describe your experience"
        multiline={true}
        numberOfLines={4}
        value={experience}
        onChangeText={(text) => setExperience(text)}
      />

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
    </SafeAreaView>
  );
};

export default AddReview;
