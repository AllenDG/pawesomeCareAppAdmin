
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import auth from '@react-native-firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDULS7NZ6JySO3p9wS5Fx_0lN7-4WQIXXU",
  authDomain: "pawesomecare-e537c.firebaseapp.com",
  projectId: "pawesomecare-e537c",
  storageBucket: "pawesomecare-e537c.appspot.com",
  messagingSenderId: "905847748423",
  appId: "1:905847748423:web:7538d720a0d4203e02fe62",
  measurementId: "G-PMSFGKMGX3"
};

if (!auth().apps.length) {
  auth().initializeApp(firebaseConfig);
}


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default auth;