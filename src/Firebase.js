// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDDggmRH4eV1AEz1e58OkCyDuFddkDSCIo",
    authDomain: "linkedin-clone-85165.firebaseapp.com",
    projectId: "linkedin-clone-85165",
    storageBucket: "linkedin-clone-85165.appspot.com",
    messagingSenderId: "1034641940709",
    appId: "1:1034641940709:web:a225504d2cdd7c74f5340c",
    measurementId: "G-CF1KJNH7CH"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore() ; //DB connection from firebase 
    const auth = firebase.auth(); //Auth connection from firebase 
    export { db, auth };