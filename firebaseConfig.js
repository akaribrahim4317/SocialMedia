// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwZR2Qt5-XfaJ35GyRToaeB8JsL0YtB6Q',
  authDomain: 'socialmedia-app-8a494.firebaseapp.com',
  projectId: 'socialmedia-app-8a494',
  storageBucket: 'socialmedia-app-8a494.appspot.com',
  messagingSenderId: '378532212993',
  appId: '1:378532212993:web:f7b2072bdef37d9e792b00',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default app;
