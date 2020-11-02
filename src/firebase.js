import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBsFeIIlhjLbuDLCPMk18s43B7NHBWj1-M",
  authDomain: "fir-404d3.firebaseapp.com",
  databaseURL: "https://fir-404d3.firebaseio.com",
  projectId: "fir-404d3",
  storageBucket: "fir-404d3.appspot.com",
  messagingSenderId: "910820277461",
  appId: "1:910820277461:web:b67cef2cc2479efdd5765c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

