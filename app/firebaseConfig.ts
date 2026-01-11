// Import the functions you need from the SDKs you need
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
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
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


// Initialize Analytics conditionally
let analytics: Analytics | undefined;

// Check if we are in the browser and if Analytics is supported
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, app, analytics };