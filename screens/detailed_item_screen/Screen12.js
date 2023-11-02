import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
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
            marginLeft: 110,
            fontSize: 23,
            fontWeight: 'bold',
            marginBottom: -10,
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
        cartItemContainer: {
            flexDirection: 'row',
            padding: 20,
            borderRadius: 20,
            marginVertical: 30,
            marginHorizontal: 15,
        },
        grayBackground: {
            backgroundColor: '#F5F6FA',
        },
        noMarginTop: {
            marginTop: 0,
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
        addressSection: {
            marginVertical: 10,
            marginLeft: 15,
        },
        sectionLabel: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        addressContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        addressImage: {
            width: 45,
            height: 45,
            marginRight: 10,
        },
        addressText: {
            flex: 1,
            flexDirection: 'column',
        },
        addressLabel: {
            fontSize: 16,
        },
        cityLabel: {
            fontSize: 14,
        },
        starsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        priceLabel: {
            fontSize: 14,
        },
        checkIcon: {
            width: 30,
            height: 30,
            alignSelf: 'flex-end',
            marginTop: -30,
        },
        orderInfoSection: {
            marginVertical: 10,
            marginLeft: 15,
        },
        orderInfoLabel: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        orderInfoRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 9,
        },
        orderInfoText: {
            fontSize: 14,
            color: 'gray',
        },
        orderInfoValue: {
            fontSize: 14,
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
                    <TouchableOpacity onPress={goBackToScreen11}>
                        <Icon name="arrow-left" size={20} color="black" style={styles.icon} />
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
            <View style={[styles.cartItemContainer, styles.grayBackground, styles.noMarginTop]}>
                <View style={styles.cartItemLeft}>
                    <Image source={require('../../assets/image2.png')} style={styles.itemImage} />
                </View>

                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>Men's Tie-Dye T-Shirt</Text>
                    <Text style={styles.itemBrand}>Nike Sportswear</Text>
                    <Text style={styles.itemPrice}>$45 (-$4.00 Tax)</Text>
                </View>
            </View>

            {/* Delivery Address Section */}
            <View style={styles.addressSection}>
                <Text style={styles.sectionLabel}>Delivery Address</Text>
                <View style={styles.addressContent}>
                    <Image source={require('../../assets/Rectangle.png')} style={styles.addressImage} />
                    <View style={styles.addressText}>
                        <Text style={styles.addressLabel}>Chhatak, Sunamgonj 12/8AB</Text>
                        <Text style={styles.cityLabel}>Sylhet</Text>
                    </View>
                </View>
                <Icon name="check-circle" size={20} color="green" style={styles.checkIcon} />
            </View>

            {/* Payment Method Section */}
            <View style={styles.addressSection}>
                <Text style={styles.sectionLabel}>Payment Method</Text>
                <View style={styles.addressContent}>
                    <Image source={require('../../assets/Frame.png')} style={styles.addressImage} />
                    <View style={styles.addressText}>
                        <Text style={styles.addressLabel}>Visa Classic</Text>
                        <View style={styles.starsContainer}>
                            <Icon name="star" size={10} color="gray" />
                            <Icon name="star" size={10} color="gray" />
                            <Icon name="star" size={10} color="gray" />
                            <Icon name="star" size={10} color="gray" />
                            <Text style={styles.priceLabel}>  7690</Text>
                        </View>
                    </View>
                </View>
                <Icon name="check-circle" size={20} color="green" style={styles.checkIcon} />
            </View>

            {/* Order Info Section */}
            <View style={styles.orderInfoSection}>
                <Text style={styles.orderInfoLabel}>Order Info</Text>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoText}>Subtotal</Text>
                    <Text style={styles.orderInfoValue}>$110</Text>
                </View>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoText}>Shipping Cost</Text>
                    <Text style={styles.orderInfoValue}>$10</Text>
                </View>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoText}>Total</Text>
                    <Text style={styles.orderInfoValue}>$120</Text>
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

export default Screen12;
