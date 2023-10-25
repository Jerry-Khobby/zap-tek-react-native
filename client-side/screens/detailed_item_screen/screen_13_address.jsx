import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import twrnc from 'tailwind-react-native-classnames';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AddressScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('Mrh Raju');
    const [country, setCountry] = useState('Bangladesh');
    const [city, setCity] = useState('Sylhet');
    const [phoneNumber, setPhoneNumber] = useState('+880 1453-987533');
    const [address, setAddress] = useState('Chhatak, Sunamgonj 12/8AB');
    const [isPrimary, setIsPrimary] = useState(false);

    const goBackToScreen12 = () => {
        navigation.goBack();
    };

    const saveAddress = () => {
        //  the functionality to save the address here
    };

    return (
        <View style={twrnc`flex flex-1 w-full h-full flex-col pt-11 relative bg-white`}>
            {/* Top View */}
            <View style={twrnc`mx-5 flex items-center flex-row justify-between `}>
                <View>
                    <TouchableOpacity  className="bg-gray-200 p-2 rounded-full">
                        <MaterialCommunityIcons name="arrow-left" size={24}/>
                    </TouchableOpacity>
                </View>
                <View>
                <Text style={twrnc`text-xl font-bold`}>Address</Text>
                </View>
                <View></View>
            </View>

            {/* Name Input */}
            <View style={twrnc`mt-5 flex items-start mx-5 flex-col justify-between`}>
            <Text className="text-lg font-medium mb-2">Name</Text>
            <TextInput
                 className="h-12 w-full bg-gray-100 rounded-lg pl-2 font-normal text-sm"
                placeholder="Mrh Raju"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            </View>

            {/* Country and City Inputs on the Same Line */}
            <View className="flex mx-5 mt-5 flex-row items-center justify-between">
                <View className="flex flex-col items-start justify-center">
                    <Text className="text-lg font-medium mb-2">Country</Text>
                    <TextInput
                        placeholder="Your Country"
                        className="h-14 w-44 bg-gray-100 rounded-lg pl-3 font-normal text-base  text-start"
                        // the Onchange functions will come later 

                    />
                </View>
                <View>
                    <Text className="text-lg font-medium mb-2">City</Text>
                    <TextInput
                        placeholder="Name of your city"
                        className="h-14 w-44 bg-gray-100 rounded-lg pl-3 font-normal text-base text-start "
                        // the on change functions will come later when we are working on the backend

                    />
                </View>
            </View>









            {/* Phone Number Input */}
            <View className="mt-5 flex items-start mx-5 flex-col justify-between">
            <Text className="text-lg font-medium mb-2">Phone Number</Text>
            <TextInput
                placeholder="+880 1453-987533"
                className="h-12 w-full bg-gray-100 rounded-lg pl-2 font-normal text-sm"
            />
            </View>

            {/* Address Input */}
            <View style={twrnc`mt-5 flex items-start mx-5 flex-col justify-between`}>
            <Text className="text-lg font-medium mb-2">Address</Text>
            <TextInput
                placeholder="Chhatak, Sunamgonj 12/8AB"
                className="h-12 w-full bg-gray-100 rounded-lg pl-2 font-normal text-sm"
            />
            </View>

            {/* Save as Primary Address */}
            <View className="mt-5 flex items-start mx-5 flex-row justify-between">
                <Text className="text-lg font-medium mb-2">Save as primary address</Text>
                <Switch
                    onValueChange={(value) => setIsPrimary(value)}
                />
            </View>
{/** the buttom sections where the submit review is  */}
<View>
  {/** I want the something at the bottom of screen , it will remain the bottom of the screen and I have a text of Submit review meaning , it is a button  I want it to remain at the bottom of the screen no matter the screen size */}
  <View style={twrnc`flex-1 justify-center items-center top-36 absolute  w-full h-14 bg-purple-500`}>
        <TouchableOpacity className="flex items-center justify-center"
        >
          <Text style={twrnc`text-white text-lg font-medium`}>Save Address</Text>
        </TouchableOpacity>
      </View>
</View>
          
        </View>
    );
};

export default AddressScreen;
