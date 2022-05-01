// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnk8tx9EMtd9vOYke1W0lxWCYBjlajHLM",
    authDomain: "authentification-firebas-44162.firebaseapp.com",
    projectId: "authentification-firebas-44162",
    storageBucket: "authentification-firebas-44162.appspot.com",
    messagingSenderId: "716533293149",
    appId: "1:716533293149:web:418ef4279040b572a82db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
