/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import Cookies from 'js-cookie';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBvuMF-3bnFPflgqpkkmXM5kfscPQjdRG0',

  authDomain: 'learning-app-11.firebaseapp.com',

  projectId: 'learning-app-11',

  storageBucket: 'learning-app-11.appspot.com',

  messagingSenderId: '514993795187',

  appId: '1:514993795187:web:e7d102904bba728dabfa06',

  measurementId: 'G-99ESKFJV4S',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const registerWithEmailAndPassword = async (
  name,
  profile_image,
  email,
  password
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // console.log(user);
    // console.log(user.accessToken);
    // console.log(user.uid);
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      profile_image,
      authProvider: 'local',
      email,
    });
    Cookies.set('token', user.accessToken, { expires: 1 });
    Cookies.set('user', JSON.stringify(user), { expires: 1 });
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  app,
  auth,
  db,
  analytics,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout,
};
