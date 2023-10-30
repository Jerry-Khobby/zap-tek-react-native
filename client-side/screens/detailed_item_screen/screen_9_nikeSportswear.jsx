import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Pressable,
    FlatList, StyleSheet
} from 'react-native'
import twrnc from 'tailwind-react-native-classnames';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon_SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons";
import React, {useState} from "react";
import {Review_rating} from "../../data/review_rating";


const NikeSportsWear = () => {

    {/*A function for carded image display*/}
    const ImageCards = () =>{
        {/*Array containing list of carded images*/}
        const imgList =[
            {Img:require("../../assets/Rectanglei.png")},
            {Img:require("../../assets/Rectangleii.png")},
            {Img:require("../../assets/Rectangleiii.png")},
            {Img:require("../../assets/Rectangleiv.png")},
        ]
        return(
            <View>
                <FlatList
                    data={imgList}
                    horizontal={true} // Enable horizontal scrolling
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={twrnc `flex-row justify-evenly mx-2 mt-3`}>
                            <Image source={item.Img} style={twrnc `h-20 w-20`} />
                        </View>
                    )}
                />
            </View>
        )
    };


    {/*Selects and Deselects upon pressing*/}
    const Selectables = () => {
        const categoryList = ["Size", "Size Guide"]
        const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
        return(
            <View style={twrnc`mt-2 flex-row justify-between`}>
                {categoryList.map((minor,index)=>(
                    <Pressable key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                        <Text style={[
                            minorCategoryListText,(index === selectedCategoryIndex && minorActiveCategoryListText )
                        ]}>{minor}</Text>
                    </Pressable>
                ))}
            </View>
        )
    };



    {/*Displays the various sizes available in their respective backgrounds*/}
    const SizeDisplay = () => {
        const sizeOptions = [
            {Txt:"S"},
            {Txt:"M"},
            {Txt:"L"},
            {Txt:"XL"},
            {Txt:"2XL"}
        ]
        return(
            <View>
                <FlatList
                    data={sizeOptions}
                    horizontal={true} // Enable horizontal scrolling
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={twrnc `flex-row justify-between mx-2 mt-2`}>
                            <View style={twrnc `bg-gray-100 h-16 w-16 rounded-lg`}>
                                <View style={twrnc `items-center mt-4`}>
                                    <Text style={twrnc `font-bold text-xl`}>{item.Txt}</Text>
                                </View>
                            </View>

                        </View>
                    )}
                />
            </View>
        )
    };


    {/*Selects and Deselects upon pressing*/}
    const Highlights = () => {
        const categoryList = ["Reviews", "View All"]
        const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
        return(
            <View style={twrnc`mt-2 flex-row justify-between`}>
                {categoryList.map((minor,index)=>(
                    <Pressable key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                        <Text style={[
                            minorCategoryListText,(index === selectedCategoryIndex && minorActiveCategoryListText )
                        ]}>{minor}</Text>
                    </Pressable>
                ))}
            </View>
        )
    };


    return(
        <SafeAreaView style={twrnc `flex-1`}>

            {/* Topmost view: containing the background image and other accompanying features.*/}
            <View style={twrnc `bg-gray-100`}>
                <ImageBackground
                    source={require("../../assets/secondimage.png")}
                    resizeMode={"contain"}
                    style={twrnc `h-80 w-full mt-4`}>
                    <View style={twrnc `flex-row justify-between`}>
                        <TouchableOpacity style={twrnc `bg-white h-12 w-12 mt-2 mx-3 rounded-full`}>
                            <View style={twrnc `items-center mt-3`}>
                                <MaterialCommunityIcons name="arrow-left" size={24}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={twrnc `bg-white h-12 w-12 mt-2 mx-3 rounded-full`}>
                            <View style={twrnc `items-center mt-2`}>
                                <Icon_SimpleLineIcons name="handbag" size={25}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Image source={require("../../assets/Logo.png")} style={[twrnc`absolute`, { bottom: 0, left:'40%' }] /* Change positioning as needed */}/>
                </ImageBackground>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={twrnc `flex-1`}>

                {/*Displays text component directly beneath the Topmost view*/}
                <View style={twrnc `mx-4`}>
                    <View>
                        <View style={twrnc `flex-row justify-between mt-3`}>
                            <Text style={twrnc `text-gray-300`}>Men's Printed Pullover Hoodie</Text>
                            <Text style={twrnc `text-gray-300 mr-2`}>Price</Text>
                        </View>
                        <View style={twrnc `flex-row justify-between mt-1`}>
                            <Text style={twrnc `text-black text-lg font-bold`}>Nike Club Fleece</Text>
                            <Text style={twrnc `text-black text-lg font-bold`}>$120</Text>
                        </View>
                    </View>

                    {/*Call to functions rendering various components*/}
                    <ImageCards/>
                    <Selectables/>
                    <SizeDisplay/>

                    {/*Descriptive text*/}
                    <View style={twrnc `mt-3`}>
                        <Text style={twrnc `font-bold text-xl`}>Description</Text>
                        <View>
                            <Text style={twrnc `text-gray-400 mt-1`}>The Nike Throwback Pullover Hoodie is made</Text>
                            <Text style={twrnc `text-gray-400 mt-1`}>from premium French terry fabric that blends a</Text>
                            <Text style={twrnc `text-gray-400 mt-1`}>performance feel with
                                <Text style={twrnc `font-bold text-black`}> Read More..</Text>
                            </Text>
                        </View>
                    </View>

                    {/*Function call of Highlights*/}
                    <Highlights/>


                    {/*Review section*/}
                    <View style={twrnc `mt-2 flex-row`}>
                        <Image source={require("../../assets/97.png")} style={twrnc `h-10 w-10`}/>
                        <View style={twrnc `flex-row`}>
                            <View style={twrnc `ml-2`}>
                                <Text style={twrnc `ml-1 font-bold`}>Ronald Richards</Text>
                                <View style={twrnc `flex-row mt-2`}>
                                    <EvilIcons name="clock" size={24} color="gray" />
                                    <Text style={twrnc `text-gray-500`}>13 Sep, 2020</Text>
                                </View>
                            </View>

                            <View style={twrnc `ml-20`}>
                                <Text style={twrnc `font-bold ml-8`}>4.8 <Text style={twrnc `text-gray-500`}>rating</Text></Text>
                                <View style={twrnc `ml-9 mt-1`}>
                                    <Review_rating/>
                                </View>
                            </View>
                        </View>
                    </View>


                    {/*Text description of the reviewed person*/}
                    <View style={twrnc `mt-4`}>
                        <Text style={twrnc `text-gray-400 mt-1`}>Lorem ipsum dolor sit amet, consectetur</Text>
                        <Text style={twrnc `text-gray-400 mt-1`}>adispiscing elit. Pellentesque malesuada eget</Text>
                        <Text style={twrnc `text-gray-400 mt-1`}>vitae amet...</Text>
                    </View>

                    <View style={twrnc `mt-8`}>
                        <Text style={twrnc `font-bold text-lg`}>Total Price</Text>
                        <View style={twrnc `flex-row justify-between`}>
                            <Text style={twrnc `text-gray-400 mt-2`}>with VAT SD</Text>
                            <Text style={twrnc `font-bold text-lg`} >$125</Text>
                        </View>

                    </View>
                </View>


                {/*Add to cart button*/}
                <TouchableOpacity style={twrnc `mt-5`}>
                    <View style={[twrnc `h-16 w-full`,styles.primary]}>
                        <View style={twrnc `items-center mt-6`}>
                            <Text style={twrnc `font-bold text-white `}>Add to Cart</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
};

export default NikeSportsWear;
const styles = StyleSheet.create({
    primary:{
        backgroundColor:"#9775FA"
    },
})
const minorCategoryListText = twrnc``;
const minorActiveCategoryListText = twrnc`font-bold text-lg`