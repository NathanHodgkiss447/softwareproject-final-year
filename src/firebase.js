// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7VzyNrS_fRgF8lTb60bdbFkwqAHZ1K0Q",
  authDomain: "softwareproject-final.firebaseapp.com",
  projectId: "softwareproject-final",
  storageBucket: "softwareproject-final.appspot.com",
  messagingSenderId: "205568654979",
  appId: "1:205568654979:web:f63523d3c415876e5ae5b6",
  measurementId: "G-K61Q9N00E3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

const realTimeDB = firebase.database().ref();

export { auth, provider, firebaseApp, timestamp, realTimeDB };

export default db;
