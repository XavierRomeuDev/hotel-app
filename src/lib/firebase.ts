import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEqMn3N011NkZY8LlepZudttknDs2PjBQ",
  authDomain: "typescript-hotel-app.firebaseapp.com",
  projectId: "typescript-hotel-app",
  storageBucket: "typescript-hotel-app.appspot.com",
  messagingSenderId: "969516684695",
  appId: "1:969516684695:web:bb3775012bb0bf7ad2a0d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);