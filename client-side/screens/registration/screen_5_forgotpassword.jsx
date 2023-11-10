import {View,TouchableOpacity,Text,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import { useDarkMode } from "../../context/darkmode";
import Icon_Ant from "react-native-vector-icons/AntDesign"
import {firebase} from "./firebase";

const ForgotPassword = ({navigation}) => {

  // handle the navigation backwards 
  const handleNavigationBackWard=()=>{
    navigation.navigate("screenFour");
  }

    const [inputs,setInputs]=useState({
      email:''
    });

    
    const handleChange = (name, value) => {
        setInputs(values => ({ ...values, [name]: value }));
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs,null,2));
  }

  const { isDarkMode } = useDarkMode();




const forgottenPassword = ()=>{
  const {email}=inputs;
  if(isValidEmail(email)){
firebase.auth().sendPasswordResetEmail(email)
.then(()=>{
  alert("reset email sent to "+email);
})
.catch(function(e){
  console.log(e);
})
  }
}




// function to check the email address validity
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


  return (
    <View style={twrnc`flex w-full h-full flex-col pt-11 relative bg-${
      !isDarkMode ? "white" : "black"
    }`}
  >
    
    {/** the icon for navigation backwards  */}
    <View style={twrnc`mx-5`}>
    <TouchableOpacity
          style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full bg-gray-${
            !isDarkMode ? "200" : "700"
          }`}
          onPress={handleNavigationBackWard}
        >
          {/** this is the view for the icon  */}
          <Icon_Ant
            name="arrowleft"
            size={25}
            color={`${!isDarkMode ? "black" : "white"}`}
          />
        </TouchableOpacity>
</View>
{/** the forgot password headings  */}
<View style={twrnc`flex items-center justify-center mt-2`}>
<Text style={twrnc`text-3xl font-semibold text-${
            !isDarkMode ? "black" : "white"
          }`}
        >
          Forgot Password
        </Text>
</View>

{/** the image below the heading tag  */}
<View style={twrnc`flex items-center justify-center mx-5`}>
<Image source={require("../../assets/IMG.png")}/>
</View>

{/** the email address  */}
{/** the forms to be handled  */}
<View style={twrnc`mt-14 mx-5`}>
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}>Email</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput  style={twrnc`h-12 w-full pt-5 text-${!isDarkMode ? "black" : "white"}`}
              placeholder="Please enter your valid email address"
              underlineColorAndroid="transparent"
              borderBottomWidth={1} // For iOS
              borderBottomColor="gray" //
              value={inputs.email}
              onChangeText={(text) => handleChange("email", text)}
            />
    </View>
    </View>
</View>



{/** bottom side of the page  */}

<View style={twrnc`mt-28 flex items-center justify-center mx-5`}>
  <Text style={twrnc`text-center text-gray-500`}>
    Please write your email to receive a {'\n'}
    <Text style={twrnc` mt-2`}>confirmation code to set a new password </Text>
  </Text>
</View>

{/** the button below that will allow you to login  */}
<View style={twrnc`flex items-center  mb-0 absolute bottom-0  bg-purple-500 w-full h-14 flex`}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={forgottenPassword}>
          <Text style={twrnc`text-white text-center font-semibold`}>Confirm Mail </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}










export default ForgotPassword;

