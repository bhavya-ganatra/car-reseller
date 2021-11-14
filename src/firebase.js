import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVsunKDWqSavaTyjWVf62Lkw1fOotcZQ0",
    authDomain: "car-reseller.firebaseapp.com",
    projectId: "car-reseller",
    storageBucket: "car-reseller.appspot.com",
    messagingSenderId: "462375144914",
    appId: "1:462375144914:web:b76032f29ed2bcf0f10c0b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;