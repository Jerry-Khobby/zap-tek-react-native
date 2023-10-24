import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginCredentials from '../../screens/registration/screen_2_login';
import SignUp from '../../screens/registration/screen_3_signup';
import DrawerContents from './drawerContent';
import BottomTabNavigator from "../tabnavigation/tabnavigation";

const Drawer = createDrawerNavigator();

const DrawerMainComponent = ({navigation}) => {
  return (
   /*  <NavigationContainer> */
      <Drawer.Navigator  drawerContent={props=><DrawerContents{...props}/>}
      screenOptions={{
        headerShown:false,
      }}
      >
    <Drawer.Screen name="HomeComponents" component={BottomTabNavigator} />
      </Drawer.Navigator>
   /*  </NavigationContainer> */
  );
};

export default DrawerMainComponent;
