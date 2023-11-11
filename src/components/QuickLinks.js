import React from "react";

import Logo from "../data/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const QuickLinks = () => {
  return (
    <section className="quicklinks">
      <div className="quick">
        <a class="navbar-brand" href="/">
          <img
            src={Logo}
            alt="britishfx.org"
            width={70}
            style={{ margin: "0px" }}
          />
          <span
            style={{
              color: "#1F51FF",
              fontWeight: "bolder",
              fontSize: "35px",
              textShadow: "2px 0px 2px white",
            }}
          >
            British
          </span>
          <span
            style={{
              color: "#fff",
              fontWeight: "bolder",
              fontSize: "35px",
              textShadow: "2px 4px 4px #1F51FF",
            }}
          >
            FX
          </span>
        </a>
        <h5>Trade with financial thinking.</h5>
        <h6>
          <FontAwesomeIcon icon={faPhone} />{" "}
          <a href="https://wa.me/447918134307">+44 791 1834 307</a>
        </h6>
        <h6>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a href="mailto:Support@britishdx.net">Support@britishfx.net</a>
        </h6>
        <h6>
          <FontAwesomeIcon icon={faLocationArrow} /> Longbow House, 20 Chiswell
          Street, London, EC1Y 4TW, United Kingdom.
        </h6>
      </div>
      <div className="links">
        <div>
          <h5>Quick Links</h5>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Forex</a>
          <a href="/services">Stock & Commodities</a>
          <a href="/services">Cryptocurrency</a>
        </div>
        <div>
          <h5>Resources</h5>
          <a href="/faq">FAQ</a>
          <a href="/contact">Help Center</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="/login">Login</a>
          <a href="/signup">Create Account</a>
          <a href="/password-reset">Reset Pasword</a>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
