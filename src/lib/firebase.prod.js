import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA80d5dhXEZozWq9wieH4yR2ADe9BErwQI",
  authDomain: "netflix-clone-2b71d.firebaseapp.com",
  databaseURL: "https://netflix-clone-2b71d.firebaseio.com",
  projectId: "netflix-clone-2b71d",
  storageBucket: "netflix-clone-2b71d.appspot.com",
  messagingSenderId: "1037861642454",
  appId: "1:1037861642454:web:3566a5cf140569ed53a977",
  measurementId: "G-W3Q417SP3Z",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
