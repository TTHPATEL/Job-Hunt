import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <p>2025 JobPortal. All rights reserved.</p>
        <p>
          Powered by
          <a href="https://github.com/TTHPATEL"> Tapasvi Chhabhaiya</a>
        </p>
        <p>
          <Link to={"/privacy-policy"}>Privacy Policy</Link> |
          <Link to={"/terms-of-service"}> Terms of Service</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
