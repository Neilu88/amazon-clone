import firebase from "firebase"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMG9rWc0icHjElj-vdGHorossldTwCzo8",
  authDomain: "neilzon.firebaseapp.com",
  projectId: "neilzon",
  storageBucket: "neilzon.appspot.com",
  messagingSenderId: "449213858967",
  appId: "1:449213858967:web:67a58e1dd146e4b5acd5d2",
}

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
