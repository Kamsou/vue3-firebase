import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vue3-firebase-94b18.firebaseapp.com",
  projectId: "vue3-firebase-94b18",
  storageBucket: "vue3-firebase-94b18.appspot.com",
  messagingSenderId: "196337886051",
  appId: "1:196337886051:web:96db794901caa183196956"
}

console.log(import.meta.env);

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const db = getFirestore()
