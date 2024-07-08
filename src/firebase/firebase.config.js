// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKjedTl-lrhjPCmFchgAoAeL5bFRaKTmA",
  authDomain: "mct-telecoms.firebaseapp.com",
  projectId: "mct-telecoms",
  storageBucket: "mct-telecoms.appspot.com",
  messagingSenderId: "771446768894",
  appId: "1:771446768894:web:6b64d3ae915efd821011af",
  measurementId: "G-KVNX83KHZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);