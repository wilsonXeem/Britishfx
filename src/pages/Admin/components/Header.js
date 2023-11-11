import React, { useState, useEffect } from "react";

import Logo from "../data/logo.png";
import GoogleTrans from "../components/GoogleTrans";
import { Dropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light scrolling-navbar fixed-top shadow-0 nav"
        style={{
          padding: "0px",
          backgroundColor: "black",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/" style={{ width: "100px" }}>
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
                textShadow: navBg ? "2px 0px 2px #fff" : "2px 0px 2px #fff",
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
          <div className="ggg">
            <div className="gg">
              <GoogleTrans />
            </div>
            <div className="prof">
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  style={{ color: "white", padding: "0px" }}
                >
                  <FontAwesomeIcon icon={faUserCircle} fontSize="2rem" />
                </Dropdown.Toggle>
              </Dropdown>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: navBg ? "white" : "white" }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className="collapse navbar-collapse ul"
          id="navbarSupportedContent"
        >
          <h2>Admin Account</h2>
        </div>
      </nav>
      <section>
        <div id="intro" className="header"></div>
      </section>
    </header>
  );
};

export default Header;
