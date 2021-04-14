import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa-TG--v5eT-60_6e9MO-78BhelWplRiA",
  authDomain: "dezflix-clone.firebaseapp.com",
  projectId: "dezflix-clone",
  storageBucket: "dezflix-clone.appspot.com",
  messagingSenderId: "720110595046",
  appId: "1:720110595046:web:0511b4bc11d3afd2358427",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
