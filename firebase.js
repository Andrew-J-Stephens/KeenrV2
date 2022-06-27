import * as firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA4Edf9JjwXwS1EqalySoaWbv4oPfLppCA",
    authDomain: "keenr-d62e2.firebaseapp.com",
    projectId: "keenr-d62e2",
    storageBucket: "keenr-d62e2.appspot.com",
    messagingSenderId: "134425229337",
    appId: "1:134425229337:web:61b6cb87839e6756279288",
    measurementId: "G-W0HJYLECXS"
  });
  
const analytics = getAnalytics(app);