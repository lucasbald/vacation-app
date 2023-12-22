import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

import { logout } from "../../utils/firebase";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorage";

import VacationTimeline from "../vacationTimeline/VacationTimeline";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userResponse = getFromLocalStorage({ key: "user" });

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
    removeFromLocalStorage({ key: "user" });
    navigate("/");
  };

  return (
    <header className="dashboard-container">
      <p>Hello, {userData.displayName}</p>

      <VacationTimeline />

      <button className="logout__btn" onClick={logoutUser}>
        Logout
      </button>
    </header>
  );
};

export default Dashboard;
