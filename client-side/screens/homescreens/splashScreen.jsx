import {Text, View } from 'react-native'
import React from 'react'
import twrnc from 'tailwind-react-native-classnames';



// we will not be making use of any stylesheet here but tailwind css 
const SplashScreen = () => {
  return (
    <View style={twrnc`flex  items-center justify-between`}>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen
