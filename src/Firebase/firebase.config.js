// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LO__hDSSNc7-n4aFfe8X9M3P845iJ5M",
  authDomain: "education-event.firebaseapp.com",
  projectId: "education-event",
  storageBucket: "education-event.appspot.com",
  messagingSenderId: "978025600881",
  appId: "1:978025600881:web:e5200b1ad145d13d3d48d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;