import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

import Logo from "../data/logo.png";
import GoogleTrans from "./GoogleTrans";

const Header = ({ title, a }) => {
  const [navBg, setNavSize] = useState(false);

  const changeNavSize = () => {
    window.innerWidth <= 700 || window.scrollY >= 50
      ? setNavSize(true)
      : setNavSize(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavSize);
    window.addEventListener("resize", changeNavSize);
    return () => {
      window.removeEventListener("scroll", changeNavSize);
      window.removeEventListener("resize", changeNavSize);
    };
  }, []);
  return (
    <header>
      <nav
        class="navbar navbar-expand-lg navbar-light scrolling-navbar fixed-top shadow-0"
        style={{ padding: "0px", backgroundColor: navBg && "black" }}
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src={Logo}
              alt="britishfx.org"
              width={70}
              style={{ margin: "0px" }}
              className="logoss"
            />
            <span
              style={{
                color: "#1F51FF",
                fontWeight: "bolder",
                fontSize: "35px",
                textShadow: navBg ? "2px 0px 2px #fff" : "2px 0px 2px black",
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
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: navBg ? "white" : "black" }}
          >
            <i class="fas fa-bars"></i>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ backgroundColor: navBg && "black" }}
          >
            <div style={{ width: "3rem" }}></div>
            <ul class="navbar-nav me-auto">
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/"
                  style={{
                    color: navBg ? "white" : "black",
                    margin: "0px 1rem",
                  }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/about"
                  style={{
                    color: navBg ? "white" : "black",
                    margin: "0px 1rem",
                  }}
                >
                  About
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/services"
                  style={{
                    color: navBg ? "white" : "black",
                    margin: "0px 1rem",
                  }}
                >
                  Markets
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/prices"
                  style={{
                    color: navBg ? "white" : "black",
                    margin: "0px 1rem",
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/faq"
                  style={{
                    color: navBg ? "white" : "black",
                    margin: "0px 1rem",
                  }}
                >
                  FAQ
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/contact"
                  style={{
                    color: navBg ? "white" : "black",
                    margin: "0px 1rem",
                  }}
                >
                  Contact
                </a>
              </li>
              <div
                className="line"
                style={{
                  border: navBg ? "1px solid white" : "1px solid black",
                }}
              ></div>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/login"
                  style={{
                    color: navBg ? "white" : "black",
                    // margin: "0px 0.5rem",
                    background: "none",
                    border: "none",
                    width: "7rem",
                    height: "2.5rem",
                    borderRadius: "2rem",
                  }}
                >
                  <i
                    class="fa-solid fa-circle-user"
                    style={{ marginRight: "0.7rem" }}
                  ></i>
                  Log in
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/signup"
                  style={{
                    color: "white",
                    margin: "0px 0.5rem",
                    background: "rgba(0,0,255,0.9)",
                    width: "6rem",
                    height: "2.5rem",
                    borderRadius: "2rem",
                    textAlign: "center",
                  }}
                >
                  Sign up
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div id="intro" class="head">
          <div className="cont">
            <div className="div">
              <div className="language">
                <div>
                  <small>
                    We better protect ourselves from risk thanks to
                    international trade and the amount of diversification we've
                    achieved.
                  </small>
                  <a href="https://wa.me/447918134307">
                    <FontAwesomeIcon icon={faPhone} /> +447918134307
                  </a>
                  <a href="/contact">
                    <FontAwesomeIcon icon={faMessage} /> LIVE CHAT
                  </a>
                </div>
                <div className="google">
                  <GoogleTrans />
                </div>
              </div>
            </div>
            <div className="link">
              <a
                href="/"
                style={{
                  color: "black",
                  fontSize: "small",
                  marginRight: "1rem",
                }}
              >
                HOME
              </a>
              <span
                style={{
                  color: "black",
                  fontSize: "small",
                  marginRight: "1rem",
                }}
              >
                >
              </span>
              <a href={a} style={{ fontSize: "small" }}>
                {title}
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
