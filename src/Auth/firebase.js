// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_qrd26Qy-j9_2sMTMEtVpC09xTSiMgI",
  authDomain: "movie-app-96e2e.firebaseapp.com",
  projectId: "movie-app-96e2e",
  storageBucket: "movie-app-96e2e.appspot.com",
  messagingSenderId: "484386921726",
  appId: "1:484386921726:web:449da1449d66a7b9c359af",
  measurementId: "G-LT9RFYJE9G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth