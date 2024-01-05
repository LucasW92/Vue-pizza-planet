// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJaBO2Xvb8sbz-4eDm_gUm0gtkiNI2Nrk",
  authDomain: "pizza-planet-a2318.firebaseapp.com",
  projectId: "pizza-planet-a2318",
  storageBucket: "pizza-planet-a2318.appspot.com",
  messagingSenderId: "425552120491",
  appId: "1:425552120491:web:d411ca919f4c93606405ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const dbPizzasRef = collection(db, "pizzas");
export const dbOrdersRef = collection(db, "orders");

export const dbUsersRef = collection(db, "users");
