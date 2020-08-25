// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyAnO0smOvgFQZOuuFC5tK2xZbdegjAgQ3E',
  authDomain: 'huy-firegram.firebaseapp.com',
  databaseURL: 'https://huy-firegram.firebaseio.com',
  projectId: 'huy-firegram',
  storageBucket: 'huy-firegram.appspot.com',
  messagingSenderId: '170648201693',
  appId: '1:170648201693:web:8902e1d700dc0eb21b2e34',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
