import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyAryPP9E8It5ZnEJ4kwxrxJXWY4CFoHkTg',
  authDomain: 'js-cloud-cafe.firebaseapp.com',
  projectId: 'js-cloud-cafe',
  storageBucket: 'js-cloud-cafe.appspot.com',
  messagingSenderId: '1057664545816',
  appId: '1:1057664545816:web:c01aeab246fc23d52c7f6d',
  measurementId: 'G-5JSHJBB3W5',
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
