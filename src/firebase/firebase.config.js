// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjscU0SRtBnV3bRSWiGBbeKanPQ2u6AR0",
    authDomain: "marketplace-toy.firebaseapp.com",
    projectId: "marketplace-toy",
    storageBucket: "marketplace-toy.appspot.com",
    messagingSenderId: "717845372229",
    appId: "1:717845372229:web:3a2b74b28ab51d2ed3722c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;