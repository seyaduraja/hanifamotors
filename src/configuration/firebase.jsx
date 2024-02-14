
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAZ41VkOpCqxY7HosdVHgGW22hPNF7ceDA",
  authDomain: "hanifa-motors.firebaseapp.com",
  projectId: "hanifa-motors",
  storageBucket: "hanifa-motors.appspot.com",
  messagingSenderId: "635046286482",
  appId: "1:635046286482:web:5b31afa9f49fae1fe6824b",
  measurementId: "G-Q8LPX7NYKX"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
 