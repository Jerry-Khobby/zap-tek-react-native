import {View,TouchableOpacity,Text,SafeAreaView } from 'react-native'
import React from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"
import Icon_EvilIcons from "react-native-vector-icons/EvilIcons";

const LoginCredentials= ({navigation}) => {
// please your margin top should mt-11 and your left and right must be mx-5 

// handle the going back on the screen 

const handleBackWardNavigation=()=>{
  navigation.navigate("screenOne");
}

const handleSignInNavigation=()=>{
  navigation.navigate("screenFour");
}

const handleCreateAccountNavigation=()=>{
  navigation.navigate("screenThree");
}

  return (
<SafeAreaView style={twrnc`flex flex-1`}>
    <View style={twrnc`flex w-full h-full flex-col mt-11 relative`}>
<View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`} onPress={handleBackWardNavigation}>
    {/** this is the view for the icon  */}
    <Icon_Ant name="arrowleft" size={25}/>
</TouchableOpacity>
</View>
{/** the heading, which is left Get started  */}
<View style={twrnc`flex items-center justify-center mt-2`}>
    <Text style={twrnc`text-3xl font-semibold`}>Let's Get Started </Text>
</View>
{/** Implementing the Ui for the buttons  */}
<View style={twrnc`flex flex-col items-center mt-44 mx-5`}>
    <View style={twrnc`mb-2`}>
    <TouchableOpacity  style={twrnc`bg-blue-600  rounded-md h-12 w-96 flex items-center justify-center flex-row`}>
        <Icon_EvilIcons name="sc-facebook" color="white" size={24}/>
          <Text style={twrnc`text-white text-center font-semibold ml-3`}>Facebook</Text>
        </TouchableOpacity>
    </View>
    <View style={twrnc`mb-2`}>
    <TouchableOpacity  style={twrnc`bg-blue-400 rounded-md h-12 w-96 flex items-center justify-center flex-row`}>
        <Icon_Ant name="twitter" color="white" size={20}/>
          <Text style={twrnc`text-white text-center font-semibold ml-4`}>Twitter</Text>
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity  style={twrnc`bg-red-600  rounded-md h-12 w-96 flex items-center justify-center flex-row`}>
        <Icon_Ant name="google" color="white" size={20}/>
          <Text style={twrnc`text-white text-center font-semibold ml-4`}>Google</Text>
        </TouchableOpacity>
    </View>
</View>

{/** bottom side of the page  */}

<View style={twrnc` flex items-center justify-center`}>
      <Text style={twrnc`mt-40`}>
        Already have an account?{' '}
        <TouchableOpacity onPress={handleSignInNavigation}>
          <Text style={twrnc`text-blue-500 underline `}>Sign in</Text>
        </TouchableOpacity>
      </Text>
    </View>


    {/** I want to create a button that will take the full width of the screen but remain at the bottom 
     * with a violet background and has a link text create an account 
      */}
     <View style={twrnc`items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-24 flex mb-0`}>
        <TouchableOpacity style={twrnc`flex items-center justify-center pt-5`} onPress={handleCreateAccountNavigation}>
          <Text style={twrnc`text-white text-center font-semibold`}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default LoginCredentials;

