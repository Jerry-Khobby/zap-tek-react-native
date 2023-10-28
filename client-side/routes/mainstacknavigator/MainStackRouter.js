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



const Stack = createStackNavigator();

function MainStackRouter() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Splash'
    screenOptions={{
        headerShown:false,
        headerShadowVisible:false,
    }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="screenOne" component={SalutationScreen} />
      <Stack.Screen name="screenTwo"  component={LoginCredentials}/>
      <Stack.Screen name="screenThree" component={SignUp}/>
      <Stack.Screen name="screenFour" component={Welcome}/>
      <Stack.Screen name="screenFive" component={ForgotPassword}/>
      <Stack.Screen name="screenSix" component={Verification}/>
      <Stack.Screen name="homescreen" component={DrawerMainComponent}/> 
    </Stack.Navigator>
 </NavigationContainer>
  );
}

export default MainStackRouter;