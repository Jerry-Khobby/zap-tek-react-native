import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MainStackRouter from './routes/mainstacknavigator/MainStackRouter';
import Welcome from './screens/registration/screen_4_welcome';



const App = () => {
  return (
    <View style={twrnc`flex-1`}>
     {/** all the components will here  */}
   {/* <MainStackRouter/>  */}
 <Welcome/>
      <StatusBar style='light-content'/>
    </View>
  )
}

export default App

