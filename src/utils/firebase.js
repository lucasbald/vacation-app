import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa41RfbS3DinSWUketfL8SA-GEasAUAM0",
  authDomain: "vacation-app-bb415.firebaseapp.com",
  projectId: "vacation-app-bb415",
  storageBucket: "vacation-app-bb415.appspot.com",
  messagingSenderId: "1033990446754",
  appId: "1:1033990446754:web:79ce445a6c1c364c7041fb",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account ",
});

const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = async () => {
  try {
    const result = await signOut(auth);
    return result;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, signInWithGooglePopup, logout };
