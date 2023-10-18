import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import SplashScreen from './screens/registration/splashScreen';

const App = () => {
  return (
    <View style={twrnc`flex-1`}>
     <SplashScreen/>
      <StatusBar style='light-content'/>
    </View>
  )
}

export default App

