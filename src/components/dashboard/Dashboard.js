import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <header className="dashboard-container">
      <h1>Dashboard</h1>

      <p>
        <Link to="/"> Go to Home </Link>
      </p>
    </header>
  );
};

export default Dashboard;