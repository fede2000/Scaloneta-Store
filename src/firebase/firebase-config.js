import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAr_ltK5V69WZkxN0wQN7GPtB3LSNVMPpk",
  authDomain: "scaloneta-store.firebaseapp.com",
  projectId: "scaloneta-store",
  storageBucket: "scaloneta-store.appspot.com",
  messagingSenderId: "622347544452",
  appId: "1:622347544452:web:4d9b55db4b5aee9a51dfd1",
  measurementId: "G-CE4V81Q2GZ"
};


export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://nucba-zappi-1917.web.app',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'https://nucba-zappi-1917.web.app',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);