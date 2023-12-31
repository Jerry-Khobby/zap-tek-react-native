import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MainStackRouter from './routes/mainstacknavigator/MainStackRouter';
import { NavigationContainer } from '@react-navigation/native';
/* import BottomTabNavigator from "./routes/tabnavigation/tabnavigation"; */
import 'react-native-gesture-handler';
import "expo-dev-client";
import { DarkModeProvider } from './context/darkmode';
import { Provider } from 'react-redux';
import store from './state/store';



const App = () => {

  return (
    <Provider store={store}>
    <View style={twrnc`flex-1`}>
     {/** all the components will here  */}
     <DarkModeProvider>
     <MainStackRouter/>
  {/*  <DrawerMainComponent /> */}
    <StatusBar style='light-content'/>
    </DarkModeProvider>
    </View>
  </Provider>
  )
}

export default App

