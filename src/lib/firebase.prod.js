import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCADwvOdV3IGI33oT7EIZ188EEFWao93wY",
  authDomain: "netflix-clone-26022022.firebaseapp.com",
  projectId: "netflix-clone-26022022",
  storageBucket: "netflix-clone-26022022.appspot.com",
  messagingSenderId: "589965929285",
  appId: "1:589965929285:web:3c6330064087b9ecd26c2c",
};

const firebase = Firebase.initializeApp(config);

//! only upload for the first time then disable, if not data will duplicate
// seedDatabase(firebase);

export { firebase };
