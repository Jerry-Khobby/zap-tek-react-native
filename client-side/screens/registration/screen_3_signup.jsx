import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign";
import Icon_Fontiso from "react-native-vector-icons/FontAwesome";
import {auth} from "./firebase"

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    let identifier = email; // Use the email state as the identifier

    // Check if the identifier is an email address
    if (identifier.includes("@")) {
      // This input appears to be an email, so use it as an email for registration
      auth
        .createUserWithEmailAndPassword(identifier, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log("Signed up with : ", user.email);
        })
        .catch(error => alert(error.message));
    } else {
      // This input appears to be a username, so use it as a username for registration
      
      registerWithUsername(identifier);
    }
  };

<<<<<<< HEAD
    const [inputs,setInputs]=useState({
      username: '',
      password: '',
      email: ''
    });

    
const handleChange = (name,value) => {
        setInputs(values => ({ ...values, [name]: value }));
      };

      const handleSubmit = () => {
        const { email, password, username } = inputs;
      
        if (isValidEmail(email)) {
          auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              // Set the user's display name (username)
              user.updateProfile({
                displayName: username,
              })
              .then(() => {
                // Signed in and username set successfully
                console.log('User account created & signed in with username:', user);
                // Call your createWithSignIn function here if needed
              })
              .catch((error) => {
                console.error('Error setting username:', error);
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error('Error creating user:', errorCode, errorMessage);
            });
        } else {
          console.error('Invalid email address. Please provide a valid email.');
        }
      };
      


  
      function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }
      
      
=======
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  }
>>>>>>> e7d1ec6c2546f41d4140bed8e5739293981853a1

  const handleBackWardNavigation = () => {
    navigation.navigate("screenTwo");
  }
// setting up firebase in my codes 



  return (
<<<<<<< HEAD
    <View style={twrnc`flex w-full h-full flex-col pt-11 relative bg-white`}>
      {/** this is the view for the icon  */}
<View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`} onPress={handleBackWardNavigation}>
    {/** this is the view for the icon  */}
    <Icon_Ant name="arrowleft" size={25}/>
</TouchableOpacity>
</View>
=======
    <View style={twrnc`flex w-full h-full flex-col mt-11 relative`}>
      {/** this is the view for the icon */}
      <View style={twrnc`mx-5`}>
        <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`} onPress={handleBackWardNavigation}>
          {/** this is the view for the icon */}
          <Icon_Ant name="arrowleft" size={25} />
        </TouchableOpacity>
      </View>
      {/** the heading sections l */}
      <View style={twrnc`flex items-center justify-center mt-2`}>
        <Text style={twrnc`text-3xl font-semibold`}>Sign Up</Text>
      </View>
>>>>>>> e7d1ec6c2546f41d4140bed8e5739293981853a1

      {/** the forms to be handled */}
      <View style={twrnc`mt-32 mx-5`}>
        <View style={twrnc`mb-2 flex flex-col  justify-between`}>
          <Text style={twrnc`font-normal text-base text-gray-600`}>Username(email)</Text>
          <View style={twrnc`mb-3 -mt-4`}>
            <TextInput
              style={twrnc`
              h-12 w-full pt-5
              `}
              placeholder="Enter your username(email)"
              underlineColorAndroid="transparent"
              borderBottomWidth={1}
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
              borderBottomWidth={1}
              borderBottomColor="gray"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>
        </View>
      </View>

<<<<<<< HEAD
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
    onChangeText={(text) => handleChange("username", text)}

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
    onChangeText={(text) => handleChange("password", text)}
    type="password"

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
    onChangeText={(text) => handleChange("email", text)}
    type="email"

    />
    </View>
    </View>
</View>




{/** the remember me and the section for the toggler for to keep the user remembered  */}
<View style={twrnc`mt-8 flex items-center justify-between flex-row mx-5`}>
=======
      {/** the remember me and the section for the toggler to keep the user remembered */}
      <View style={twrnc`mt-8 flex items-center justify-between flex-row mx-5`}>
>>>>>>> e7d1ec6c2546f41d4140bed8e5739293981853a1
        <Text style={twrnc`font-medium text-base`}>Remember me</Text>
        <TouchableOpacity onPress={handleToggle}>
          <Icon_Fontiso name={isToggled ? 'toggle-on' : 'toggle-off'} color={isToggled ? 'green' : 'gray'} size={32} />
        </TouchableOpacity>
      </View>

<<<<<<< HEAD






{/** this is the last button that will stack to the button of the screen and will  */}
<View style={twrnc`flex items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-14 flex`}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={handleSubmit}>
=======
      {/** this is the last button that will stack to the button of the screen and will  */}
      <View style={twrnc`flex items-center absolute bottom-0 mt-auto bg-purple-500 w-full h-28 flex`}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={handleSignUp}>
>>>>>>> e7d1ec6c2546f41d4140bed8e5739293981853a1
          <Text style={twrnc`text-white text-center font-semibold`}>Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp;
