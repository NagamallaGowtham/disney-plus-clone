// import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "disneyplus-clone-8e260.firebaseapp.com",
  projectId: "disneyplus-clone-8e260",
  storageBucket: "disneyplus-clone-8e260.appspot.com",
  messagingSenderId: "1074686130502",
  appId: "1:1074686130502:web:9acba2012a00019f1a4d47"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;