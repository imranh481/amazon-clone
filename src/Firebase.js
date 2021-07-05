import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC2ahmiyXwTiB9YQHDFO-29lv1Ao3QvD8",
  authDomain: "clone-66cc7.firebaseapp.com",
  projectId: "clone-66cc7",
  storageBucket: "clone-66cc7.appspot.com",
  messagingSenderId: "1009498422197",
  appId: "1:1009498422197:web:f6f728fb9b66e8ed5877fc",
  measurementId: "G-LPLMBMBEGF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;