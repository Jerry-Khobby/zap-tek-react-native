import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/registration/splashScreen';
import SalutationScreen from '../../screens/registration/screen_1';
import LoginCredentials from '../../screens/registration/screen_2_login';
import { NavigationContainer } from '@react-navigation/native';

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
    </Stack.Navigator>
 </NavigationContainer>
  );
}

export default MainStackRouter;