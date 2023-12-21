import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css"

import { logout } from "../../utils/firebase";
import { getFromLocalStorage, removeFromLocalStorage } from "../../utils/localStorage";


const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userResponse = getFromLocalStorage({ key: "user"});

    if (!userResponse) {
      navigate("/");
    }

    setUserData(userResponse);
  }, [navigate]);

  if (!userData) {
    return null; // loading component if necessary
  }

  const logoutUser = () => {
    logout();
    removeFromLocalStorage({key: "user"});
    navigate("/");
  };

  return (
    <header className="dashboard-container">
      <h1>Dashboard</h1>
      Logged in as
      <div>{userData.displayName}</div>
      <div>{userData.email}</div>
      <button className="logout__btn" onClick={logoutUser}>Logout</button>
    </header>
  );
};

export default Dashboard;
