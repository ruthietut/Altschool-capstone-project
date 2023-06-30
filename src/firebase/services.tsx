// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYEFmqPInSsWii_SyN_DFtPiz4yde40iA",
    authDomain: "scissors-f287d.firebaseapp.com",
    databaseURL: "https://scissors-f287d-default-rtdb.firebaseio.com",
    projectId: "scissors-f287d",
    storageBucket: "scissors-f287d.appspot.com",
    messagingSenderId: "401646158793",
    appId: "1:401646158793:web:895948d86f70ccb935de18",
    measurementId: "G-JG2VTPV249"
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export default getFirestore();








// const analytics = getAnalytics(app);