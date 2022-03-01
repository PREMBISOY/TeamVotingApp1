import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAwNfnYVcrQRxgsuMcR7dd5UxXYKqr5SH0",
    authDomain: "team-voting-app-2abe8.firebaseapp.com",
    projectId: "team-voting-app-2abe8",
    storageBucket: "team-voting-app-2abe8.appspot.com",
    messagingSenderId: "603646104574",
    appId: "1:603646104574:web:4090e6e5a9a3e31f79a6af"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default firebase.database();