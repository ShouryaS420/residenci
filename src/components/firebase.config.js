// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVGtvDzU2E4xEW48Wu92D8y_qMKK2l7rc",
    authDomain: "otp-login-1caa3.firebaseapp.com",
    projectId: "otp-login-1caa3",
    storageBucket: "otp-login-1caa3.appspot.com",
    messagingSenderId: "174219409958",
    appId: "1:174219409958:web:6da196e015f02f0cf344e7",
    measurementId: "G-1Q775FLJMK"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)