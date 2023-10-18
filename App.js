import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen11 from './screens/detailed_item_screen/Screen11';
import Screen12 from './screens/detailed_item_screen/Screen12'; 
import Screen13 from './screens/detailed_item_screen/Screen13';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen11"> 
        <Stack.Screen
          name="Screen11"
          component={Screen11}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Screen12"
          component={Screen12}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Screen13"
          component={Screen13}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
