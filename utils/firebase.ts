
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.NEXT_PUBLIC_firebase_apiKey,
  authDomain: process.env.NEXT_PUBLIC_firebase_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_firebase_databaseURL,
  projectId: process.env.NEXT_PUBLIC_firebase_projectId,
  storageBucket: process.env.NEXT_PUBLIC_firebase_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_firebase_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_firebase_appId,
  measurementId: process.env.NEXT_PUBLIC_firebase_measurementId,
};
if(firebase.apps.length === 0){
  firebase.initializeApp(config);
}

export default firebase;
