import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const analytics = getAnalytics(app);




// from Moses the api below
// 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
