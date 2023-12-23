// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";

import * as auth from "firebase/auth";
import * as db from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB5EAJbTq45XTHWunol_9Z9wZv6OQZh5io",
  authDomain: "hiringportal-daf0a.firebaseapp.com",
  projectId: "hiringportal-daf0a",
  storageBucket: "hiringportal-daf0a.appspot.com",
  messagingSenderId: "368111516990",
  appId: "1:368111516990:web:a4d4e5bf0aa82bc456806f",
  measurementId: "G-XZSDT619BG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const authService = auth;

export const dbService = db;
