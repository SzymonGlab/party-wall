import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const API_URL = 'http://0.0.0.0:3001';
