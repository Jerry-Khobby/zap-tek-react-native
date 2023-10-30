import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import twrnc from "tailwind-react-native-classnames";
import React from "react";
import {Review_rating} from "../../data/review_ratings";
import Icon_SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {Review_description} from "../../data/review_ratings";

const Review_Details = ({navigation}) => {

    const handleBackWardNavigation=()=>{
        navigation.navigate("screen9");
    }

    // moving to the add review screen 
    const AddReviewScreen=()=>{
        navigation.navigate("screen11");
    }
    return(
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={twrnc `mx-4`}>

                    {/*Topmost section of the Review Detail Page*/}
                    <View style={twrnc `flex-row mt-5 items-center`}>
                        <View>
                            <TouchableOpacity style={twrnc `bg-gray-200 h-12 w-12 mt-2 rounded-full`} onPress={handleBackWardNavigation}>
                                <View style={twrnc `items-center mt-3`}>
                                    <MaterialCommunityIcons name="arrow-left" size={24}/>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={twrnc `mx-24 mt-5 text-2xl font-semibold`}>Reviews</Text>
                    </View>

                    <View style={twrnc `mt-4 flex-row justify-between`}>
                        <View>
                            <Text style={twrnc `font-semibold`}>245 Reviews</Text>
                            <View style={twrnc `flex-row mt-1`}>
                                <Text>4.8 </Text>
                                <View style={twrnc `mt-0.5`}><Review_rating/></View>
                            </View>
                        </View>

                        {/*Add review button*/}
                        <TouchableOpacity onPress={AddReviewScreen}>
                            <View style={[twrnc `h-10 w-28 rounded-lg`,styles.primary]}>
                                <View style={twrnc `flex-row items-center ml-2.5 mt-2.5`}>
                                    <Icon_SimpleLineIcons name="note" size={15} color="white" />
                                    <Text style={twrnc `text-white`}>Add Review</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/*First Review Tag*/}
                    <View style={twrnc `mt-5`}>
                        <View style={twrnc `mt-4 flex-row`}>
                            <Image source={require("../../assets/97.png")} style={twrnc `h-10 w-10`}/>
                            <View style={twrnc `flex-row`}>
                                <View style={twrnc `ml-2`}>
                                    <Text style={twrnc `ml-1 font-bold`}>Jenny Wilson</Text>
                                    <View style={twrnc `flex-row mt-2`}>
                                        <EvilIcons name="clock" size={24} color="gray" />
                                        <Text style={twrnc `text-gray-500`}>13 Sep, 2020</Text>
                                    </View>
                                </View>

                                <View style={twrnc `ml-20`}>
                                    <Text style={twrnc `font-bold ml-8`}>4.8 <Text style={twrnc `text-gray-500`}>rating</Text></Text>
                                    <View style={twrnc `ml-8 mt-1`}>

                                        {/*Function call to display accompanying stars*/}
                                        <Review_rating/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/*Function call to display review description*/}
                        <Review_description/>

                        {/*Second Review Tag*/}
                        <View style={twrnc `mt-4 flex-row`}>
                            <Image source={require("../../assets/41.png")} style={twrnc `h-10 w-10`}/>
                            <View style={twrnc `flex-row`}>
                                <View style={twrnc `ml-2`}>
                                    <Text style={twrnc `ml-1 font-bold`}>Ronald Richards</Text>
                                    <View style={twrnc `flex-row mt-2`}>
                                        <EvilIcons name="clock" size={24} color="gray" />
                                        <Text style={twrnc `text-gray-500`}>13 Sep, 2020</Text>
                                    </View>
                                </View>

                                <View style={twrnc `ml-20`}>
                                    <Text style={twrnc `font-bold ml-7`}>4.8 <Text style={twrnc `text-gray-500`}>rating</Text></Text>
                                    <View style={twrnc `ml-7 mt-1`}>

                                        {/*Function call to display accompanying stars*/}
                                        <Review_rating/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/*Function call to display review description*/}
                        <Review_description/>


                        {/*Third Review Tag*/}
                        <View style={twrnc `mt-4 flex-row`}>
                            <Image source={require("../../assets/39.png")} style={twrnc `h-10 w-10`}/>
                            <View style={twrnc `flex-row`}>
                                <View style={twrnc `ml-2`}>
                                    <Text style={twrnc `ml-1 font-bold`}>Guy Hawkins</Text>
                                    <View style={twrnc `flex-row mt-2`}>
                                        <EvilIcons name="clock" size={24} color="gray" />
                                        <Text style={twrnc `text-gray-500`}>13 Sep, 2020</Text>
                                    </View>
                                </View>

                                <View style={twrnc `ml-20`}>
                                    <Text style={twrnc `font-bold ml-9`}>4.8 <Text style={twrnc `text-gray-500`}>rating</Text></Text>
                                    <View style={twrnc `ml-9 mt-1`}>

                                        {/*Function call to display accompanying stars*/}
                                        <Review_rating/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/*Function call to display review description*/}
                        <Review_description/>


                        {/*Last Review Tag*/}
                        <View style={twrnc `mt-4 flex-row`}>
                            <Image source={require("../../assets/129.png")} style={twrnc `h-10 w-10`}/>
                            <View style={twrnc `flex-row`}>
                                <View style={twrnc `ml-2`}>
                                    <Text style={twrnc `ml-1 font-bold`}>Savannah Nguyen</Text>
                                    <View style={twrnc `flex-row mt-2`}>
                                        <EvilIcons name="clock" size={24} color="gray" />
                                        <Text style={twrnc `text-gray-500`}>13 Sep, 2020</Text>
                                    </View>
                                </View>

                                <View style={twrnc `ml-20`}>
                                    <Text style={twrnc `font-bold ml-5`}>4.8 <Text style={twrnc `text-gray-500`}>rating</Text></Text>
                                    <View style={twrnc `ml-5 mt-1`}>

                                        {/*Function call to display accompanying stars*/}
                                        <Review_rating/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/*Function call to display review description*/}
                        <Review_description/>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Review_Details;
const styles = StyleSheet.create({
    primary:{
        backgroundColor:"orange"
    },
})