import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import twrnc from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_Ant from 'react-native-vector-icons/AntDesign'
import Icon_Font from 'react-native-vector-icons/FontAwesome';

const DrawerContents = (props) => {
  return (
    <View style={twrnc`flex-1 `}>
      <DrawerContentScrollView {...props}>
        <View style={twrnc`p-4`}>
          <View style={twrnc`flex flex-row items-center mt-6`}>
            <Avatar.Image source={require('../../assets/IMG.png')} size={70} />
            <View style={twrnc`ml-6`}>
              <Title style={twrnc`text-xl font-bold`}>Jerry Koblah</Title>
              <TouchableOpacity /* onPress={() => { props.navigation.navigate('Personal') }} */>
                <Caption style={twrnc`text-sm text-blue-500`}>Edit Profile</Caption>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={twrnc`mt-8`}>
            <DrawerItem
              icon={({ color, size }) => (<Icon name="payment" color="black" size={size} />)}
              label="Payment"
              labelStyle={twrnc`text-xl font-bold text-black`}
              /* onPress={() => { props.navigation.navigate('Payment') }} */
            />
            <DrawerItem
              icon={({ color, size }) => (<Icon name="storefront-outline" color="black" size={size} />)}
              label="Promotion"
              labelStyle={twrnc`text-xl font-bold text-black`}
              /* onPress={() => { props.navigation.navigate('Promotion') }} */
            />
            <DrawerItem
              icon={({ color, size }) => (<Icon name="clockcircleo" color="black" size={size} />)}
              label="Rides"
              labelStyle={twrnc`text-xl font-bold text-black`}
              /* onPress={() => { props.navigation.navigate('Rides') }} */
            />
            <DrawerItem
              icon={({ color, size }) => (<Icon name="suitcase" color="black" size={size} />)}
              label="Work Rides"
              labelStyle={twrnc`text-xl font-bold text-black`}
              /* onPress={() => { props.navigation.navigate('Workrides') }} */
            />
            <DrawerItem
              icon={({ color, size }) => (<Icon name="comment" color="black" size={size} />)}
              label="Support"
              labelStyle={twrnc`text-xl font-bold text-black`}
              /* onPress={() => { props.navigation.navigate('Support') }} */
            />
            <DrawerItem
              icon={({ color, size }) => (<Icon name="exclamationcircleo" color="black" size={size} />)}
              label="About"
              labelStyle={twrnc`text-xl font-bold text-black`}
              /* onPress={() => { props.navigation.navigate('About') }} */
            />
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={twrnc`mt-auto border-t border-gray-300 py-4 px-6`}>
        <DrawerItem
          icon={({ color, size }) => (<Icon name="exit-to-app" color="black" size={size} />)}
          label="Sign Out"
          labelStyle={twrnc`text-xl font-bold text-black`}
          /* onPress={() => { }} */
        />
      </View>
    </View>
  );
}

export default DrawerContents;
