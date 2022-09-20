import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXOrbNXr99hgywGU6PS2j9XoIUmhRz_k8",
  authDomain: "gpa-calc-helper.firebaseapp.com",
  projectId: "gpa-calc-helper",
  storageBucket: "gpa-calc-helper.appspot.com",
  messagingSenderId: "795354554248",
  appId: "1:795354554248:web:a608b319f380daf7a0243d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
