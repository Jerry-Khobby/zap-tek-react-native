import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Screen13 = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('Mrh Raju');
    const [country, setCountry] = useState('Bangladesh');
    const [city, setCity] = useState('Synhet');
    const [phoneNumber, setPhoneNumber] = useState('+880 1453-987533');
    const [address, setAddress] = useState('Chhatak, Sunamgonj 12/8AB');
    const [isPrimary, setIsPrimary] = useState(false);

    const goBackToScreen12 = () => {
        navigation.goBack();
    };

    const saveAddress = () => {
        //  the functionality to save the address here
    };

    const styles = {
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: 'white',
        },
        topBar: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            marginLeft: 100,
            fontSize: 20,
            fontWeight: 'bold',
        },
        iconContainer: {
            backgroundColor: '#F5F6FA',
            borderRadius: 50,
            padding: 10,
            marginRight: -15,
            marginLeft: 20,
        },
        icon: {
            fontSize: 20,
        },
        input: {
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 20,
            padding: 15,
            marginVertical: 8,
            backgroundColor: '#f5f6fA',
            marginHorizontal: 15,
        },
        label: {
            marginVertical: 8,
            marginHorizontal: 25,
        },
        inputRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
        },
        primaryAddressContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 25,
            marginTop: 10,
        },
        primaryAddressText: {
            fontSize: 16,
        },
        checkoutButton: {
            backgroundColor: '#9775FA',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
        },
        checkoutText: {
            color: 'white',
        },
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top View */}
            <View style={styles.topBar}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={goBackToScreen12}>
                        <Icon name="arrow-left" size={20} color="black" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Address</Text>
            </View>

            {/* Name Input */}
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={[styles.input, { color: 'gray' }]}
                placeholder="Mrh Raju"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            {/* Country and City Inputs on the Same Line */}
            <View style={styles.inputRow}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.label, { marginHorizontal: 10 }]}>Country</Text>
                    <TextInput
                        style={[styles.input, { color: 'gray', marginHorizontal: 0 }]}
                        placeholder="Bangladesh"
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={[styles.input, { color: 'gray' }]}
                        placeholder="Synhet"
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />
                </View>
            </View>

            {/* Phone Number Input */}
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
                style={[styles.input, { color: 'gray' }]}
                placeholder="+880 1453-987533"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
            />

            {/* Address Input */}
            <Text style={styles.label}>Address</Text>
            <TextInput
                style={[styles.input, { color: 'gray' }]}
                placeholder="Chhatak, Sunamgonj 12/8AB"
                value={address}
                onChangeText={(text) => setAddress(text)}
            />

            {/* Save as Primary Address */}
            <View style={styles.primaryAddressContainer}>
                <Text style={styles.primaryAddressText}>Save as primary address</Text>
                <Switch
                    value={isPrimary}
                    onValueChange={(value) => setIsPrimary(value)}
                />
            </View>

            {/* Save Address Button */}
            <TouchableOpacity
                style={styles.checkoutButton}
                onPress={saveAddress}
            >
                <Text style={styles.checkoutText}>Save Address</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Screen13;
