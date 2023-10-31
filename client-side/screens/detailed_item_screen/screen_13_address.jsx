import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import twrnc from 'tailwind-react-native-classnames';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from '../../context/darkmode';

const AddressScreen = ({navigation}) => {
    const [name, setName] = useState('Mrh Raju');
    const [country, setCountry] = useState('Bangladesh');
    const [city, setCity] = useState('Sylhet');
    const [phoneNumber, setPhoneNumber] = useState('+880 1453-987533');
    const [address, setAddress] = useState('Chhatak, Sunamgonj 12/8AB');
    const [isPrimary, setIsPrimary] = useState(false);


    //navigation backward 
 

    const saveAddress = () => {
        //  the functionality to save the address here
    };


//
const {isDarkMode} = useDarkMode();
// backwards movements 

const backwardMovement=()=>{
    navigation.navigate("screen12");
}

// return back to home screen 
const homescreen=()=>{
    navigation.navigate("HomeComponents");
}

    return (
        <View style={!isDarkMode?twrnc`flex flex-1 w-full h-full flex-col pt-11 relative bg-white`:twrnc`flex flex-1 w-full h-full flex-col pt-11 relative bg-black`}>
            {/* Top View */}
            <View style={twrnc`mx-5 flex items-center flex-row justify-between`}>
    <View>
        <TouchableOpacity style={twrnc`bg-${isDarkMode ? 'gray-700' : 'gray-200'} p-2 rounded-full`} onPress={backwardMovement}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>
    </View>
    <View>
        <Text style={twrnc`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Address</Text>
    </View>
    <View></View>
</View>
            {/* Name Input */}
<View style={twrnc`mt-5 flex items-start mx-5 flex-col justify-between`}>
 <Text style={twrnc`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-medium mb-2`}>Address</Text>
<TextInput
                 style={twrnc`h-12 w-full rounded-lg pl-2 font-normal text-sm ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
                }`}
                placeholder="Mrh Raju"
                placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            </View>

            {/* Country and City Inputs on the Same Line */}
            <View className="flex mx-5 mt-5 flex-row items-center justify-between">
    <View className="flex flex-col items-start justify-center">
        <Text className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Country</Text>
        <TextInput
            placeholder="Your Country"
            style={twrnc`h-14 w-44 rounded-lg pl-3 font-normal text-base  ${
                !isDarkMode ? 'bg-gray-100 text-black ' : 'bg-gray-700 text-white'
            }`}
            // the Onchange functions will come later 
            placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
        />
    </View>
    <View>
        <Text className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>City</Text>
        <TextInput
            placeholder="Name of your city"
            style={twrnc`h-14 w-44 rounded-lg pl-3 font-normal text-base  ${
                !isDarkMode ? 'bg-gray-100 text-black ' : 'bg-gray-700 text-white'
            }`}
            // the on change functions will come later when we are working on the backend
            placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
        />
    </View>
</View>









            {/* Phone Number Input */}
            <View className="mt-5 flex items-start mx-5 flex-col justify-between">
            <Text style={twrnc`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-medium mb-2`}>Phone Number</Text>
            <TextInput
                placeholder="+880 1453-987533"
                style={twrnc`h-12 w-full rounded-lg pl-2 font-normal text-sm ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
                }`}
                placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
            />
            </View>

            {/* Address Input */}
            <View style={twrnc`mt-5 flex items-start mx-5 flex-col justify-between`}>
    <Text style={twrnc`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-medium mb-2`}>Address</Text>
    <TextInput
        placeholder="Chhatak, Sunamgonj 12/8AB"
        style={twrnc`h-12 w-full rounded-lg pl-2 font-normal text-sm ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
        }`}
        placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
    />
</View>


            {/* Save as Primary Address */}
            <View className="mt-5 flex items-start mx-5 flex-row justify-between">
            <Text style={twrnc`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-medium mb-2`}>Save as primary address</Text>
            <Switch 
            onValueChange={(value) => setIsPrimary(value)}
        value={isPrimary} 
        trackColor={{ false: "#767577", true: "#4caf50" }}
        ios_backgroundColor="gray"
        />
            </View>
{/** the buttom sections where the submit review is  */}
<View>
  {/** I want the something at the bottom of screen , it will remain the bottom of the screen and I have a text of Submit review meaning , it is a button  I want it to remain at the bottom of the screen no matter the screen size */}
  <View style={twrnc`flex-1 justify-center items-center top-36 absolute  w-full h-14 bg-purple-500`}>
        <TouchableOpacity className="flex items-center justify-center"
        onPress={homescreen}
        >
          <Text style={twrnc`text-white text-lg font-medium`}>Save Address</Text>
        </TouchableOpacity>
      </View>
</View>
          
        </View>
    );
};

export default AddressScreen;
