import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Screen12 = () => {
    const navigation = useNavigation();

    const goToCheckout = () => {
        navigation.navigate('Screen13');
    };

    const goBackToScreen11 = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top View */}
            <View style={styles.topBar}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={goBackToScreen11}>
                        <Icon name="arrow-left" size={24} color="black" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Cart</Text>
            </View>

            {/* First Cart Item Details */}
            <View style={styles.cartItemContainer}>
                <View style={styles.cartItemLeft}>
                    {/* Image of the item */}
                    <Image source={require('../../assets/IMG.png')} style={styles.itemImage} />
                </View>

                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>Men's Tie-Dye T-Shirt</Text>
                    <Text style={styles.itemBrand}>Nike Sportswear</Text>
                    <Text style={styles.itemPrice}>$45 (-$4.00 Tax)</Text>
                </View>
            </View>

            {/* Second Cart Item Details (Same as the First One) */}
            <View style={[styles.cartItemContainer, styles.grayBackground]}>
                <View style={styles.cartItemLeft}>
                    <Image source={require('../../assets/image2.png')} style={styles.itemImage} />
                </View>

                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>Men's Tie-Dye T-Shirt</Text>
                    <Text style={styles.itemBrand}>Nike Sportswear</Text>
                    <Text style={styles.itemPrice}>$45 (-$4.00 Tax)</Text>
                </View>
            </View>

            {/* Checkout Button */}
            <TouchableOpacity
                style={styles.checkoutButton}
                onPress={goToCheckout}
            >
                <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

//styles
const styles = StyleSheet.create({
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
        fontSize: 23,
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
        fontSize: 30,
    },
    cartItemContainer: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10, 
        marginVertical: 10, 
    },
    grayBackground: {
        backgroundColor: '#F5F6FA', 
    },
    cartItemLeft: {
        flexDirection: 'row',
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
        flexDirection: 'column',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemBrand: {
        fontSize: 14,
    },
    itemPrice: {
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
});

export default Screen12;
