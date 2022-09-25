// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhB_JX1pbea_0dIqYIh6A1tbCWcUqX4iM",
  authDomain: "learnit-4b054.firebaseapp.com",
  projectId: "learnit-4b054",
  storageBucket: "learnit-4b054.appspot.com",
  messagingSenderId: "147828032275",
  appId: "1:147828032275:web:053de6aeb920f38b2150e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
