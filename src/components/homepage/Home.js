import React from "react";
import { Link } from "react-router-dom";

import "./Home.css"

import SignIn from "../signInButton/SignInButton";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to My Simple Vacation App Website</h1>
      <p>SignIn to check your vacation!</p>
      <SignIn />

      <p className="home-container">
        <Link to="/dashboard"> Go to Dashboard </Link>
      </p>
    </div>
  );
};

export default Homepage;
