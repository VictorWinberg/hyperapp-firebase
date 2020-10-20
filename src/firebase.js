// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: 'AIzaSyAV5dWsP2CMSx449QuPUn_6PvoWwxmsGbM',
  authDomain: 'victorwinberg-demo.firebaseapp.com',
  databaseURL: 'https://victorwinberg-demo.firebaseio.com',
  projectId: 'victorwinberg-demo',
  storageBucket: 'victorwinberg-demo.appspot.com',
  messagingSenderId: '677554420580',
  appId: '1:677554420580:web:e69de967cd314dca1d1871',
  measurementId: 'G-4XW40DEQLG',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
