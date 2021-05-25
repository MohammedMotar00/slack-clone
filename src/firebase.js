import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVj6sF2bzvVHRGSo0TYedeajsRf9sUBR8",
  authDomain: "slack-clone-1ff2b.firebaseapp.com",
  projectId: "slack-clone-1ff2b",
  storageBucket: "slack-clone-1ff2b.appspot.com",
  messagingSenderId: "599961316947",
  appId: "1:599961316947:web:f6f608e8fe113b77ad60a6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
