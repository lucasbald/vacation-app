import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa41RfbS3DinSWUketfL8SA-GEasAUAM0",
  authDomain: "vacation-app-bb415.firebaseapp.com",
  projectId: "vacation-app-bb415",
  storageBucket: "vacation-app-bb415.appspot.com",
  messagingSenderId: "1033990446754",
  appId: "1:1033990446754:web:79ce445a6c1c364c7041fb",
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({   
    prompt : "select_account "
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
