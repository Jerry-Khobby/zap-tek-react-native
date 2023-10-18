import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MainStackRouter from './routes/mainstacknavigator/MainStackRouter';



const App = () => {
  return (
    <View style={twrnc`flex-1`}>
     {/** all the components will here  */}
  <MainStackRouter/>
      <StatusBar style='light-content'/>
    </View>
  )
}

export default App

