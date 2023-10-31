import {View,TouchableOpacity,Text,Image,TextInput,Alert } from 'react-native'
import React,{useState,useEffect } from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"

const NewPassword = ({navigation}) => {

    const [inputs,setInputs]=useState({});


    const handleChange = (name, value) => {
        setInputs(values => ({ ...values, [name]: value }));
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs,null,2));
  }
  return (
    <View style={twrnc`flex w-full h-full flex-col mt-11 relative`}>
       {/** the icon for navigation backwards  */}
       <View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`}>
    {/** this is the view for the icon  */}
    <Icon_Ant name="arrowleft" size={25}/>
</TouchableOpacity>
</View>


{/** the forgot password headings  */}
<View style={twrnc`flex items-center justify-center mt-2`}>
    <Text style={twrnc`text-3xl font-semibold`}>New Password</Text>
</View>


{/** I change the button and make it a text input field where the first field will be username , the next one will password and the last field will email add  */}
<View style={twrnc`mt-48 mx-5`}>
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}>Password</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput
    style={twrnc`
    h-12 w-full pt-5
    `}
    placeholder="Enter your new password"
    underlineColorAndroid="transparent"
    borderBottomWidth={1} // For iOS
    borderBottomColor="gray" //
    value={inputs.password} 
    onChange={handleChange}

    />
    </View>
    </View>
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}> Confirm password</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput
    style={twrnc`
    h-12 w-full pt-5
    `}
    placeholder="Confirm Password"
    underlineColorAndroid="transparent"
    borderBottomWidth={1} // For iOS
    borderBottomColor="gray" //
    value={inputs.confirmpasswords} 
    onChange={handleChange}

    />
    </View>
    </View>
</View>


{/* bottom side of the page */}
<View style={twrnc`mt-44 flex items-center justify-center mx-5`}>
        <Text style={twrnc`text-center text-gray-500`}>
            Please write your new password
        </Text>
      </View>




{/** this is the last button that will stack to the button of the screen and will  */}
<View style={twrnc`flex items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-28 flex`}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={handleSubmit}>
          <Text style={twrnc`text-white text-center font-semibold`}>Reset Password </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NewPassword
