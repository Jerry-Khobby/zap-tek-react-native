import {Text, View } from 'react-native'
import {createDrawerNavigator} from "@react-navigation/drawer";
import React from 'react'
import DrawerDetail from './drawerContent';
import BottomTabNavigator from '../tabnavigation/tabnavigation';
import Homescreen from '../../screens/homescreens/homescreen';



const Drawer=createDrawerNavigator();

const  MyDrawer=({navigation})=>{
  return(
    <Drawer.Navigator  drawerContent={props=><DrawerDetail{...props}/>}>
      <Drawer.Screen name="homescreen" component={Homescreen} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}


export default MyDrawer;
