// 241

import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCCMNvKN0hfNGY2a20Zy-c7mz0VlVar-HE",
  authDomain: "react-course-fh.firebaseapp.com",
  projectId: "react-course-fh",
  storageBucket: "react-course-fh.appspot.com",
  messagingSenderId: "367771070231",
  appId: "1:367771070231:web:97bdbb2a9ac69a39735152",
  measurementId: "G-NKRYS2H8FR",
};

// Initialize Firebase database

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
