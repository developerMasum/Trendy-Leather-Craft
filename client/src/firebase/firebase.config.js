// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEKIpHrNYaUi3HHytBPUVN5smbHiAulwE",
  authDomain: "trendy-leather-craft.firebaseapp.com",
  projectId: "trendy-leather-craft",
  storageBucket: "trendy-leather-craft.appspot.com",
  messagingSenderId: "870839052483",
  appId: "1:870839052483:web:8e773d69599993c7789a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;