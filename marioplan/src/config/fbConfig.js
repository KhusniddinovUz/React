import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyC7tKPhhwLZkdBmQXEmQF45Sr2paUZmFuc',
  authDomain: 'khuz-marioplan.firebaseapp.com',
  projectId: 'khuz-marioplan',
  storageBucket: 'khuz-marioplan.appspot.com',
  messagingSenderId: '129470955782',
  appId: '1:129470955782:web:52bde8d1becfa2f85c5e87',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
