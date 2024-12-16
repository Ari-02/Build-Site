import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBzNlNy8KOCP_95Df46shcdRDBCTXH4RpE",
  authDomain: "productivity-tracker-paka.firebaseapp.com",
  projectId: "productivity-tracker-paka",
  storageBucket: "productivity-tracker-paka.firebasestorage.app",
  messagingSenderId: "129067425880",
  appId: "1:129067425880:web:9f51da854962b22b59aa2d",
  measurementId: "G-QZ82MYMNT2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); // Initialize and export Firestore
