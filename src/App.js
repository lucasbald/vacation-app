import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signInButton/SignInButton";

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <h1>Welcome to My Simple Vacation App Website</h1>
        <p>SignIn to check your vacation!</p>
        <SignIn />
      </main>

      <Footer />
    </div>
  );
};

export default App;
