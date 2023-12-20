import { signInWithGooglePopup } from "../../utils/firebase";
import "./SignInButton.css"

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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
