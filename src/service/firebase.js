import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCnHOAAkr-M6qQo0RNKfcyN50W4Jxg6CYU",
    authDomain: "profile-2-8bf3b.firebaseapp.com",
    databaseURL: "https://profile-2-8bf3b.firebaseio.com",
    projectId: "profile-2-8bf3b",
    storageBucket: "profile-2-8bf3b.appspot.com",
    messagingSenderId: "673917979616"
}
firebase.initializeApp(config)

export default {
    database: firebase.database()
}