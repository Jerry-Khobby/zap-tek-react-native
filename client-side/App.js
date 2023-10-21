import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MainStackRouter from './routes/mainstacknavigator/MainStackRouter';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./routes/tabnavigation/tabnavigation";




const App = () => {
  return (
    <NavigationContainer>
    <View style={twrnc`flex-1`}>
     {/** all the components will here  */}
   {/*  <MainStackRouter/>  */} 

   <BottomTabNavigator/>

      <StatusBar style='light-content'/>
    </View>
    </NavigationContainer>
  )
}

export default App

