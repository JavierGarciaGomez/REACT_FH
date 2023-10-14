export interface CustomEnvironment extends ImportMetaEnv {
  VITE_HOLA: string;
  VITE_JWT_SEED: string;
  VITE_APPID: string;
  VITE_FIREBASE_apiKey: string;
  VITE_FIREBASE_authDomain: string;
  VITE_FIREBASE__databaseURL: string;
  VITE_FIREBASE_projectId: string;
  VITE_FIREBASE_storageBucket: string;
  VITE_FIREBASE_messagingSenderId: string;
  VITE_FIREBASE_appId: string;
  VITE_FIREBASE_measurementId: string;
}
