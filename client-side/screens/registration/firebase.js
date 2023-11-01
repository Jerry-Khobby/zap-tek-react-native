// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";// I used compat because of the version of the firebase
import 'firebase/auth';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from '@env'






const firebaseConfig = {
  apiKey: "AIzaSyAXCojgclX9reonVX3X3Thl7M4duPeEpZw",
  authDomain: "zaptechmobileapp.firebaseapp.com",
  projectId: "zaptechmobileapp",
  storageBucket: "zaptechmobileapp.appspot.com",
  messagingSenderId: "112260528090",
  appId: "1:112260528090:web:cbab4201aa8ff76ea2f2e3",
  measurementId: "G-DBVXVN15E8",
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
