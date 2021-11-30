import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databeseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  // initializeを複数回走らせない
  if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
  }
  const auth = firebase.auth();
  const db = firebase.firestore();
  export { auth, db };