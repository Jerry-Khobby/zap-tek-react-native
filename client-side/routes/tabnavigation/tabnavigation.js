import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon_Ant from "react-native-vector-icons/AntDesign";
import Icon_Mat from "react-native-vector-icons/MaterialCommunityIcons";
import Homescreen from "../../screens/homescreens/homescreen";
import DetailScreen from "../../screens/detailed_item_screen/detailscreen";
import twrnc from "tailwind-react-native-classnames";
import Icon_SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Wishlist from "../../screens/homescreens/wishlist";
import Nike from "../../screens/homescreens/nike";
import { useDarkMode } from "../../context/darkmode";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        activeTintColor: "blue",
        inactiveTintColor: "white",
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Icon_Ant name="home" size={size} color={color} />;
          } else if (route.name === "Wishlist") {
            return <Icon_Ant name="hearto" size={size} color={color} />;
          } else if (route.name === "Order") {
            return (
              <Icon_SimpleLineIcons name="handbag" size={size} color={color} />
            );
          } else if (route.name === "Wallet") {
            return <Icon_Ant name="wallet" size={size} color={color} />;
          }
        },
      })}
      tabBarStyle={{
        backgroundColor: !isDarkMode ? "black" : "white", // Set the background color based on dark mode state
      }}
      tabBarOptions={{
        activeBackgroundColor: !isDarkMode ? "white" : "black",
        inactiveBackgroundColor: !isDarkMode ? "white" : "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Order"
        component={Nike}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
