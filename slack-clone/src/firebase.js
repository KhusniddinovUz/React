import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyAx3owa2PTG5sHXT3iETWvLYBrtakRlhto',
  authDomain: 'slack-clone-uz.firebaseapp.com',
  databaseURL: 'https://slack-clone-uz.firebaseio.com',
  projectId: 'slack-clone-uz',
  storageBucket: 'slack-clone-uz.appspot.com',
  messagingSenderId: '390328440155',
  appId: '1:390328440155:web:aca72d74a44c26aa7fb67e',
  measurementId: 'G-GZ8662N2Y7',
};
firebase.initializeApp(config);

export default firebase;
