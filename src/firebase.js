// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOl1gOdMQ32U-ax6sOjgRFRG0FVwrvCY",
  authDomain: "aquatech-5627f.firebaseapp.com",
  projectId: "aquatech-5627f",
  storageBucket: "aquatech-5627f.appspot.com",
  messagingSenderId: "726707797479",
  appId: "1:726707797479:web:77610ee2553ab7039bd142",
  measurementId: "G-3TR1JJVP7F"
};

// Initialize Firebase
//const app = 
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore()
