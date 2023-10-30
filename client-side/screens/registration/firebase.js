// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";// I used compat because of the version of the firebase
import 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn4yxGGLdEkn9q5mHBei4iHbPdjjtENZQ",
  authDomain: "fir-authentication-56f3c.firebaseapp.com",
  projectId: "fir-authentication-56f3c",
  storageBucket: "fir-authentication-56f3c.appspot.com",
  messagingSenderId: "549516433278",
  appId: "1:549516433278:web:1a1b2cfdb307049f40c52f"
};

// Initialize Firebase
let app;
//a conditional statement to check whether there is no  firebase configuration, if there is none, we initialize it with the else statement.
if (firebase.apps.length === 0){
     app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

//store the authentication details in a conatiner auth and export.
const auth = firebase.auth()


export {auth};