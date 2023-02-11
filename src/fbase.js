import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRq2XuR6mxIqcytqS6aeEbFu9bVbuHaqI",
  authDomain: "nwitter-7add5.firebaseapp.com",
  projectId: "nwitter-7add5",
  storageBucket: "nwitter-7add5.appspot.com",
  messagingSenderId: "671483045417",
  appId: "1:671483045417:web:df4a46b8c8632cfb7e1e38"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();