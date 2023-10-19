import {Text, View,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"
import Icon_Fontiso from "react-native-vector-icons/FontAwesome";

const Welcome = ({navigation}) => {


    const [isToggled,setIsToggled]=useState(false);
    const handleToggle=()=>{
        setIsToggled(!isToggled);
    }


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
         {/** this is the view for the icon  */}
      <View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`}>
    {/** this is the view for the icon  */}
    <Icon_Ant name="arrowleft" size={25}/>
</TouchableOpacity>
</View>
{/** the heading sections l */}
<View style={twrnc`flex items-center justify-center mt-2`}>
    <Text style={twrnc`text-3xl font-semibold`}>Welcome</Text>
    <Text style={twrnc`font-normal text-base text-gray-400`}>Please enter your data to continue</Text>
</View>

{/** the forms to be handled  */}
<View style={twrnc`mt-32 mx-5`}>
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}>Username</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput
    style={twrnc`
    h-12 w-full pt-5
    `}
    placeholder="Enter your username"
    underlineColorAndroid="transparent"
    borderBottomWidth={1} // For iOS
    borderBottomColor="gray" //
    value={inputs.username} 
    onChange={handleChange}

    />
    </View>
    </View>
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}>Password</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput
    style={twrnc`
    h-12 w-full pt-5
    `}
    placeholder="Enter your username"
    underlineColorAndroid="transparent"
    borderBottomWidth={1} // For iOS
    borderBottomColor="gray" //
    value={inputs.password} 
    onChange={handleChange}

    />
    </View>
    </View>
</View>

<View style={twrnc`mx-5 flex  items-end justify-center`}>
    <TouchableOpacity>
    <Text style={twrnc`text-red-500 font-normal text-base`}>Forgot Password?</Text>
    </TouchableOpacity>
</View>


{/** the remember me and the section for the toggler for to keep the user remembered  */}
<View style={twrnc`mt-8 flex items-center justify-between flex-row mx-5`}>
        <Text style={twrnc`font-medium text-base`}>Remember me</Text>
        <TouchableOpacity onPress={handleToggle}>
          <Icon_Fontiso name={isToggled ? 'toggle-on' : 'toggle-off'} color={isToggled ? 'green' : 'gray'} size={32} />
        </TouchableOpacity>
      </View>






{/** bottom side of the page  */}

<View style={twrnc`mt-32 flex items-center justify-center mx-5`}>
  <Text style={twrnc`text-center`}>
    By connecting your account, confirm that you agree{'\n'}
    <Text style={twrnc`font-bold mt-2`}>with our Terms and Conditions</Text>
  </Text>
</View>

{/** the button below that will allow you to login  */}
<View style={twrnc`flex items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-28 flex`}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={handleSubmit}>
          <Text style={twrnc`text-white text-center font-semibold`}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
