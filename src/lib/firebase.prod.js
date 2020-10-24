import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyB3tFeED17nNirIqemhQmOFXt6xi8w3R8U",
  authDomain: "netflixclonedata.firebaseapp.com",
  databaseURL: "https://netflixclonedata.firebaseio.com",
  projectId: "netflixclonedata",
  storageBucket: "netflixclonedata.appspot.com",
  messagingSenderId: "781059873845",
  appId: "1:781059873845:web:2331bb7d10157a9356257c",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
