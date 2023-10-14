import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { CustomEnvironment } from "../types/CustomEnvironment";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// PROD

const {
  VITE_FIREBASE__databaseURL,
  VITE_FIREBASE_apiKey,
  VITE_FIREBASE_authDomain,
  VITE_FIREBASE_measurementId,
  VITE_FIREBASE_messagingSenderId,
  VITE_FIREBASE_projectId,
  VITE_FIREBASE_storageBucket,
  VITE_FIREBASE_appId,
} = import.meta.env as CustomEnvironment;
const firebaseConfig = {
  apiKey: VITE_FIREBASE_apiKey,
  authDomain: VITE_FIREBASE_authDomain,
  databaseURL: VITE_FIREBASE__databaseURL,
  projectId: VITE_FIREBASE_projectId,
  storageBucket: VITE_FIREBASE_storageBucket,
  messagingSenderId: VITE_FIREBASE_messagingSenderId,
  appId: VITE_FIREBASE_appId,
  measurementId: VITE_FIREBASE_measurementId,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);
