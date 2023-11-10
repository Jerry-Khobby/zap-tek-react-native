import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggin,setIsLoggin] = useState(false);

  useEffect(() => {
    // Load dark mode state from AsyncStorage when the component mounts
    const loadDarkModeState = async () => {
      try {
        const savedDarkModeState = await AsyncStorage.getItem('darkMode');
        if (savedDarkModeState !== null) {
          setIsDarkMode(JSON.parse(savedDarkModeState));
        }
      } catch (error) {
        console.error('Error loading dark mode state:', error);
      }
    };

    loadDarkModeState();
  }, []);


  useEffect(()=>{
    const loadIsLoggInState=async()=>{
      try{
        const savedLogginState=await AsyncStorage.getItem('loginMode');
        if(savedLogginState!==null){
          setIsLoggin(JSON.parse(savedLogginState))
        }

      }catch(error){
        console.error('Error loading dark mode state:', error);
      }
    }
    loadIsLoggInState();
  },[]);

const toggleLoginMode=()=>{
  setIsLoggin((prevMode)=>{
    const newMode=!prevMode;
    AsyncStorage.setItem('loginMode',JSON.stringify(newMode)).catch((error)=>{
      console.error('Error saving dark mode state:', error);
    });
    return newMode;
  })
}


  const toggleDarkMode = () => {
    // Toggle dark mode state and save it to AsyncStorage
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      AsyncStorage.setItem('darkMode', JSON.stringify(newMode)).catch((error) => {
        console.error('Error saving dark mode state:', error);
      });
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode,toggleLoginMode,isLoggin}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};


// I am left to add the phone synchronization with the add 

