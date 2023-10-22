import {Text, View,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Icon_Encrypto from "react-native-vector-icons/Entypo";
import { DrawerActions } from '@react-navigation/native';


const Homescreen = ({navigation}) => {


  // a function that will open the drawer and close it 
  const openDrawer=()=>{
    navigation.dispatch(DrawerActions.toggleDrawer());
  };




  return (
    <View style={twrnc`flex w-full h-full flex-col  pt-11 relative bg-white`}>
      {/** the header will consist of two iccons at the top of the screen  */}
     <View style={twrnc`flex flex-row items-center justify-between`}>
        {/** the icon for navigation backwards  */}
    <View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`}
    onPress={openDrawer}
    >
    {/** this is the view for the icon  */}
    <Icon_Encrypto name="menu" size={25}/>
</TouchableOpacity>
</View>
       {/** the icon for navigation backwards  */}
    <View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`}>
    {/** this is the view for the icon  */}
    <Icon_SimpleLineIcons name="handbag" size={25}/>
</TouchableOpacity>
</View>
     </View>


{/** now the remaining codes */}
<View style={twrnc`flex flex-col mx-5 mt-5`}>
  <View style={twrnc``}>
    <Text style={twrnc`text-black text-4xl `}>Hello</Text>
  </View>
  <View>
    <Text style={twrnc`text-gray-400 text-xl`}>Welcome to Laza
    </Text></View>
</View>




    </View>
  )
}

export default Homescreen;
