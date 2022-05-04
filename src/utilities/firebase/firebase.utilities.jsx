import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLpYmtxdm24l94s74w8RRUIqQ365xdJh4",
  authDomain: "udemy-crown-clothing-68.firebaseapp.com",
  projectId: "udemy-crown-clothing-68",
  storageBucket: "udemy-crown-clothing-68.appspot.com",
  messagingSenderId: "141743467686",
  appId: "1:141743467686:web:10e935daf4d672a3c8d867",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshop = await getDoc(userDocRef);

  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.log("error creating user :[", err);
    }
  }
  return userDocRef;
};
