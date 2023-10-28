import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/registration/splashScreen';
import SalutationScreen from '../../screens/registration/screen_1';
import LoginCredentials from '../../screens/registration/screen_2_login';
import Welcome from '../../screens/registration/screen_4_welcome';
import SignUp from '../../screens/registration/screen_3_signup';
import ForgotPassword from '../../screens/registration/screen_5_forgotpassword';
import Verification from '../../screens/registration/screen_6_verification';
import Homescreen from '../../screens/homescreens/homescreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerMainComponent from '../drawernavigation/sliderDrawer';
import OrderConfirmed from '../../screens/homescreens/orderConfirm';
import NikeSportsWear from '../../screens/detailed_item_screen/screen_9_nikeSportwear';
import Review_Details from '../../screens/detailed_item_screen/screen_10_reviews';
import CartScreen from '../../screens/detailed_item_screen/screen_12_cart';


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
      <Stack.Screen name="homescreen" component={CartScreen}/> 
    </Stack.Navigator>
 </NavigationContainer>
  );
}

export default MainStackRouter;