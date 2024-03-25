// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMHI02Q3Xfy3nUB0Pe636NSkhGkQy3o6k",
  authDomain: "sacedor-c5ab0.firebaseapp.com",
  projectId: "sacedor-c5ab0",
  storageBucket: "sacedor-c5ab0.appspot.com",
  messagingSenderId: "105128656974",
  appId: "1:105128656974:web:c63ad024960c890916431f",
  measurementId: "G-8HCPHSCXRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
