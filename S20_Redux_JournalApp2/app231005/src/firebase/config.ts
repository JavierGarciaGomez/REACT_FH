import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCMNvKN0hfNGY2a20Zy-c7mz0VlVar-HE",
  authDomain: "react-course-fh.firebaseapp.com",
  databaseURL:
    "https://react-course-fh-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-course-fh",
  storageBucket: "react-course-fh.appspot.com",
  messagingSenderId: "367771070231",
  appId: "1:367771070231:web:97bdbb2a9ac69a39735152",
  measurementId: "G-NKRYS2H8FR",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);
