// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITE_PRJ_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);

export default {firebaseApp, database};