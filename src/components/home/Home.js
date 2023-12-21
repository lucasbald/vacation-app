import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css"

import { getFromLocalStorage } from "../../utils/localStorage";

import SignIn from "../signInButton/SignInButton";

const Homepage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userResponse = getFromLocalStorage({ key: "user"});

    if (userResponse) {
      navigate("/dashboard");
    }

  }, [navigate]);

  return (
    <div>
      <h1>Welcome to My Simple Vacation App Website</h1>
      <p>SignIn to check your vacation!</p>
      <SignIn />
    </div>
  );
};

export default Homepage;
