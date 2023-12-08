import React,{useState} from 'react';
import { View, Text, TouchableOpacity,Image,Dimensions,TextInput,Switch,ScrollView} from 'react-native';
import twrnc from 'tailwind-react-native-classnames';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Carousel from 'react-native-snap-carousel';
import  {PaymentCarousel}  from '../../data/carouseldata';
import { useDarkMode } from '../../context/darkmode';




const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth - 150;

const Payment = ({navigation}) => {
  {/** state management of the current item being shown  */}
  const [activeSlide, setActiveSlide] = useState(0);

  // the state management for the switch tag 
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };


// add a new card 
const addNewCard = () => {
  navigation.navigate("screen15");
}

// handle home screen 
const BackToHome=()=>{
  navigation.navigate("HomeComponents");
}

// navigate backwards
const backWardNavigation=()=>{
  navigation.navigate("screen12");
}
  {/** the items to be shown as carousel, this is an image gotten from the figma mockup  */}
  const renderItem = ({ item }) => {
    return (
      <View style={twrnc`w-72 h-52  flex  rounded-lg`}>
         <Image source={item.image} style={twrnc`w-full h-full`} resizeMode="contain" />
      </View>
    );
  };

  // creating a function for the pagination  


  // make use of the dark mode 

  const {isDarkMode} =useDarkMode();



  return (
<View style={twrnc`flex flex-1 w-full h-full flex-col pt-10 relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Top View */}
      <View style={twrnc`mx-5 flex items-center flex-row justify-between `}>
        <View>
        <TouchableOpacity onPress={backWardNavigation} className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={isDarkMode ? 'white' : 'black'}/>
          </TouchableOpacity>
        </View>
        <View className="mr-5">
        <Text style={twrnc`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Payment</Text>
        </View>
        <View></View>
      </View>

{/** the carousel section  */}
<View className="mt-2">
<Carousel
        data={PaymentCarousel}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        layout="default"
        loop={true}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        contentContainerCustomStyle={twrnc`flex-row  h-full items-center justify-center`}
        slideStyle={twrnc`mx-4`}
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay={true}
        autoplayInterval={10000}
      />
  </View>
{/** the button beneath the carousel  */}
  <View className=" mt-1 mx-3">
  <TouchableOpacity className="flex flex-row bg-purple-100 border border-purple-600 h-14 items-center justify-center rounded-md" onPress={addNewCard}>
    <AntDesign name="plussquareo" size={16} color="white" style={twrnc`mr-2  text-purple-600 `} />
    <Text style={twrnc`text-white text-base font-medium  text-purple-600 `}>Add a new Card</Text>
    </TouchableOpacity>
  </View>

  {/** the sections  involving the text boxes and the rest  */}
  {/** the first one for the card owner , more editin will performed on this when we are handling the POST method in the forms  */}
  <View style={twrnc`mt-2 flex items-start mx-5 flex-col justify-between`}>
  <Text className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Owner</Text>
  <TextInput
    className={`h-12 w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} rounded-lg pl-2 text-sm`}
    placeholder="Mrh Raju"
    placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
    // other props...
/>

            </View>

  

   {/** the sections  involving the text boxes and the rest, the second for the user's card number*/}
  
   <View style={twrnc`mt-2 flex items-start mx-5 flex-col justify-between`}>
   <Text className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Number</Text>
   <TextInput
    className={`h-12 w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} rounded-lg pl-2 text-sm`}
    placeholder="22423324 3423432"
    placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
    // other props...
/>

            </View>


  

    {/* Country and City Inputs on the Same Line */}
    <View className="flex mx-5 mt-2 flex-row items-center justify-between">
                <View className="flex flex-col items-start justify-center">
                <Text className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>EXP</Text>
                <TextInput
    placeholder="24/24"
    className={`h-14 w-44 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} rounded-lg pl-3 text-base`}
    placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
    // other props...
/>

                </View>
                <View>
                <Text className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>CVV</Text>
                <TextInput
    placeholder="7763"
    className={`h-14 w-44 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} rounded-lg pl-3 text-base`}
    placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
    // other props...
/>

                </View>
  </View>



   {/* Where the switch is located  */}
   <View className="mt-2 flex items-start mx-5 flex-row justify-between">
   <Text className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Save Card info</Text>
                <Switch
                value={isSwitchOn}
                onValueChange={toggleSwitch}
                trackColor={{ false: "#767577", true: "#4caf50" }}
                ios_backgroundColor="gray"
                />
            </View>









  {/** I want the something at the bottom of screen , it will remain the bottom of the screen and I have a text of Submit review meaning , it is a button  I want it to remain at the bottom of the screen no matter the screen size */}
  <View style={twrnc`flex-1 justify-center items-center top-full absolute  w-full h-16 bg-purple-500 bottom-0 pb-4`}>
        <TouchableOpacity className="flex items-center justify-center"
        onPress={BackToHome}
        >
          <Text style={twrnc`text-white text-lg font-medium`}>Save Cards</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
};

export default Payment;
