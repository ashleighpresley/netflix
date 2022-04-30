import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAvVMhNBH69ysQJIMkZONuIujvhOmNChj4",
  authDomain: "netflix-be8f5.firebaseapp.com",
  projectId: "netflix-be8f5",
  storageBucket: "netflix-be8f5.appspot.com",
  messagingSenderId: "1803790875",
  appId: "1:1803790875:web:9ac39e79a021ed2eb1e6be",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
