import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLjecIdNcVdvGejV2V2EL1wO-NNudpK3w",
    authDomain: "twitter-clone-react-firebase.firebaseapp.com",
    databaseURL: "https://twitter-clone-react-firebase.firebaseio.com",
    projectId: "twitter-clone-react-firebase",
    storageBucket: "twitter-clone-react-firebase.appspot.com",
    messagingSenderId: "558306233310",
    appId: "1:558306233310:web:558c82ea3562fb94116b4f",
    measurementId: "G-WWX6JK343Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db