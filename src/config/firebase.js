
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiaq2zA309cJwN_V8y8v-Mowezax9MeB4",
  authDomain: "flipkart-b0b0d.firebaseapp.com",
  projectId: "flipkart-b0b0d",
  storageBucket: "flipkart-b0b0d.appspot.com",
  messagingSenderId: "995809940470",
  appId: "1:995809940470:web:9c2c0f62afc1a1ff0e2dd7",
  measurementId: "G-VS3FW3PVRX"
};


const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
const db=getFirestore();
export {app,auth,db};