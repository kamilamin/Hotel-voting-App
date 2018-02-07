import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCNTrkpJGhz0fgrZWPAxZ_wgimnSS2zVlA",
  authDomain: "lunch-app-3df84.firebaseapp.com",
  databaseURL: "https://lunch-app-3df84.firebaseio.com",
  projectId: "lunch-app-3df84",
  storageBucket: "lunch-app-3df84.appspot.com",
  messagingSenderId: "969366135829"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
