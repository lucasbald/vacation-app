import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./components/homepage/Home";
import Dashboard from "./components/dashboard/Dashboard";
import ErrorPage from "./components/errorPage/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
