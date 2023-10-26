import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import twrnc from "tailwind-react-native-classnames";
import React from "react";
import {Text, View} from "react-native";

{/*Star-like ratings ascribed to each review*/}
export const Review_rating = () => {
    return(
        <View style={twrnc `flex-row`}>
            <Ionicons name="star" size={12} color="orange" />
            <Ionicons name="star" size={12} color="orange" />
            <Ionicons name="star" size={12} color="orange" />
            <Ionicons name="star" size={12} color="orange" />
            <EvilIcons name="star" size={14} color="black"  style={twrnc `mt-0.5`}/>
        </View>
)
};

{/*Iterative statements present under each review tag*/}
export const Review_description = () => {
    return(
        <View style={twrnc `mt-4`}>
            <Text style={twrnc `text-gray-400 mt-1`}>Lorem ipsum dolor sit amet, consectetur</Text>
            <Text style={twrnc `text-gray-400 mt-1`}>adispiscing elit. Pellentesque malesuada eget</Text>
            <Text style={twrnc `text-gray-400 mt-1`}>vitae amet...</Text>
        </View>

    )
};