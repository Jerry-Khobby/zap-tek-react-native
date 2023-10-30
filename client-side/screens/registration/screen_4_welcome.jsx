import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign";
import Icon_Fontiso from "react-native-vector-icons/FontAwesome";
import { auth } from './firebase';

const Login = ({ navigation }) => {
  //states for email and password, initially seeting the array to an empty one
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 //function to handle the login press, an authentication with firebase to allow user sign in with email and password
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Signed in with : ", user.email);
        navigation.navigate('homescreen')
      })
      .catch(error => alert(error.message));
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  //I added this function to help user go back to sign up screen incase user does not have an account and needs to create one
  const handleBackWardNavigation = () => {
    navigation.navigate('screenThree')
  }

  //the returning JSX file
  return (
    <View style={twrnc`flex w-full h-full flex-col mt-11 relative`}>
      {/** this is the view for the icon */}
      <View style={twrnc`mx-5`}>
        <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`} onPress={handleBackWardNavigation}>
          {/** this is the view for the icon */}
          <Icon_Ant name="arrowleft" size={25} />
        </TouchableOpacity>
      </View>
      {/** the heading sections */}
      <View style={twrnc`flex items-center justify-center mt-2`}>
        <Text style={twrnc`text-3xl font-semibold`}>Welcome</Text>
        <Text style={twrnc`font-normal text-base text-gray-400`}>Please enter your data to continue</Text>
      </View>

      {/** the forms to be handled */}
      <View style={twrnc`mt-32 mx-5`}>
        <View style={twrnc`mb-2 flex flex-col  justify-between`}>
          <Text style={twrnc`font-normal text-base text-gray-600`}>Username</Text>
          <View style={twrnc`mb-3 -mt-4`}>
            <TextInput
              style={twrnc`
              h-12 w-full pt-5
              `}
              placeholder="Enter your username eg.Richard@gmail.com"
              underlineColorAndroid="transparent"
              borderBottomWidth={1} // For iOS
              borderBottomColor="gray" 
              value={email}
              onChangeText={text => setEmail(text)}
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
              placeholder="Enter your password"
              underlineColorAndroid="transparent"
              borderBottomWidth={1} // For iOS
              borderBottomColor="gray" 
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>
        </View>
      </View>

      {/** the remember me and the section for the toggle button */}
      <View style={twrnc`mt-8 flex items-center justify-between flex-row mx-5`}>
        <Text style={twrnc`font-medium text-base`}>Remember me</Text>
        <TouchableOpacity onPress={handleToggle}>
          <Icon_Fontiso name={isToggled ? 'toggle-on' : 'toggle-off'} color={isToggled ? 'green' : 'gray'} size={32} />
        </TouchableOpacity>
      </View>

      {/** bottom  of the page */}
      <View style={twrnc`mt-32 flex items-center justify-center mx-5`}>
        <Text style={twrnc`text-center`}>
          By connecting your account, confirm that you agree{'\n'}
          <Text style={twrnc`font-bold mt-2`}>with our Terms and Conditions</Text>
        </Text>
      </View>

      {/** the button below that will allow user  to login */}
      <View style={twrnc`flex items-center absolute bottom-0 mt-auto bg-purple-500 w-full h-24 flex`}>
        <TouchableOpacity style={twrnc`w-full h-full flex items-center justify-center pt-5`} onPress={handleLogin}>
          <Text style={twrnc`flex items-center justify-center mb-auto text-white text-center font-semibold`}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;
