// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk_G69ttD78yzBnfQu-KPCQiOt-cUef2U",
  authDomain: "game-heaven-1117d.firebaseapp.com",
  projectId: "game-heaven-1117d",
  storageBucket: "game-heaven-1117d.firebasestorage.app",
  messagingSenderId: "609165198409",
  appId: "1:609165198409:web:4d89e0a7885c341f732b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;