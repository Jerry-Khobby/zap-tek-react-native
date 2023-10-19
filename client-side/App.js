import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MainStackRouter from './routes/mainstacknavigator/MainStackRouter';
import SignUp from './screens/registration/screen_3_signup';



const App = () => {
  return (
    <View style={twrnc`flex-1`}>
     {/** all the components will here  */}
   {/* <MainStackRouter/>  */}
   <SignUp />
      <StatusBar style='light-content'/>
    </View>
  )
}

export default App

