import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



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