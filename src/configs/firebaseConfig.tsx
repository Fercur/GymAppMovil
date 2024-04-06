// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJSgSvqAAiWpkS55ZoIGDXtbdb_BZ7-c8",
  authDomain: "gymapp-797d1.firebaseapp.com",
  projectId: "gymapp-797d1",
  storageBucket: "gymapp-797d1.appspot.com",
  messagingSenderId: "509655807553",
  appId: "1:509655807553:web:c7c3bb82161fa54fae38c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
/*export const auth=initializeApp(app,{
    persistence: getReactNativvePersistence(ReactNativeAsyncStorage)
});*/
