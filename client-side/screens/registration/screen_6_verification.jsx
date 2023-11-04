import {View,TouchableOpacity,Text,Image,TextInput,Alert } from 'react-native'
import React,{useState,useEffect } from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"
import { useDarkMode } from "../../context/darkmode";

const Verification = ({navigation}) => {
    const [pins,setPins]=useState(['','','','']);

    // mapping through the boxes onces the a digit is being entered , it automatically moves to the next box 
    const inputRefs = Array(4).fill(0).map((_, index) => React.createRef());


// the function for the handling the onchange of the pin boxes 
    const handlePinChange = (index, value) => {
        const updatedPins = [...pins];
        updatedPins[index] = value;
        setPins(updatedPins);

        // Move cursor to the next input field
    if (value.length === 1 && index < 3) {
        inputRefs[index + 1].current.focus();
      }
  
      };


// Function to handle pin submission
  const handleSubmit = () => {
    const pinCode = pins.join(''); // Concatenate the pins into a single string
    // You can perform your logic here, like sending the pinCode to the server for verification
    Alert.alert('Submitted Pin Code', pinCode); // For demonstration purposes, displaying an alert
  };



  // creating a function for the timer seconds , so that it will counting from 15s downwards 
  const [timer, setTimer] = useState(15); // Initial timer value in seconds


  useEffect(() => {
    // Start the countdown timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clear the interval and show an alert when the timer reaches 0
    if (timer === 0) {
      clearInterval(interval);
      Alert.alert('Time Expired', 'Resend confirmation code.');
      // You can add logic to handle resending the confirmation code here
    }

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  // But once the handleSubmit is clicked again , the timer must start afresh 
  const { isDarkMode } = useDarkMode();

  return (
    <View
    style={twrnc`flex w-full h-full flex-col mt-11 relative bg-${ !isDarkMode ? "white" : "black"}`}
  >
        {/** the icon for navigation backwards  */}
        <View style={twrnc`mx-5`}>
        <TouchableOpacity
          style={twrnc`h-11 w-11 bg-gray-100 items-center justify-center  rounded-full bg-gray-${
            !isDarkMode ? "200" : "700"
          }`}
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
<Text style={twrnc`text-3xl font-semibold text-${ !isDarkMode ? "black" : "white"  }`}> Verification Code</Text>

</View>

{/** the image below the heading tag  */}
<View style={twrnc`flex items-center justify-center mx-5`}>
<Image source={require("../../assets/IMG.png")}/>
</View>

{/** the four input boxes  */}
<View style={twrnc`flex flex-row mx-5 justify-center mt-8 items-center`}>
    {pins.map((pin,index)=>(
            <TextInput
            key={index}
            style={twrnc`h-24 w-20 text-center border-2 border-gray-400 rounded-lg mx-2 text-3xl font-medium text-${
              !isDarkMode ? "black" : "white"
            }`}
            maxLength={1} // Allow only one character input
            keyboardType="numeric" // Show numeric keyboard
            value={pin}
            ref={inputRefs[index]} 
            onChangeText={(text) => handlePinChange(index, text)}
            returnKeyType="done" // Set returnKeyType to "done"
            />
        ))
    }

</View>

{/** bottom side of the page  */}

{/* bottom side of the page */}
<View style={twrnc`mt-40 flex items-center justify-center mx-5`}>
        <Text style={twrnc`text-center text-gray-500`}>
        <Text style={twrnc`font-bold text-${!isDarkMode ? "black" : "white"}`}>{`${Math.floor(timer / 60)}:${(timer % 60)
            .toString()
            .padStart(2, "0")}`}</Text>{" "}
          resend confirmation code
        </Text>
      </View>



{/** the button below that will allow you to login   */}

<View style={twrnc`flex items-center   absolute bottom-0 mt-auto bg-purple-500 w-full h-28 flex `}>
        <TouchableOpacity style={twrnc`w-full flex items-center justify-center pt-5`} onPress={handleSubmit}>
          <Text style={twrnc`text-white text-center font-semibold`}>Confirm Code </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Verification;
