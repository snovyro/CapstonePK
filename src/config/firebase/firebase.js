import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAvII-UVixB_BNXyLSrvrqpyrucOjPpBbA',
    authDomain: 'capstonemegis.firebaseapp.com',
    projectId: 'capstonemegis',
    storageBucket: 'capstonemegis.appspot.com',
    messagingSenderId: '104883895528',
    appId: '1:104883895528:web:bb7f705a3eeaa2f5901d5d',
    measurementId: 'G-3KQD24JCML',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
