const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
exports.firebaseApp = firebaseApp;
