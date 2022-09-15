import {initializeApp} from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA2nEcmG7Gv3g2yXekmuZXpX2hxDyNw0xo',
  authDomain: 'reservacion-vuelos-6b622.firebaseapp.com',
  projectId: 'reservacion-vuelos-6b622',
  storageBucket: 'reservacion-vuelos-6b622.appspot.com',
  messagingSenderId: '970076996102',
  appId: '1:970076996102:web:7dcb13025f43d4e36c3987',
  measurementId: 'G-V16MGJVW71',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
