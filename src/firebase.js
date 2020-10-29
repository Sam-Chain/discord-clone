import firebase from 'firebase'

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyAFLo4pMO57ZY7ig7DkNo_PThFymp27-rs",
    authDomain: "discord-clone-d6d88.firebaseapp.com",
    databaseURL: "https://discord-clone-d6d88.firebaseio.com",
    projectId: "discord-clone-d6d88",
    storageBucket: "discord-clone-d6d88.appspot.com",
    messagingSenderId: "519605244580",
    appId: "1:519605244580:web:7a147a0519775af2688c31",
    measurementId: "G-R15KS6V6JR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
