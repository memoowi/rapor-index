// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe1_uMnB2xX8GqD0KwZenTBXa6fOrqv9o",
  authDomain: "rapor-index-9faf0.firebaseapp.com",
  projectId: "rapor-index-9faf0",
  storageBucket: "rapor-index-9faf0.firebasestorage.app",
  messagingSenderId: "136627962318",
  appId: "1:136627962318:web:e1f7a96e526a8833f2ab9f",
  measurementId: "G-FPHS289BXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };