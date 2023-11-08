import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import React,{useState,useEffect} from "react";
import twrnc from "tailwind-react-native-classnames";
import Icon_Ant from "react-native-vector-icons/AntDesign";
import Icon_EvilIcons from "react-native-vector-icons/EvilIcons";

import { useDarkMode } from "../../context/darkmode";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NativeModules } from 'react-native';
const { RNTwitterSignIn } = NativeModules;






const LoginCredentials = ({ navigation }) => {
  // please your margin top should mt-11 and your left and right must be mx-5

  // handle the going back on the screen

  const { isDarkMode } = useDarkMode();

  const handleBackWardNavigation = () => {
    navigation.navigate("screenOne");
  };

  const handleSignInNavigation = () => {
    navigation.navigate("screenFour");
  };

  const handleCreateAccountNavigation = () => {
    navigation.navigate("screenThree");
  };


 useEffect(() => {
    GoogleSignin.configure({
      webClientId: '79608993528-tra5anesm6ioiffjrdge7kqn253q69ke.apps.googleusercontent.com', // Get this from Firebase console
    });
  }, []);

// function to handle the login with google 
const handleGoogleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const { idToken } = userInfo;
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);

    navigation.navigate('homescreen'); // Replace 'Home' with the actual name of your home screen component.
  } catch (error) {
    console.error(error);
  }
}; 


// signing with twitter here
RNTwitterSignIn.init('TlLLxDQ1cVPAfFnCqG7HU6nza', 'Gs0Im9SKFLqLJy5Q8kFIO4yKpjADIGwxzc5L6hHf6YuB4gD6jI').then(() =>
  console.log('Twitter SDK initialized')
);


async function onTwitterButtonPress() {
  try {
    // Perform the login request
    const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();

    // Create a Twitter credential with the tokens
    const twitterCredential = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);

    // Sign-in the user with the credential
    await auth().signInWithCredential(twitterCredential);

    console.log('Signed in with Twitter!');
  } catch (error) {
    console.error('Twitter sign-in error:', error);
  }
} 









  return (
    <SafeAreaView
      style={twrnc`flex flex-1 bg-${!isDarkMode ? "white" : "black"}`}
    >
      <View style={twrnc`flex w-full h-full flex-col mt-11 relative `}>
        <View style={twrnc`mx-5`}>
          <TouchableOpacity
            style={twrnc`h-11 w-11 bg-gray-${
              !isDarkMode ? "200" : "700"
            } items-center justify-center  rounded-full`}
            onPress={handleBackWardNavigation}
          >
            {/** this is the view for the icon  */}
            <Icon_Ant
              name="arrowleft"
              size={25}
              color={`${!isDarkMode ? "black" : "white"}`}
            />
          </TouchableOpacity>
        </View>
        {/** the heading, which is left Get started  */}
        <View style={twrnc`flex items-center justify-center mt-2`}>
          <Text
            style={twrnc`text-3xl font-semibold text-${
              !isDarkMode ? "black" : "white"
            }`}
          >
            Let's Get Started{" "}
          </Text>
        </View>
        {/** Implementing the Ui for the buttons  */}
        <View style={twrnc`flex flex-col items-center mt-44 mx-5`}>
          <View style={twrnc`mb-2`}>
            <TouchableOpacity
              style={twrnc`bg-blue-600  rounded-md h-12 w-96 flex items-center justify-center flex-row`}
            >
              <Icon_EvilIcons name="sc-facebook" color="white" size={24} />
              <Text style={twrnc`text-white text-center font-semibold ml-3`}>
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={twrnc`mb-2`}>
            <TouchableOpacity
              style={twrnc`bg-blue-400 rounded-md h-12 w-96 flex items-center justify-center flex-row`}
              onPress={() => onTwitterButtonPress()}
            >
              <Icon_Ant name="twitter" color="white" size={20} />
              <Text style={twrnc`text-white text-center font-semibold ml-4`}>
                Twitter
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={twrnc`bg-red-600  rounded-md h-12 w-96 flex items-center justify-center flex-row`}
              onPress={handleGoogleSignIn}
            >
              <Icon_Ant name="google" color="white" size={20} />
              <Text style={twrnc`text-white text-center font-semibold ml-4`}>
                Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/** bottom side of the page  */}

        <View style={twrnc` flex items-center justify-center`}>
          <Text style={twrnc`mt-40 text-gray-500`}>
            Already have an account?{" "}
            <TouchableOpacity onPress={handleSignInNavigation}>
              <Text
                style={twrnc`text-${
                  !isDarkMode ? "black" : "white"
                } font-semibold `}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/** I want to create a button that will take the full width of the screen but remain at the bottom
         * with a violet background and has a link text create an account
         */}
        <View
          style={twrnc`items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-24 flex mb-0`}
        >
          <TouchableOpacity
            style={twrnc`flex items-center justify-center pt-5`}
            onPress={handleCreateAccountNavigation}
          >
            <Text style={twrnc`text-white text-center font-semibold`}>
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginCredentials;