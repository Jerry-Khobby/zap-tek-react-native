import {Text, View,TouchableOpacity,TextInput,SafeAreaView,ActivityIndicator,Alert} from 'react-native'
import React,{useState} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"
import Icon_Fontiso from "react-native-vector-icons/FontAwesome";
import { auth } from  "./firebase";
import { useDarkMode} from "../../context/darkmode";

const Welcome = ({navigation}) => {


  const [loading, setLoading] = useState(false); // State to track loading status

    const [isToggled,setIsToggled]=useState(false);
    const handleToggle=()=>{
        setIsToggled(!isToggled);
    }


    const [inputs,setInputs]=useState({
      email:'',
      password:'',
    });

    
    const handleChange = (name, value) => {
        setInputs(values => ({ ...values, [name]: value }));
      };
      const { email, password } = inputs;


      const { isDarkMode,toggleLoginMode } = useDarkMode();

      const handleSubmit = () => {
        setLoading(true);
        if (email && password) {
          auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              setLoading(false);
              navigation.replace('homescreen');
              toggleLoginMode();
            })
            .catch((error) => {
              setLoading(false);
              console.error('Firebase Authentication Error:', error);
              switch (error.code) {
                case 'auth/invalid-email':
                  Alert.alert('Error', 'Invalid email address format.');
                  break;
                case 'auth/user-not-found':
                  Alert.alert('Error', 'No user found with this email address.');
                  break;
                case 'auth/wrong-password':
                  Alert.alert('Error', 'Incorrect password. Please try again.');
                  break;
                default:
                  Alert.alert('Error', 'Authentication failed. Please check your credentials and try again.');
                  break;
              }
            });
            
        }
      };
      

  // functions for the routings or navigations 

  const handleForgotPasswordNavigation=()=>{
    navigation.navigate("screenFive")
  }

  const handleBackWardNavigation=()=>{
    navigation.navigate("screenTwo");
  }



  return (
    <SafeAreaView
    style={twrnc`flex-1 flex bg-${!isDarkMode ? "white" : "black"}`}
  >
    <View style={twrnc`flex w-full h-full flex-col mt-11 relative `}>
         {/** this is the view for the icon  */}
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
{/** the heading sections l */}
<View style={twrnc`flex items-center justify-center mt-2`}>
<Text style={twrnc`text-3xl font-semibold text-${!isDarkMode ? "black" : "white"}`}> Welcome</Text>
    <Text style={twrnc`font-normal text-base text-gray-400`}>Please enter your data to continue</Text>
</View>

{/** the forms to be handled  */}
<View style={twrnc`mt-32 mx-5`}>
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}>Email</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput style={twrnc`h-12 w-full pt-5 text-${!isDarkMode ? "black" : "white"}`}
                placeholder="Enter your email address"
                underlineColorAndroid="transparent"
                borderBottomWidth={1} // For iOS
                borderBottomColor="gray" //
                value={inputs.email}
                onChangeText={(text) => handleChange("email", text)}
/>
    </View>
    </View>
    {loading && (
        <View style={twrnc`...absolute inset-0 items-center justify-center flex-1 flex`}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-600`}>Password</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput style={twrnc`h-12 w-full pt-5 text-${
                  !isDarkMode ? "black" : "white"
                }`}
                placeholder="Enter your password"
                underlineColorAndroid="transparent"
                borderBottomWidth={1} // For iOS
                borderBottomColor="gray" //
                value={inputs.password}
                onChangeText={(text) => handleChange("password", text)}
              />

    </View>
    </View>
</View>

<View style={twrnc`mx-5 flex  items-end justify-center`}>
    <TouchableOpacity onPress={handleForgotPasswordNavigation}>
    <Text style={twrnc`text-red-500 font-normal text-base`}>Forgot Password?</Text>
    </TouchableOpacity>
</View>


{/** the remember me and the section for the toggler for to keep the user remembered  */}
<View style={twrnc`mt-8 flex items-center justify-between flex-row mx-5`}>
<Text
            style={twrnc`font-medium text-base text-${
              !isDarkMode ? "black" : "white"
            }`}
          >
            Remember me
          </Text>
          <TouchableOpacity onPress={handleToggle}>
            <Icon_Fontiso
              name={isToggled ? "toggle-on" : "toggle-off"}
              color={isToggled ? "green" : "gray"}
              size={32}
            />
          </TouchableOpacity>

      </View>






{/** bottom side of the page  */}

<View style={twrnc`mt-32 flex items-center justify-center mx-5`}>
  <Text style={twrnc`text-center ${!isDarkMode?"black":"white"}`}>
    By connecting your account, confirm that you agree{'\n'}
    <Text
              style={twrnc`font-bold mt-2 text-${
                !isDarkMode ? "black" : "white"
              }`}
            >
              with our Terms and Conditions
            </Text>
  </Text>
</View>

{/** the button below that will allow you to login  */}
<View style={twrnc`flex items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-24 flex`}>
        <TouchableOpacity style={twrnc`w-full h-full flex items-center justify-center pt-5`} onPress={handleSubmit}>
          <Text style={twrnc` flex items-center justify-center mb-auto text-white text-center font-semibold`}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Welcome
