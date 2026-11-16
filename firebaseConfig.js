// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCVkcWnX4xnpkjEIP-jzWcATbpqKfRo0SE",
  authDomain: "rstorage123.firebaseapp.com",
  projectId: "rstorage123",
  storageBucket: "rstorage123.firebasestorage.app",
  messagingSenderId: "576001468626",
  appId: "1:576001468626:web:8835a079fbfa2369c8e50b"
};

// Start Firebase
const app = initializeApp(firebaseConfig);

// Get the Firestore database and export it so other files can use it
export const db = getFirestore(app);
export const auth = getAuth(app);
