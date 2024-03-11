import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhFZ0-OUo_0IaY4aYVDme1pIJZYi1lbIQ",
    authDomain: "my-survey-b1e2b.firebaseapp.com",
    projectId: "my-survey-b1e2b",
    storageBucket: "my-survey-b1e2b.appspot.com",
    messagingSenderId: "892393442952",
    appId: "1:892393442952:web:86c3baad46c22bb0af593d"
  };
  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
