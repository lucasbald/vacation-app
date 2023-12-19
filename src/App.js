import React from "react";
import "./App.css";
import logo from "./logo.svg";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to My Simple React Website</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Feel free to modify this!</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
