// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMuVKh22nh6CU0kxB6Z6pw64VUCx-PjY0",
  authDomain: "travel-guru-78448.firebaseapp.com",
  projectId: "travel-guru-78448",
  storageBucket: "travel-guru-78448.appspot.com",
  messagingSenderId: "431857703393",
  appId: "1:431857703393:web:b96415f67ea4d100f45aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;