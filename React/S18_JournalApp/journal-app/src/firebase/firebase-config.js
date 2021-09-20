// 241, 284, 285
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import "firebase/firestore";

console.log(
  "*******************************************************************************************************"
);

console.log(process.env.REACT_APP_SEED);
console.log(process.env.REACT_APP_APIKEY);

// import { getAnalytics } from "firebase/analytics";
// let firebaseConfig = {
//   apiKey: "AIzaSyCCMNvKN0hfNGY2a20Zy-c7mz0VlVar-HE",
//   authDomain: "react-course-fh.firebaseapp.com",
//   projectId: "react-course-fh",
//   storageBucket: "react-course-fh.appspot.com",
//   messagingSenderId: "367771070231",
//   appId: "1:367771070231:web:97bdbb2a9ac69a39735152",
//   measurementId: "G-NKRYS2H8FR",
// };

// 284
// const firebaseConfigTesting = {
//   apiKey: "AIzaSyA_ffh8kEffTbt2a9-WdKBidD2fhfT_h2g",
//   authDomain: "tests-project-8925d.firebaseapp.com",
//   databaseURL:
//     "https://tests-project-8925d-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "tests-project-8925d",
//   storageBucket: "tests-project-8925d.appspot.com",
//   messagingSenderId: "361460037952",
//   appId: "1:361460037952:web:07ec10a73b6490e50ee2a5",
//   measurementId: "G-H7YGCGBXQL",
// };

// 285
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// const firebaseConfigTesting = {
// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTHDOMAIN,
// databaseURL: process.env.REACT_APP_DATABASEURL,
// projectId: process.env.REACT_APP_PROJECTID,
// storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// messagingSenderId: process.env.MESSAGINGSENDERID,
// appId: process.env.REACT_APP_APPID,
// measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTHDOMAIN,
// databaseURL: process.env.REACT_APP_DATABASEURL,
// projectId: process.env.REACT_APP_PROJECTID,
// storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// messagingSenderId: process.env.MESSAGINGSENDERID,
// appId: process.env.REACT_APP_APPID,
// measurementId: process.env.REACT_APP_MEASUREMENTID,

// 284
if (process.env.NODE_ENV === "test") {
  // testing

  firebase.initializeApp(firebaseConfig);
} else {
  // dev, prod
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
