import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCL3DjybPWMcz61ruoHdCPjZXN6yLnVfxY',
  authDomain: 'prix-banque.firebaseapp.com',
  projectId: 'prix-banque',
  storageBucket: 'prix-banque.appspot.com',
  messagingSenderId: '676381787853',
  appId: '1:676381787853:web:bc188aea416d03e224cb84'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
