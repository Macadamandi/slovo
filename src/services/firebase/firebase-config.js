// Конфигурация Firebase

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5uewgo7AUUUY0kyjuM7btkoWkNDgRxsw",
  authDomain: "slovo-582f2.firebaseapp.com",
  projectId: "slovo-582f2",
  storageBucket: "slovo-582f2.firebasestorage.app",
  messagingSenderId: "1039849528434",
  appId: "1:1039849528434:web:68f77af92608fbb26e36eb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);