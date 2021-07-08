import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCPUgYtXMbX0XJLmJtoUZWy2RsDZJFT5Pg',
  authDomain: 'instagram-clone-5bf1c.firebaseapp.com',
  projectId: 'instagram-clone-5bf1c',
  storageBucket: 'instagram-clone-5bf1c.appspot.com',
  messagingSenderId: '694787722344',
  appId: '1:694787722344:web:19e3313f932cc9b3e43fdd',
  measurementId: 'G-EJYL4EZNTY',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
