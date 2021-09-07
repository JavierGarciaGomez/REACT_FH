// 241
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import "firebase/firestore";

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

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
