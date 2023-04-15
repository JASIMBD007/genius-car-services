// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyASfxq0xbUJhz6A5epL_M-Dn_0xwqrzISs",
    authDomain: "genius-car-services-f6688.firebaseapp.com",
    projectId: "genius-car-services-f6688",
    storageBucket: "genius-car-services-f6688.appspot.com",
    messagingSenderId: "62362720281",
    appId: "1:62362720281:web:60355e33e641cddec0b288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;