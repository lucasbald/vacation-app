import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header className="header-container">
      <h1>Header Component</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
