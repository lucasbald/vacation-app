import React from "react";
import { GiFlamingo } from "react-icons/gi";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        © Have questions? Found an Issue? Please click here to let us know:
        
        <a href="https://github.com/lucasbald/vacation-app/issues"> Github </a>

        <GiFlamingo />
      </p>

      
    </footer>
  );
};

export default Footer;
