import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import twrnc from 'tailwind-react-native-classnames';

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
        <SafeAreaView style={twrnc`flex-1 bg-white p-4`}>
            {/* Top View */}
            <View style={twrnc`flex-row items-center`}>
                <View style={twrnc`bg-gray-200 rounded-full p-2 mr-2`}>
                    <TouchableOpacity onPress={goBackToScreen12}>
                        <Icon name="arrow-left" size={20} color="black" style={twrnc`text-black`} />
                    </TouchableOpacity>
                </View>
                <Text style={twrnc`text-xl font-bold`}>Address</Text>
            </View>

            {/* Name Input */}
            <Text style={twrnc`mt-4`}>Name</Text>
            <TextInput
                style={twrnc`border-2 border-gray-300 rounded-2xl p-3 mt-2`}
                placeholder="Mrh Raju"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            {/* Country and City Inputs on the Same Line */}
            <View style={twrnc`mt-4 flex-row`}>
                <View style={twrnc`flex-1 mr-2`}>
                    <Text>Country</Text>
                    <TextInput
                        style={twrnc`border-2 border-gray-300 rounded-2xl p-3 mt-2`}
                        placeholder="Bangladesh"
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                    />
                </View>
                <View style={twrnc`flex-1 ml-2`}>
                    <Text>City</Text>
                    <TextInput
                        style={twrnc`border-2 border-gray-300 rounded-2xl p-3 mt-2`}
                        placeholder="Sylhet"
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />
                </View>
            </View>

            {/* Phone Number Input */}
            <Text style={twrnc`mt-4`}>Phone Number</Text>
            <TextInput
                style={twrnc`border-2 border-gray-300 rounded-2xl p-3 mt-2`}
                placeholder="+880 1453-987533"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
            />

            {/* Address Input */}
            <Text style={twrnc`mt-4`}>Address</Text>
            <TextInput
                style={twrnc`border-2 border-gray-300 rounded-2xl p-3 mt-2`}
                placeholder="Chhatak, Sunamgonj 12/8AB"
                value={address}
                onChangeText={(text) => setAddress(text)}
            />

            {/* Save as Primary Address */}
            <View style={twrnc`mt-4 flex-row items-center justify-between`}>
                <Text>Save as primary address</Text>
                <Switch
                    value={isPrimary}
                    onValueChange={(value) => setIsPrimary(value)}
                />
            </View>

            {/* Save Address Button */}
            <TouchableOpacity
                style={twrnc`bg-purple-600 rounded-full p-6 items-center mt-8`}
                onPress={saveAddress}
            >
                <Text style={twrnc`text-white text-lg font-semibold`}>Save Address</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default AddressScreen;
