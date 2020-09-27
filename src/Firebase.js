import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBIiHTkomf91tgOeu9ua-vDpUV1gmgYubw",
    authDomain: "whatsapp-1072c.firebaseapp.com",
    databaseURL: "https://whatsapp-1072c.firebaseio.com",
    projectId: "whatsapp-1072c",
    storageBucket: "whatsapp-1072c.appspot.com",
    messagingSenderId: "1007796474628",
    appId: "1:1007796474628:web:41b7e391034a7c82343651",
    measurementId: "G-W6XDQJ19GW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;