// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXsG_XXfuHerNUlC1vggYwnQZlLQGQhos",
  authDomain: "portfolio-form-4be44.firebaseapp.com",
  projectId: "portfolio-form-4be44",
  storageBucket: "portfolio-form-4be44.firebasestorage.app",
  messagingSenderId: "331881233673",
  appId: "1:331881233673:web:74820e71af09c6d49727d8",
};

// Initialize Firebase
console.log("firebase added");

const app = initializeApp(firebaseConfig);
export default app;
