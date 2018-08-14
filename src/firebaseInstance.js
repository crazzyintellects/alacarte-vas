import firebase from 'firebase';

const config =   {
    databaseURL: "https://alacarte-vas.firebaseio.com"
}

const firebaseInstance = firebase.initializeApp(config);

export default firebaseInstance;