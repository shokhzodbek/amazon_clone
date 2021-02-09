import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyDr-9Afp-AYZPPze6IzdeCpaanh58Mnjy0",
      authDomain: "fir-96703.firebaseapp.com",
      projectId: "fir-96703",
      storageBucket: "fir-96703.appspot.com",
      messagingSenderId: "1066128054886",
      appId: "1:1066128054886:web:34919201715350fb7baba7",
      measurementId: "G-QWZFHHFXM7"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {auth,db}