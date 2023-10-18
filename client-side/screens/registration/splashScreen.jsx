import {View,Image} from 'react-native'
import React,{useEffect} from 'react'
import twrnc from 'tailwind-react-native-classnames';

const SplashScreen = (/** the navigation props is supposed to come here  */) => {
  useEffect(()=>{
        // Simulating a 10-second delay for the splash screen
        const timer = setTimeout(() => {
          // Navigate to the main screen or desired screen
          //navigation.navigate("login");
        }, 10000000); // 10 seconds in milliseconds
    
        return () => clearTimeout(timer); // Clean up the timer on component unmount
  },[]);
  return (
    <View>
      <Image source={require("../../assets/splashscreen.png")} style={twrnc`w-full h-full `} />
    </View>
  )
}

export default SplashScreen;
