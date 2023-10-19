import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MainStackRouter from './routes/mainstacknavigator/MainStackRouter';
import ForgotPassword from './screens/registration/screen_5_forgotpassword';



const App = () => {
  return (
    <View style={twrnc`flex-1`}>
     {/** all the components will here  */}
   {/*  <MainStackRouter/>   */}
   <ForgotPassword/>
      <StatusBar style='light-content'/>
    </View>
  )
}

export default App

