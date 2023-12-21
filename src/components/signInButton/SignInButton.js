import React from "react";
import { useNavigate } from "react-router-dom";

import "./SignInButton.css";

import { signInWithGooglePopup } from "../../utils/firebase";
import { saveToLocalStorage } from "../../utils/localStorage";

const SignIn = () => {
  const navigate = useNavigate();

  const logGoogleUser = async () => {
    try {
      const {
        user: { displayName, email },
      } = await signInWithGooglePopup();

      saveToLocalStorage({ key: "user", data: { displayName, email } });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error when log in with Google:", error);
      navigate("/error");
    }
  };

  return (
    <div>
      <button onClick={logGoogleUser} className="SignInButton">
        Sign In With Google
      </button>
    </div>
  );
};

export default SignIn;
