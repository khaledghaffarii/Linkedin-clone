import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBYi16WA67VEpPa7ruwRAoPvZA45oeItcQ",
  authDomain: "linkedin-clone-e0d7b.firebaseapp.com",
  projectId: "linkedin-clone-e0d7b",
  storageBucket: "linkedin-clone-e0d7b.appspot.com",
  messagingSenderId: "558903987813",
  appId: "1:558903987813:web:9b5e730701502af5b6c08c",
  measurementId: "G-MNDTT78JG3",
};

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();

export { auth, provider, storage };

export default db;
