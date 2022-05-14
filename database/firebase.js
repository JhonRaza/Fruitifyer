// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDPJsDJwdOnfzaWWhxxEAJkPcllqTkcqv8",
    authDomain: "fruitifyer-ca6fa.firebaseapp.com",
    databaseURL: "https://fruitifyer-ca6fa-default-rtdb.firebaseio.com",
    projectId: "fruitifyer-ca6fa",
    storageBucket: "fruitifyer-ca6fa.appspot.com",
    messagingSenderId: "715440869732",
    appId: "1:715440869732:web:d90dd5a91c9dea00572a71",
    measurementId: "G-P6RM5TJVJ0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;