// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig= {
  apiKey: "AIzaSyBlTYh2kcZYhNdvB6iBGDQeDrFr3KmMnh8",
  authDomain: "movie-streaming-app-f4013.firebaseapp.com",
  projectId: "movie-streaming-app-f4013",
  storageBucket: "movie-streaming-app-f4013.appspot.com",
  messagingSenderId: "162835894234",
  appId: "1:162835894234:web:882d7f6620f9c3a043bae3",
  measurementId: "G-Z11KRXSQJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
export  { auth };