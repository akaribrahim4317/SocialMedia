import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAwZR2Qt5-XfaJ35GyRToaeB8JsL0YtB6Q',
  authDomain: 'socialmedia-app-8a494.firebaseapp.com',
  projectId: 'socialmedia-app-8a494',
  storageBucket: 'socialmedia-app-8a494.appspot.com',
  messagingSenderId: '378532212993',
  appId: '1:378532212993:web:f7b2072bdef37d9e792b00',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};
