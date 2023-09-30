// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9RxsVKX7diuzMcR-0D64bJDX7Un2vZ5E",
  authDomain: "proyecto-react-111a3.firebaseapp.com",
  projectId: "proyecto-react-111a3",
  storageBucket: "proyecto-react-111a3.appspot.com",
  messagingSenderId: "686437455442",
  appId: "1:686437455442:web:5da4b88f6fe2ed0227f18b",
  measurementId: "G-32P24N0G5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);