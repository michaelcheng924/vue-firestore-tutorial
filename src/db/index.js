import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAw_ndgoyuGXWI_yaEWkMVpcwrA4H0fDjs',
  authDomain: 'vue-firestore-tutorial.firebaseapp.com',
  databaseURL: 'https://vue-firestore-tutorial.firebaseio.com',
  projectId: 'vue-firestore-tutorial',
  storageBucket: '',
  messagingSenderId: '541612773912'
}

const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()
