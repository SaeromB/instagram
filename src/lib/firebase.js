import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyD2x2ADRmlueZU9qHhaOS3fRHPXb5QWdAM',
  authDomain: 'instagram-clone-f23ff.firebaseapp.com',
  projectId: 'instagram-clone-f23ff',
  storageBucket: 'instagram-clone-f23ff.appspot.com',
  messagingSenderId: '856485350783',
  appId: '1:856485350783:web:a13c1e015ab697b7f85e4a',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// 한번만 불러오기
// seedDatabase(firebase);
export { firebase, FieldValue };
