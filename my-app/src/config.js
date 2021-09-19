import * as firebase from 'firebase/app';
import "firebase/database";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAgSibZjEJa9HQ_PD06u0G2XH3WGnVVPIs",
    authDomain: "knightshift-43491.firebaseapp.com",
    databaseURL: "https://knightshift-43491.firebaseio.com",
    projectId: "knightshift-43491",
    storageBucket: "knightshift-43491.appspot.com",
    messagingSenderId: "876799832364",
    appId: "1:876799832364:web:f78ad9f53c77818d46bc89",
    measurementId: "G-4HZZQVXNQH"
};

const fb = firebase.initializeApp(config);

const db = fb.firestore();

export default db;
