// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "subarushop-78e1c.firebaseapp.com",
  projectId: "subarushop-78e1c",
  storageBucket: "subarushop-78e1c.appspot.com",
  messagingSenderId: "256518016648",
  appId: "1:256518016648:web:d7cd3b275562cdff34593d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

