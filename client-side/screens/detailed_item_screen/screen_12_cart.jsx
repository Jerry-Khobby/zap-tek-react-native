import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import twrnc from 'tailwind-react-native-classnames';

const Cart = ({navigation}) => {
 /*  const navigation = useNavigation();

  const goToCheckout = () => {
    navigation.navigate('Screen13');
  };

  const goBackToScreen11 = () => {
    navigation.goBack();
  }; */

  return (
    <SafeAreaView style={twrnc`flex-1 bg-white p-4`}>
      {/* Top View */}
      <View style={twrnc`flex-row items-center`}>
        <View style={twrnc`bg-gray-200 rounded-full p-2 mr-2`}>
          <TouchableOpacity /* onPress={goBackToScreen11} */>
            <Icon name="arrow-left" size={20} color="black" style={twrnc`text-black`} />
          </TouchableOpacity>
        </View>
        <Text style={twrnc`text-2xl font-bold`}>Cart</Text>
      </View>

      {/* First Cart Item Details */}
      <View style={twrnc`flex-row items-center p-4 bg-white rounded-lg my-4`}>
        <Image source={require('../../assets/IMG.png')} style={twrnc`w-20 h-20 mr-4`} />
        <View style={twrnc`flex-1`}>
          <Text style={twrnc`text-lg font-bold`}>Men's Tie-Dye T-Shirt</Text>
          <Text style={twrnc`text-base`}>Nike Sportswear</Text>
          <Text style={twrnc`text-base`}>$45 (-$4.00 Tax)</Text>
        </View>
      </View>

      {/* Second Cart Item Details (Same as the First One) */}
      <View style={twrnc`flex-row items-center p-4 bg-gray-200 rounded-lg`}>
        <Image source={require('../../assets/image2.png')} style={twrnc`w-20 h-20 mr-4`} />
        <View style={twrnc`flex-1`}>
          <Text style={twrnc`text-lg font-bold`}>Men's Tie-Dye T-Shirt</Text>
          <Text style={twrnc`text-base`}>Nike Sportswear</Text>
          <Text style={twrnc`text-base`}>$45 (-$4.00 Tax)</Text>
        </View>
      </View>

      {/* Delivery Address Section */}
      <View style={twrnc`my-4 p-4 bg-white rounded-lg`}>
        <Text style={twrnc`text-lg font-bold`}>Delivery Address</Text>
        <View style={twrnc`flex-row items-center mt-2`}>
          <Image source={require('../../assets/Rectangle.png')} style={twrnc`w-12 h-12 mr-4`} />
          <View style={twrnc`flex-1`}>
            <Text style={twrnc`text-base`}>Chhatak, Sunamgonj 12/8AB</Text>
            <Text style={twrnc`text-sm`}>Sylhet</Text>
          </View>
        </View>
        <Icon name="check-circle" size={20} color="green" style={twrnc`self-end -mt-12`} />
      </View>

      {/* Payment Method Section */}
      <View style={twrnc`my-4 p-4 bg-white rounded-lg`}>
        <Text style={twrnc`text-lg font-bold`}>Payment Method</Text>
        <View style={twrnc`flex-row items-center mt-2`}>
          <Image source={require('../../assets/Frame.png')} style={twrnc`w-12 h-12 mr-4`} />
          <View style={twrnc`flex-1`}>
            <Text style={twrnc`text-base`}>Visa Classic</Text>
            <View style={twrnc`flex-row items-center mt-1`}>
              <Icon name="star" size={12} color="gray" />
              <Icon name="star" size={12} color="gray" />
              <Icon name="star" size={12} color="gray" />
              <Icon name="star" size={12} color="gray" />
              <Text style={twrnc`text-sm ml-1`}>7690</Text>
            </View>
          </View>
        </View>
        <Icon name="check-circle" size={20} color="green" style={twrnc`self-end -mt-12`} />
      </View>

      {/* Order Info Section */}
      <View style={twrnc`my-4 p-4 bg-white rounded-lg`}>
        <Text style={twrnc`text-lg font-bold`}>Order Info</Text>
        <View style={twrnc`flex-row items-center mt-2 justify-between`}>
          <Text style={twrnc`text-base`}>Subtotal</Text>
          <Text style={twrnc`text-base`}>$110</Text>
        </View>
        <View style={twrnc`flex-row items-center mt-2 justify-between`}>
          <Text style={twrnc`text-base`}>Shipping Cost</Text>
          <Text style={twrnc`text-base`}>$10</Text>
        </View>
        <View style={twrnc`flex-row items-center mt-2 justify-between`}>
          <Text style={twrnc`text-base`}>Total</Text>
          <Text style={twrnc`text-base`}>$120</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={twrnc`bg-purple-600 rounded-full p-6 items-center mt-auto`} /* onPress={goToCheckout} */>
        <Text style={twrnc`text-white text-lg font-semibold`}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
