import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCFSnFI6Nv-sHt92zSjkKuAbACflVVqm0g",
  authDomain: "presleyplus-a57a7.firebaseapp.com",
  projectId: "presleyplus-a57a7",
  storageBucket: "presleyplus-a57a7.appspot.com",
  messagingSenderId: "550678791510",
  appId: "1:550678791510:web:e0331447b48dae27e582f7",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
