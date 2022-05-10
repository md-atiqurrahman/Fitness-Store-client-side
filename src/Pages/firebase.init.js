// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjcIrG5vWoG-WDaYxiaTCLJIANbobNFLg",
  authDomain: "gym-equipment-store.firebaseapp.com",
  projectId: "gym-equipment-store",
  storageBucket: "gym-equipment-store.appspot.com",
  messagingSenderId: "349732223996",
  appId: "1:349732223996:web:8c0fbc12c5ddf07cc91079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth};