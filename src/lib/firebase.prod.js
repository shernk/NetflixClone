import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAJxuYodttx9QFPMd8yj-dsmI6oIIcKTcM",
  authDomain: "netflix-clone-770bf.firebaseapp.com",
  projectId: "netflix-clone-770bf",
  storageBucket: "netflix-clone-770bf.appspot.com",
  messagingSenderId: "703907708095",
  appId: "1:703907708095:web:3d9125dac36f64ed775a0a",
  measurementId: "G-49QR08ST3F",
};

const firebase = Firebase.initializeApp(config);

//! only upload for the first time then disable, if not data will duplicate
// seedDatabase(firebase);

export { firebase };
