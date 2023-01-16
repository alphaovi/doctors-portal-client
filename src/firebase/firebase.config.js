// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVfvEDKklzPxPpiWhSTz47sZNSUl9muzs",
  authDomain: "email-password-auth-b47b0.firebaseapp.com",
  projectId: "email-password-auth-b47b0",
  storageBucket: "email-password-auth-b47b0.appspot.com",
  messagingSenderId: "583229623140",
  appId: "1:583229623140:web:191e85c281de8b95820871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;