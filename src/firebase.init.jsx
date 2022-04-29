// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjyX4BVfo972_mM8ZLAPxXrdrdhNMZSu8",
  authDomain: "car-warehouse.firebaseapp.com",
  projectId: "car-warehouse",
  storageBucket: "car-warehouse.appspot.com",
  messagingSenderId: "364691168939",
  appId: "1:364691168939:web:275ef56db50e14c15ca1ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth