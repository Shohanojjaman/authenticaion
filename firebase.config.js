import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdjrPruVhbIAkMVv8xTQFAaGendv1TThc',
  authDomain: 'authentication-5b07c.firebaseapp.com',
  projectId: 'authentication-5b07c',
  storageBucket: 'authentication-5b07c.appspot.com',
  messagingSenderId: '884000906163',
  appId: '1:884000906163:web:fe9b2b43091cec2867c9c6',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
