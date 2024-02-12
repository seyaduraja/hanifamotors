// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ41VkOpCqxY7HosdVHgGW22hPNF7ceDA",
  authDomain: "hanifa-motors.firebaseapp.com",
  projectId: "hanifa-motors",
  storageBucket: "hanifa-motors.appspot.com",
  messagingSenderId: "635046286482",
  appId: "1:635046286482:web:5b31afa9f49fae1fe6824b",
  measurementId: "G-Q8LPX7NYKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);