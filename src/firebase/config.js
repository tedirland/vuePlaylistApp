import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCLFaJEGp-6mz187rC6WrToF_m9aJvlQq8',
  authDomain: 'bud-jamz.firebaseapp.com',
  projectId: 'bud-jamz',
  storageBucket: 'bud-jamz.appspot.com',
  messagingSenderId: '1081909921440',
  appId: '1:1081909921440:web:013d53f2dd3c24fbd62bc5',
};

//init firebase app
firebase.initializeApp(firebaseConfig);

//init services
const projectfirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectfirestore, projectStorage, timestamp };
