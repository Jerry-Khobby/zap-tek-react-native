import {Text, View,TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React,{useState} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"
import Icon_Fontiso from "react-native-vector-icons/FontAwesome";

const SignUp = () => {
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

<View style={twrnc`flex items-center justify-center mt-2`}>
    <Text style={twrnc`text-3xl font-semibold`}>Sign Up</Text>
</View>

{/** I change the button and make it a text input field where the first field will be username , the next one will password and the last field will email add  */}
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
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}>Email Address</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput
    style={twrnc`
    h-12 w-full pt-5
    `}
    placeholder="Enter your username"
    underlineColorAndroid="transparent"
    borderBottomWidth={1} // For iOS
    borderBottomColor="gray" //
    value={inputs.email} 
    onChange={handleChange}

    />
    </View>
    </View>
</View>




{/** the remember me and the section for the toggler for to keep the user remembered  */}
<View style={twrnc`mt-8 flex items-center justify-between flex-row mx-5`}>
        <Text style={twrnc`font-medium text-base`}>Remember me</Text>
        <TouchableOpacity onPress={handleToggle}>
          <Icon_Fontiso name={isToggled ? 'toggle-on' : 'toggle-off'} color={isToggled ? 'green' : 'gray'} size={32} />
        </TouchableOpacity>
      </View>







{/** this is the last button that will stack to the button of the screen and will  */}
<View style={twrnc`flex items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-28 flex`}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={handleSubmit}>
          <Text style={twrnc`text-white text-center font-semibold`}>Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp;
