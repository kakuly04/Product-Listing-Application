// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkCOvS4Z8lzNIxDZ6HfiTX6Rl-DApBU4g",
  authDomain: "e-commerce-listings.firebaseapp.com",
  projectId: "e-commerce-listings",
  storageBucket: "e-commerce-listings.firebasestorage.app",
  messagingSenderId: "321051301999",
  appId: "1:321051301999:web:109f84529bce39107c559a",
  measurementId: "G-NMNMGF27M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);