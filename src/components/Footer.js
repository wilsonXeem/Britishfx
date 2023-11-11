import React from "react";
import PDF from "../data/britishfx privacy policy.pdf";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ width: "50%" }}>
        <small>© 2022 BritishFX | All Rights Reserved</small>
      </div>
      <div className="privacy">
        <small>
          <a href={PDF}>Terms & Privacy Policy</a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
