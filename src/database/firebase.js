import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmk6OWbypTLxKLaEQ1YgBMsoLH9GQnspU",
  authDomain: "tarotapp-29683.firebaseapp.com",
  projectId: "tarotapp-29683",
  storageBucket: "tarotapp-29683.appspot.com",
  messagingSenderId: "854518946883",
  appId: "1:854518946883:web:b55bcb589e8e3d80f4c8f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const reference = ref()
