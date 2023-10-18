import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import SplashScreen from "../../screens/registration/splashScreen";






//Here is where I implemented the main_stack navigation for the project
//note that , this will be different from the tab navigation or the drawer navigation 

const MainStackRouter = () => {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, headerShadowVisible: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
 
export default MainStackRouter;