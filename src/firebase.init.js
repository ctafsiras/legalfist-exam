// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANXAW4lQ1kqU8Bvrl16G8M2mLDw9nl1K4",
    authDomain: "legalfist-exam.firebaseapp.com",
    projectId: "legalfist-exam",
    storageBucket: "legalfist-exam.appspot.com",
    messagingSenderId: "417838097456",
    appId: "1:417838097456:web:aeb41c461c7d9bd4b639f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;