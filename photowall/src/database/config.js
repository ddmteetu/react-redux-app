import * as firebase from 'firebase';

var firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database};
