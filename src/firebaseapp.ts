import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwIwFqulutLKpRMbomeLgFCw3QyrHS4tM",
    authDomain: "infogami-e8cdf.firebaseapp.com",
    projectId: "infogami-e8cdf",
    storageBucket: "infogami-e8cdf.appspot.com",
    messagingSenderId: "822165328759",
    appId: "1:822165328759:web:885cc6a056eb746ae7c772"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);