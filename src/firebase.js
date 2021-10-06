import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBDALjKJhzEyreWRGkWL8TbUyFcDBSSQg",
  authDomain: "photo-gallery-e2166.firebaseapp.com",
  projectId: "photo-gallery-e2166",
  storageBucket: "photo-gallery-e2166.appspot.com",
  messagingSenderId: "280563089080",
  appId: "1:280563089080:web:ac4143e42733df37bc3e4d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const db = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, db, timestamp };
