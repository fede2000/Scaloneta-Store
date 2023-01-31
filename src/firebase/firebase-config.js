// export const firebaseConfig = {
//   apiKey: 'AIzaSyDX1NJWxLpUcvNn-wsM6_NlFHipzB9A-LM',
//   authDomain: 'nucba-zappi-1917.firebaseapp.com',
//   projectId: 'nucba-zappi-1917',
//   storageBucket: 'nucba-zappi-1917.appspot.com',
//   messagingSenderId: '918103198165',
//   appId: '1:918103198165:web:1a6780f65253735c67555c',
// };


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAr_ltK5V69WZkxN0wQN7GPtB3LSNVMPpk",
  authDomain: "scaloneta-store.firebaseapp.com",
  projectId: "scaloneta-store",
  storageBucket: "scaloneta-store.appspot.com",
  messagingSenderId: "622347544452",
  appId: "1:622347544452:web:4d9b55db4b5aee9a51dfd1",
  measurementId: "G-CE4V81Q2GZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
