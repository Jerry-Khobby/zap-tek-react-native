import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/registration/splashScreen';
import SalutationScreen from '../../screens/registration/screen_1';
import LoginCredentials from '../../screens/registration/screen_2_login';
import Welcome from '../../screens/registration/screen_4_welcome';
import SignUp from '../../screens/registration/screen_3_signup';
import ForgotPassword from '../../screens/registration/screen_5_forgotpassword';
import Verification from '../../screens/registration/screen_6_verification';
import { NavigationContainer } from '@react-navigation/native';
import DrawerMainComponent from '../drawernavigation/sliderDrawer';
import React, { useState, useEffect } from 'react';
import {useDarkMode} from "../../context/darkmode"
import Nike from '../../screens/homescreens/nike';



const Stack = createStackNavigator();


function MainStackRouter() {
  const { isLoggin } = useDarkMode(); // Assuming isLoggin is the correct state name
  const [initialRoute, setInitialRoute] = useState('Splash'); // Always start with the splash screen

  useEffect(() => {
    // Simulate an asynchronous check for user login status
    const checkLoginStatus = async () => {
      // Your actual logic to check the user's login status goes here
      // For now, I'll just use a timeout to simulate an asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating 2 seconds delay

      // Set the initial route based on the login status
      setInitialRoute(!isLoggin ? 'screenTwo' : 'homescreen');
    };

    checkLoginStatus();
  }, [isLoggin]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="screenOne" component={SalutationScreen} />
        <Stack.Screen name="screenTwo" component={LoginCredentials} />
        <Stack.Screen name="screenThree" component={SignUp} />
        <Stack.Screen name="screenFour" component={Welcome} />
        <Stack.Screen name="screenFive" component={ForgotPassword} />
        <Stack.Screen name="screenSix" component={Verification} />
        <Stack.Screen name="nike" component={Nike}/>
        <Stack.Screen name="homescreen" component={DrawerMainComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackRouter;