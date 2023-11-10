import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContents from './drawerContent';
import BottomTabNavigator from "../tabnavigation/tabnavigation";
import NikeSportsWear from '../../screens/detailed_item_screen/screen_9_nikeSportwear';
import Review_Details from '../../screens/detailed_item_screen/screen_10_reviews';
import AddReview from '../../screens/detailed_item_screen/screen_11_addReview';
import CartScreen from '../../screens/detailed_item_screen/screen_12_cart';
import AddressScreen from '../../screens/detailed_item_screen/screen_13_address';
import Payment from '../../screens/detailed_item_screen/screen_14_Payment';
import AddNewCard from '../../screens/detailed_item_screen/screen_15_addNewCard';
import OrderConfirmed from '../../screens/homescreens/orderConfirm';
import Nike from '../../screens/homescreens/nike';
import { useDarkMode } from '../../context/darkmode';

const Drawer = createDrawerNavigator();

const DrawerMainComponent = ({navigation}) => {

  const {isDarkMode} =useDarkMode();




  
  return (
   /*  <NavigationContainer> */
      <Drawer.Navigator  drawerContent={props=><DrawerContents{...props}/>}
      screenOptions={{
        headerShown:false,
      }}
      drawerStyle={{
        backgroundColor: !isDarkMode ? 'black' : 'white', // Set the background color based on dark mode state
      }}
    
      >
    <Drawer.Screen name="HomeComponents" component={BottomTabNavigator} />
    <Drawer.Screen name="screen9" component={NikeSportsWear}/>
    <Drawer.Screen name="screen10" component={Review_Details}/>
    <Drawer.Screen name="screen11" component={AddReview}/>
    <Drawer.Screen name="screen12" component={CartScreen}/>
    <Drawer.Screen name="screen13" component={AddressScreen}/>
    <Drawer.Screen name="screen14" component={Payment}/>
    <Drawer.Screen name="screen15" component={AddNewCard}/>
    <Drawer.Screen name="screen16" component={OrderConfirmed}/>
    <Drawer.Screen name="screen18" component={Nike}/>

      </Drawer.Navigator>
   /*  </NavigationContainer> */
  );
};

export default DrawerMainComponent;
