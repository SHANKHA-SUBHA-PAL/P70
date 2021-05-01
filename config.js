import firebase from 'firebase'

require('@firebase/firestore')
//add sDK
const firebaseConfig = {
    apiKey: "AIzaSyB32mDkPquBvG0Bbjku1gJIQBkAFdVspPE",
    authDomain: "p-70-71-72.firebaseapp.com",
    databaseURL:'https://p-70-71-72-default-rtdb.firebaseio.com/',
    projectId: "p-70-71-72",
    storageBucket: "p-70-71-72.appspot.com",
    messagingSenderId: "343393527701",
    appId: "1:343393527701:web:6b062c8ae2e9aa5c2f789c"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

export default firebase.firestore();