// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    //config here
};

firebase.initializeApp(firebaseConfig);

export default firebase;
