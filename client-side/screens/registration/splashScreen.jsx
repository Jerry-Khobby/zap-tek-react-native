import {View,Image} from 'react-native'
import React,{useEffect} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import { useDarkMode } from '../../context/darkmode';

const SplashScreen = ({navigation}) => {




const {isDarkMode,isLoggin}=useDarkMode()

const splashScreenImageSource = !isDarkMode
? require('../../assets/splashscreen.png')
: require('../../assets/darkmodesplash.png');


  useEffect(()=>{
    const checkLoginStatus=async()=>{
        // Simulating a 10-second delay for the splash screen
        const timer = setTimeout(() => {

          // Navigate to the main screen or desired screen
          // this will depend on the login status of the user , as whether the user is logged in or not 
          if(isLoggin){
navigation.navigate("homescreen");
          }else{
            navigation.navigate("screenTwo");
}

        }, 3000); // 10 seconds in milliseconds
    
        return () => clearTimeout(timer); // Clean up the timer on component unmount

    };
    checkLoginStatus();
  },[isLoggin,navigation]);
  return (
    <View>
      <Image source={splashScreenImageSource} style={twrnc`w-full h-full `} />
    </View>
  )
}

export default SplashScreen;
