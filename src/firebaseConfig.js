// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfZNCccl-oBhhioiLMeagYfhk9RzzaYKk",
  authDomain: "final-test-c0e7f.firebaseapp.com",
  projectId: "final-test-c0e7f",
  storageBucket: "final-test-c0e7f.appspot.com",
  messagingSenderId: "802266223308",
  appId: "1:802266223308:web:99ea6dbf29595833216869",
  measurementId: "G-RB7TCZ58Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig