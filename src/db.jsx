// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACk0KGul4rM0yxLJubiwYVn5ZkvkRdNQk",
  authDomain: "viva-quest.firebaseapp.com",
  projectId: "viva-quest",
  storageBucket: "viva-quest.appspot.com",
  messagingSenderId: "915664603625",
  appId: "1:915664603625:web:913fabf793d905bba66378"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); 