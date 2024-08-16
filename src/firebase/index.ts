// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyByjnlNpMYZnX2sZZqjF5Jyqg3N0gDrcys',
  authDomain: 'vue-recipe-picker.firebaseapp.com',
  projectId: 'vue-recipe-picker',
  storageBucket: 'vue-recipe-picker.appspot.com',
  messagingSenderId: '651479157251',
  appId: '1:651479157251:web:e024c7989c7b77d6355c36',
  measurementId: 'G-BW253LPC6K',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }
