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

const DrawerContents = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      // You can perform any actions here when the dark mode is toggled
    };
    return(
        <View style={tw `flex-1`}>
            <DrawerContentScrollView {...props}>
                <View style={tw `mx-5 mt-4`}>
                    <TouchableOpacity>
                        <View >
                            <View style={tw `bg-gray-200 h-12 w-12  flex items-center  rounded-full`}>
                                <MaterialCommunityIcons name="format-list-text" size={24} color="black" style={tw`m-auto`}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={tw `mt-10 flex-row items-center justify-around`}>
                        <Avatar.Image source={require('../../assets/frame1.png')}  size={55}/>
                        <View style={tw `flex-row mt-2`}>
                        <View style={tw `ml-5 flex items-start`}>
                                <Title style={tw `font-bold`}>Mrh Raju</Title>
                                <View style={tw `flex-row`}>
                                    <TouchableOpacity style={tw ` flex items-center flex-row`} >
                                    <Caption style={tw`font-semibold text-gray-600 -mt-2`}>Verified Profile</Caption>
                                    <FontAwesome name="certificate" size={15} color="lightgreen" style={tw `ml-1 -mt-2`}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={tw `h-10 w-18 rounded-md  bg-gray-200 h-11 w-20 ml-4 `}>
                                <View style={tw `items-center m-auto`}>
                                    <Text style={tw `text-gray-500`}>3 orders</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={tw `mt-10`}>
                        <View style={tw `flex-row items-center justify-between`}>
                            <View style={tw`flex flex-row items-center`}>
                                <Entypo name="light-up" size={24} color="gray" />
                                <Text style={tw `text-lg ml-2`}>Dark Mode</Text>
                            </View>
                            <View>
                            <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
                            </View>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <AntDesign name="infocirlceo" size={20} style={tw `mt-1`} color="gray" />
                            <Text style={tw `mt-0.5 ml-5 mb-1 text-lg`}>Account information</Text>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <MaterialIcons name="lock-outline" size={24} color="gray" />
                            <Text style={tw `mt-1 ml-5 mb-1 text-lg`}>Password</Text>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <SimpleLineIcons name="handbag" size={20} color={"gray"}/>
                            <Text style={tw `mt-0.5 ml-5 mb-1 text-lg`}>Order</Text>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <MaterialCommunityIcons name="wallet-outline" size={24} color="gray" />
                            <Text style={tw `mt-0.5 ml-5 mb-1 text-lg`}>My Cards</Text>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <AntDesign name="hearto" size={20} color={"gray"} />
                            <Text style={tw ` ml-5 mb-1 text-lg`}>Wishlist</Text>
                        </View>
                    </View>

                    <View style={tw `mt-8`}>
                        <View style={tw `flex-row`}>
                            <Ionicons name="settings-outline" size={20} color="gray" />
                            <Text style={tw ` ml-5 mb-1 text-lg`}>Settings</Text>
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