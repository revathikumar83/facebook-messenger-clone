import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_hKxI2wbeGtj0147FBnlR0D--nH2I-CI",
    authDomain: "facebook-messenger-clone-403f9.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-403f9.firebaseio.com",
    projectId: "facebook-messenger-clone-403f9",
    storageBucket: "facebook-messenger-clone-403f9.appspot.com",
    messagingSenderId: "138574647717",
    appId: "1:138574647717:web:a6646b9ac4422fa065984c",
    measurementId: "G-N82QGH69KY"
})


const db = firebaseApp.firestore();
export default db;