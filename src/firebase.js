//import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import {  getAuth , GoogleAuthProvider } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDABTjk2fI9pk3NjOL3tVpyTBxlyVadrNw",
    authDomain: "todolist-9f1b9.firebaseapp.com",
    projectId: "todolist-9f1b9",
    storageBucket: "todolist-9f1b9.appspot.com",
    messagingSenderId: "390600578507",
    appId: "1:390600578507:web:d625b288ed39a8b6fe524e"    
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

