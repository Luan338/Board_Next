import firebase from '../../node_modules/firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyBoU7MgO-tPwjgzCWVbpNaM_jlh5B3K-vI",
    authDomain: "boardapp-67308.firebaseapp.com",
    projectId: "boardapp-67308",
    storageBucket: "boardapp-67308.appspot.com",
    messagingSenderId: "358305703719",
    appId: "1:358305703719:web:d878f5e4d5b341242aeb02",
    measurementId: "G-DYCHNHFSWX"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;