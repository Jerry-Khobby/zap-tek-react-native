import {TouchableOpacity, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import twrnc from 'tailwind-react-native-classnames';
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
    Entypo,
    AntDesign,
    SimpleLineIcons,
    Ionicons
} from '@expo/vector-icons';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import React from "react";

const DrawerDetail = (props) => {
    return(
        <View style={twrnc`flex-1`}>
            <DrawerContentScrollView {...props}>
                <View style={twrnc`ml-2`}>
                    <TouchableOpacity>
                        <View style={twrnc`bg-gray-200 h-15 w-15 mt-6 rounded-full`}>
                            <View style={twrnc`items-center mt-4.5`}>
                                <MaterialCommunityIcons name="format-list-text" size={24} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={twrnc`mt-5 flex-row`}>
                        <View style={twrnc`h-15 w-15 rounded-full bg-gray-200`}>
                        </View>

                        <View style={twrnc`flex-row mt-2`}>
                            <View style={twrnc`ml-1`}>
                                <Text style={twrnc`font-bold`}>Mrh Raju</Text>
                                <View style={twrnc`flex-row`}>
                                    <Text>Verified Profile</Text>
                                    <FontAwesome name="certificate" size={15} color="red" style={tw `ml-1`}/>
                                </View>
                            </View>
                            <View style={twrnc`h-10 w-18 rounded-lg ml-5 bg-gray-200`}>
                                <View style={twrnc`items-center mt-2.5`}>
                                    <Text style={twrnc`text-gray-500`}>3 orders</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={twrnc`mt-10`}>
                        <View style={twrnc`flex-row`}>
                            <View>
                                <Entypo name="light-up" size={35} color="gray" />
                            </View>
                            <View style={twrnc`ml-3 flex-row`}>
                                <Text style={twrnc`text-lg mt-2`}>Dark Mode</Text>
                                <Switch style={twrnc`mt-1 ml-17`}/>
                            </View>
                        </View>
                    </View>

                    <View style={twrnc`mt-8`}>
                        <View style={twrnc`flex-row`}>
                            <AntDesign name="infocirlceo" size={24} style={tw `mt-1`} color="gray" />
                            <Text style={twrnc`mt-1 ml-5 mb-1 text-lg`}>Account information</Text>
                        </View>
                    </View>

                    <View style={twrnc`mt-8`}>
                        <View style={twrnc`flex-row`}>
                            <MaterialIcons name="lock-outline" size={30} color="gray" />
                            <Text style={twrnc`mt-1 ml-5 mb-1 text-lg`}>Password</Text>
                        </View>
                    </View>

                    <View style={twrnc`mt-8`}>
                        <View style={twrnc`flex-row`}>
                            <SimpleLineIcons name="handbag" size={24} color={"gray"}/>
                            <Text style={twrnc`mt-1 ml-5 mb-1 text-lg`}>Order</Text>
                        </View>
                    </View>

                    <View style={twrnc`mt-8`}>
                        <View style={twrnc`flex-row`}>
                            <MaterialCommunityIcons name="wallet-outline" size={30} color="gray" />
                            <Text style={twrnc`mt-1 ml-5 mb-1 text-lg`}>My Cards</Text>
                        </View>
                    </View>

                    <View style={twrnc`mt-8`}>
                        <View style={twrnc`flex-row`}>
                            <AntDesign name="hearto" size={24} color={"gray"} />
                            <Text style={twrnc`mt-1 ml-5 mb-1 text-lg`}>Wishlist</Text>
                        </View>
                    </View>

                    <View style={twrnc`mt-8`}>
                        <View style={twrnc`flex-row`}>
                            <Ionicons name="settings-outline" size={24} color="black" />
                            <Text style={twrnc`mt-1 ml-5 mb-1 text-lg`}>Settings</Text>
                        </View>
                    </View>

                </View>
            </DrawerContentScrollView>

        </View>
    )
};

export default DrawerDetail;