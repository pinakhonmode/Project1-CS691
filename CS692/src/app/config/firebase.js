import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  //your config here
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;