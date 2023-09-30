import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLygL95qIAVxMTmo3fUe1Cs-NhvfgP7lA",
  authDomain: "fir-b229b.firebaseapp.com",
  projectId: "fir-b229b",
  storageBucket: "fir-b229b.appspot.com",
  messagingSenderId: "1067582272118",
  appId: "1:1067582272118:web:606e6c45c3ea3bc33d2557",
  measurementId: "G-90JKBX69XD",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
