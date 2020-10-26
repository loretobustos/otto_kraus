import firebase from 'firebase'
import { firebaseConfig } from '../firebase/firebaseArch.js'


export const firebaseApp = firebase.initializeApp(firebaseConfig)