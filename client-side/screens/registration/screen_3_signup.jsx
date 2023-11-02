import {Text, View,TouchableOpacity,TextInput, Alert,ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"
import Icon_Fontiso from "react-native-vector-icons/FontAwesome";
import {auth,firebase} from "./firebase"

const SignUp = ({navigation}) => {
    const [isToggled,setIsToggled]=useState(false);
    const [loading, setLoading] = useState(false); // State to track loading status
    const handleToggle=()=>{
        setIsToggled(!isToggled);
    }

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
        setLoading(true);
      
        if (isValidEmail(email)) {
          // Check if the email already exists in the database
          firebase.database().ref('users').orderByChild('email').equalTo(email).once('value', (snapshot) => {
            if (snapshot.exists()) {
              // Email already exists, show an error message
              Alert.alert('Error', 'This email address is already in use.');
              setLoading(false);
            } else {
              // Email does not exist, create a new user
              auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  user.updateProfile({
                    displayName: username,
                  })
                    .then(() => {
                      // Save user data in the database
                      firebase.database().ref('users/' + user.uid).set({
                        username: username,
                        email: email,
                        password: password
                      });
                      console.log('User account created & signed in with username:', user);
                      setLoading(false);
                      navigation.replace('screenFour');
                    })
                    .catch((error) => {
                      console.error('Error setting username:', error);
                      setLoading(false);
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error('Error creating user:', errorCode, errorMessage);
                  Alert.alert('Error', errorMessage);
                  setLoading(false);
                });
            }
          });
        } else {
          console.error('Invalid email address. Please provide a valid email.');
          setLoading(false);
        }
      };
      
      


  
      function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }
      
      


  //functions that will handle the navigations

  const handleBackWardNavigation=()=>{
    navigation.navigate("screenTwo");
  }
// setting up firebase in my codes 




  return (
    <View style={twrnc`flex w-full h-full flex-col pt-11 relative bg-white`}>
      {/** this is the view for the icon  */}
<View style={twrnc`mx-5`}>
    <TouchableOpacity style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full`} onPress={handleBackWardNavigation}>
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
    <Text style={twrnc`font-normal text-base text-gray-800`}>Username</Text>
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
    <Text style={twrnc`font-normal text-base text-gray-800`}>Password</Text>
    <View style={twrnc`mb-3 -mt-4`}>
    <TextInput
    style={twrnc`
    h-12 w-full pt-5
    `}
    placeholder="Enter your password"
    underlineColorAndroid="transparent"
    borderBottomWidth={1} // For iOS
    borderBottomColor="gray" //
    value={inputs.password} 
    onChangeText={(text) => handleChange("password", text)}
    type="password"

    />
    </View>
    </View>
    {loading && (
        <View style={twrnc`...absolute inset-0 items-center justify-center flex-1 flex`}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    <View style={twrnc`mb-2 flex flex-col  justify-between`}>
    <Text style={twrnc`font-normal text-base text-gray-800`}>Email Address</Text>
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
        <Text style={twrnc`font-medium text-base`}>Remember me</Text>
        <TouchableOpacity onPress={handleToggle}>
          <Icon_Fontiso name={isToggled ? 'toggle-on' : 'toggle-off'} color={isToggled ? 'green' : 'gray'} size={32} />
        </TouchableOpacity>
      </View>







{/** this is the last button that will stack to the button of the screen and will  */}
<View style={twrnc`flex items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-14 flex`}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={handleSubmit}>
          <Text style={twrnc`text-white text-center font-semibold`}>Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp;
