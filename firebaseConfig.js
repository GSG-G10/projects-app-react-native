import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAerHNK4kJys3kOpYWA9tkkG6vpfO3okYc",
  authDomain: "projects-app-904c2.firebaseapp.com",
  databaseURL: "https://projects-app-904c2-default-rtdb.firebaseio.com",
  projectId: "projects-app-904c2",
  storageBucket: "projects-app-904c2.appspot.com",
  messagingSenderId: "74095581735",
  appId: "1:74095581735:web:02d2c797ce111150ddcc02"
};

   // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   export const db = getFirestore();
   