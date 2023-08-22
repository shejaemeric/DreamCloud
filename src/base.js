import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v9.0.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjBkI_ORboeXGbVCxHm1CHL8ZxSN6oYuc",
  authDomain: "dreamcloud-295a6.firebaseapp.com",
  projectId: "dreamcloud-295a6",
  storageBucket: "dreamcloud-295a6.appspot.com",
  messagingSenderId: "697412524423",
  appId: "1:697412524423:web:710a8e157c39c5e4009b22",
  measurementId: "G-QZ5LME827J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Create a root reference
const storage = getStorage();

export { app, analytics, auth, db, storage, ref, uploadBytes };
export default app;
