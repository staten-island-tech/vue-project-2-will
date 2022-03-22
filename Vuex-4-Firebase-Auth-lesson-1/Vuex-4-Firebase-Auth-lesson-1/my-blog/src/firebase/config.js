import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC86UGeIuhl-nYjGKC3oSE-deek_wDoBdY",
  authDomain: "vuex4-firebase-auth-4ce11.firebaseapp.com",
  projectId: "vuex4-firebase-auth-4ce11",
  storageBucket: "vuex4-firebase-auth-4ce11.appspot.com",
  messagingSenderId: "134298732875",
  appId: "1:134298732875:web:7a5de0019f7447bc8440ce",
  measurementId: "G-GS0NQJWCWK",
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };
