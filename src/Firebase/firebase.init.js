// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzZRafHZ8vA_VIWNE_aU2xoAuIBjvnoes",
    authDomain: "blood-home-50ecc.firebaseapp.com",
    projectId: "blood-home-50ecc",
    storageBucket: "blood-home-50ecc.appspot.com",
    messagingSenderId: "938826613113",
    appId: "1:938826613113:web:eaa4199bf74233b45b2fa8",
    measurementId: "G-TMK41W2G86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
