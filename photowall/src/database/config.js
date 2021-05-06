import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBA94KdQeWw5QK3gQhnga750fbx1AjuVQA",
    authDomain: "photowall-bb417.firebaseapp.com",
    databaseURL: "https://photowall-bb417-default-rtdb.firebaseio.com",
    projectId: "photowall-bb417",
    storageBucket: "photowall-bb417.appspot.com",
    messagingSenderId: "486399876071",
    appId: "1:486399876071:web:b0ca332071dad1c208fb42",
    measurementId: "G-4W15075WMR"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database};
