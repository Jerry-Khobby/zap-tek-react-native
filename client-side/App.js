import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MainStackRouter from './routes/mainstacknavigator/MainStackRouter';
import NewPassword from './screens/registration/screen_7_new_password';




const App = () => {
  return (
    <View style={twrnc`flex-1`}>
     {/** all the components will here  */}
   {/*  <MainStackRouter/>   */}
<NewPassword />
      <StatusBar style='light-content'/>
    </View>
  )
}

export default App

