import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdXtUeOr9FpFNST-7DDBclzsFXaFZGivM",
  authDomain: "clone-810f8.firebaseapp.com",
  databaseURL: "https://clone-810f8.firebaseio.com",
  projectId: "clone-810f8",
  storageBucket: "clone-810f8.appspot.com",
  messagingSenderId: "225925714267",
  appId: "1:225925714267:web:7b4c38c1e90b0218e7ca7e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
