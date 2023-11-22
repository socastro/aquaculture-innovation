// Import the functions you need from the SDKs you need
//import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtohpMnBWa6-bcLWgqOvtuU7NmXp2anus",
  authDomain: "aquatech-dc89f.firebaseapp.com",
  projectId: "aquatech-dc89f",
  storageBucket: "aquatech-dc89f.appspot.com",
  messagingSenderId: "69371905726",
  appId: "1:69371905726:web:f1326b3a577affd889c0ef",
  measurementId: "G-VB6YJ3SPTJ"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(fb)
export const firestore = getFirestore(fb)
