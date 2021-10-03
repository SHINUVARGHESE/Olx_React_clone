import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB9WPI_LvslvXElYY_w8ViDZ67kCePtav4",
    authDomain: "fir-970f5.firebaseapp.com",
    projectId: "fir-970f5",
    storageBucket: "fir-970f5.appspot.com",
    messagingSenderId: "288350696903",
    appId: "1:288350696903:web:008c2a77cd5fe3901695e2",
    measurementId: "G-DQSQLFD3M7"
};

export default  firebase.initializeApp(firebaseConfig); 