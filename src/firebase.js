import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDVsunKDWqSavaTyjWVf62Lkw1fOotcZQ0",
    authDomain: "car-reseller.firebaseapp.com",
    projectId: "car-reseller",
    storageBucket: "car-reseller.appspot.com",
    messagingSenderId: "462375144914",
    appId: "1:462375144914:web:b76032f29ed2bcf0f10c0b"
}


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;
