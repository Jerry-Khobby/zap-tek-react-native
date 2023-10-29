import {Text, View,TouchableOpacity,TextInput,StyleSheet,Pressable,Image,FlatList,ScrollView,ImageBackground} from 'react-native'
import React,{useState} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Icon_Encrypto from "react-native-vector-icons/Entypo";
import { DrawerActions } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon_Ant from "react-native-vector-icons/AntDesign";
import {items} from '../../data/carouseldata';
import { newArrivalData } from '../../data/carouseldata';
import tw from 'tailwind-react-native-classnames';
import { brand } from "../../data/brand";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from '../../context/darkmode';


const Homescreen = ({navigation}) => {


  // a function that will open the drawer and close it 
  const openDrawer=()=>{
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

const { isDarkMode} = useDarkMode();








  //moving to the next screen on clicking the an image 
const handleScreenMovement=()=>{
  navigation.navigate("screen9");
}

  // defining a function that will handle the brands of the carousels at the top 
  const ListCategories = () => {
    const minorCategoryList = ['Choose Brand', 'View All'];
    const [selectedMinorCategoryIndex,setSelectedMinorCategoryIndex] = useState(0);
    return(
        <View style={twrnc`mt-2 flex-row justify-between mx-5`}>
            {minorCategoryList.map((minor,index)=>(
                <Pressable key={index} onPress={()=>setSelectedMinorCategoryIndex(index)}>
                    <Text style={[
                        minorCategoryListText,(index === selectedMinorCategoryIndex && minorActiveCategoryListText )
                    ]}>{minor}</Text>
                </Pressable>
            ))}
        </View>
    )
};


//ArrivalList function that must be  called  in the main body 
const ArrivalList = () => {
  const categoryList = ["New Arrival", "View All"]
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  return(
      <View style={twrnc`mt-2  mx-6 flex-row justify-between`}>
          {categoryList.map((minor,index)=>(
              <Pressable key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                  <Text style={[
                      minorCategoryListText,(index === selectedCategoryIndex && minorActiveCategoryListText )
                  ]}>{minor}</Text>
              </Pressable>
          ))}
      </View>


  )
}



const [likedItems, setLikedItems] = useState({});
  
const handleLikeToggle = (itemId) => {
  setLikedItems((prevLikedItems) => {
    return { ...prevLikedItems, [itemId]: !prevLikedItems[itemId] };
  });
};



  return (
    <View style={!isDarkMode?twrnc`flex w-full h-full flex-col  pt-11 relative bg-white`:twrnc`flex w-full h-full flex-col  pt-11 relative bg-white`}>
      {/** the header will consist of two iccons at the top of the screen  */}
     <View style={twrnc`flex flex-row items-center justify-between`}>
        {/** the icon for navigation backwards  */}
    <View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`}
    onPress={openDrawer}
    >
    {/** this is the view for the icon  */}
    <Icon_Encrypto name="menu" size={25}/>
</TouchableOpacity>
</View>
       {/** the icon for navigation backwards  */}
    <View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`}>
    {/** this is the view for the icon  */}
    <Icon_SimpleLineIcons name="handbag" size={25}/>
</TouchableOpacity>
</View>
     </View>


{/** now the remaining codes  this where the Hello and the welcoming on the screen is */}
<View style={twrnc`flex flex-col mx-5 mt-5`}>
  <View style={twrnc``}>
    <Text style={twrnc`text-black text-4xl `}>Hello</Text>
  </View>
  <View>
    <Text style={twrnc`text-gray-400 text-xl`}>Welcome to Laza
    </Text>
  </View>
</View>

{/** this where the search and the microphone icons will be , the search functionalities will implemented here  */}
<View style={twrnc`flex flex-row  justify-between items-center mx-5 mt-3`}>
      {/* Search Box */}
      <View style={twrnc`flex-row items-center   bg-gray-200 rounded-xl`}>
      <View style={twrnc`flex flex-row items-center justify-around px-2 h-10 w-10/12`}>
        <Icon_Ant name="search1" size={20} style={twrnc`mr-2`} />
        <TextInput
          style={twrnc`flex-1 h-8 text-base font-normal pb-2`}
          placeholder="Search..."
          underlineColorAndroid="transparent"
        />
        </View>
      </View>

      {/* Microphone Icon */}
      <TouchableOpacity style={[twrnc`h-10 w-12 rounded-xl items-center bg-gray-300`,styles.primary]}>
      <View style={twrnc`flex items-center justify-center`}>
      <MaterialIcons name="keyboard-voice" size={24} color="white" style={twrnc`mt-2`} />
      </View>
      </TouchableOpacity>
    </View>

    {/** working the adidas carousel that were showing at the top  */}
    <ListCategories/>
    {/** the mapping of the carousel  */}
    <View style={twrnc`flex-row mx-5 mt-1`}>
  <FlatList
    data={items}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={twrnc`h-14  mx-1 w-28 bg-gray-200 flex-row items-center rounded-lg justify-around`}>
        <View style={twrnc`h-9 w-9 bg-white  rounded-lg`}>
          <View style={twrnc`items-center mt-1`}>
            <Image source={item.image} resizeMode={"contain"} style={twrnc`h-7 w-7`} />
          </View>
        </View>
        <Text style={twrnc`font-medium`}>{item.text}</Text>
      </View>
    )}
  />
</View>

{/**  the next section that shows the carousel of the images  */}
<ArrivalList/>
{/** @kelvin this is where , you are supposed to work 
 * 
 * 
 * please create the cards items , you did in your codes, please do well to do by the dimensions in the figma design and use your phone expo to test okay 
 * 
 * Please communicate any issues or bugs or errors in the group so we all collaborate thank you 
 * 
 * And please go by the tailwind format, because I got alot of errors working which says, most of the tailwindcss classes you used are invalid 
 * 
  */}
    <FlatList
            className="flex-1"
            data={brand}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="flex-1 m-2 mx-3 w-1/2">
                <View className="w-full h-72 rounded-xl bg-red-500">
                  <Image
                    source={item.imageSource}
                    className="h-full w-full rounded-xl"
                  />
                  <TouchableOpacity className="absolute top-5 right-5">
                  <MaterialCommunityIcons
                  name={
                    likedItems[item.id]
                      ? "heart"
                      : "heart-outline"
                  }
                  size={24}
                  color={likedItems[item.id] ? "red" : "gray"}
                />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleScreenMovement}>
                <Text className="font-semibold text-base">{item.brandName}</Text>
                <Text className="text-base font-semibold">{item.product}</Text>
                <Text className="text-lg font-bold">{item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
</View>
  )
}

export default Homescreen;
const styles = StyleSheet.create({
  primary:{
      backgroundColor:"#9775FA"
  },
})
const minorCategoryListText = twrnc``;
const minorActiveCategoryListText = twrnc`font-bold text-lg`
