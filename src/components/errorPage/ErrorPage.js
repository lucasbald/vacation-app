import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div>
        <h3>404 - Page not found</h3>
      </div>

      <p>
        <Link to="/"> Go to Home </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
