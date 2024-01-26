// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7j2xKpjl_Is5DAkn5Yu92nC7Xnjd0Vhg",
  authDomain: "academy-db32c.firebaseapp.com",
  projectId: "academy-db32c",
  storageBucket: "academy-db32c.appspot.com",
  messagingSenderId: "125581396918",
  appId: "1:125581396918:web:276224f046f09081044f17",
  measurementId: "G-J53MQPB439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);