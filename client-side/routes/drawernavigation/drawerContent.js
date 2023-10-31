import {TouchableOpacity, View, Image} from 'react-native';
import {DrawerContentScrollView} from "@react-navigation/drawer";
import tw from 'tailwind-react-native-classnames';
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
    Entypo,
    AntDesign,
    SimpleLineIcons,
    Ionicons,
} from '@expo/vector-icons';
import { Text, Switch,Avatar,Title,Caption} from 'react-native-paper';
import React, { useState } from "react";
import { useDarkMode } from '../../context/darkmode';
import Feather from 'react-native-vector-icons/Feather';

const DrawerContents = (props) => {

  
    const {isDarkMode,toggleDarkMode} = useDarkMode();
    


    return(
        <View style={!isDarkMode ? tw`flex-1` : tw`flex-1 bg-black`}>
            <DrawerContentScrollView {...props}>
                <View style={tw `mx-5 mt-4`}>
                    <TouchableOpacity>
                        <View >
                            <View style={!isDarkMode ? tw`bg-gray-200 h-12 w-12 flex items-center rounded-full` : tw`bg-gray-700 h-12 w-12 flex items-center rounded-full`}>
                                <MaterialCommunityIcons name="format-list-text" size={24} color={!isDarkMode ? "black" : "white"} style={tw`m-auto`}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={tw `mt-10 flex-row items-center justify-around`}>
                        <Avatar.Image source={require('../../assets/frame1.png')}  size={55}/>
                        <View style={tw `flex-row mt-2`}>
                        <View style={tw `ml-5 flex items-start`}>
                                <Title style={!isDarkMode ? tw`font-bold` : tw`font-bold text-white`}>Mrh Raju</Title>
                                <View style={tw `flex-row`}>
                                    <TouchableOpacity style={tw ` flex items-center flex-row`} >
                                    <Caption style={!isDarkMode ? tw`font-semibold text-gray-600 -mt-2` : tw`font-semibold text-gray-300 -mt-2`}>Verified Profile</Caption>
                                    <FontAwesome name="certificate" size={15} color="lightgreen" style={tw `ml-1 -mt-2`}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={!isDarkMode ? tw`h-10 w-20 rounded-md bg-gray-200 h-11 w-20 ml-4` : tw`h-10 w-20 rounded-md bg-gray-700 h-11 w-20 ml-4`}>
                                <View style={tw `items-center m-auto`}>
                                    <Text style={tw `text-gray-500`}>3 orders</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={tw `mt-10`}>
    <View style={tw `flex-row items-center justify-between`}>
        <View style={tw`flex flex-row items-center`}>
            {isDarkMode ? (
                <Feather name="moon" size={24} color="gray" />
            ) : (
                <Entypo name="light-up" size={24} color="gray" />
            )}
            <Text style={!isDarkMode ? tw`text-lg ml-2` : tw`text-lg ml-2 text-white`}>Dark Mode</Text>
        </View>
        <View>
            <Switch value={isDarkMode} onValueChange={toggleDarkMode} trackColor={{ false: "#767577", true: "#4caf50" }}/>
        </View>
    </View>
</View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <AntDesign name="infocirlceo" size={20} style={tw `mt-1`} color="gray" />
                            <Text style={!isDarkMode ? tw`text-lg ml-2` : tw`text-lg ml-2 text-white`}>Account information</Text>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <MaterialIcons name="lock-outline" size={24} color="gray" />
                            <Text style={!isDarkMode ? tw`text-lg ml-2` : tw`text-lg ml-2 text-white`}>Password</Text>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Order')}}>
                        <View style={tw `flex-row`}>
                            <SimpleLineIcons name="handbag" size={20} color={"gray"}/>
                            <Text style={!isDarkMode ? tw`text-lg ml-2` : tw`text-lg ml-2 text-white`}>Order</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={tw `mt-8`}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('screen15')}}>
                        <View style={tw `flex-row`}>
                            <MaterialCommunityIcons name="wallet-outline" size={24} color="gray" />
                            <Text style={!isDarkMode ? tw`text-lg ml-2` : tw`text-lg ml-2 text-white`}>My Cards</Text>
                        </View>
                            </TouchableOpacity>
                    </View>

                    <View style={tw `mt-8`}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('Wishlist')}}>
                        <View style={tw `flex-row`}>
                            <AntDesign name="hearto" size={20} color={"gray"} />
                            <Text style={!isDarkMode ? tw`text-lg ml-2` : tw`text-lg ml-2 text-white`}>Wishlist</Text>
                        </View>
                    </TouchableOpacity>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <Ionicons name="settings-outline" size={20} color="gray" />
                            <Text style={!isDarkMode ? tw`text-lg ml-2` : tw`text-lg ml-2 text-white`}>Settings</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={tw `mt-10  flex-row`}>
                            <MaterialIcons name="logout" size={24} color="red" />
                            <Text style={tw`text-red-500 text-lg ml-5`}>Logout</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </DrawerContentScrollView>

        </View>
    )
};

export default DrawerContents;