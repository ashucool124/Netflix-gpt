// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR4tgV0pOjS0-hrW_-EqnrSdOV3eibNUI",
  authDomain: "netflixgpt-8e63e.firebaseapp.com",
  projectId: "netflixgpt-8e63e",
  storageBucket: "netflixgpt-8e63e.appspot.com",
  messagingSenderId: "546003826119",
  appId: "1:546003826119:web:0bae0eb8f05fe79910d5e2",
  measurementId: "G-M5X6XZ6EX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
