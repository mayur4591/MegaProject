// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCPKy75TOIdLTO9j5syC2-mXgNbr38REY",
    authDomain: "evote-e62bf.firebaseapp.com",
    projectId: "evote-e62bf",
    storageBucket: "evote-e62bf.appspot.com",
    messagingSenderId: "91560517432",
    appId: "1:91560517432:web:57a9626544dda79f4babcd",
    measurementId: "G-WSP217CNNE",
    appVerificationDisabledForTesting: false
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };