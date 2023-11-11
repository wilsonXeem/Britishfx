import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScroll,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import GoogleTrans from "./GoogleTrans";

import Logo from "../data/logo.png";

const Slide = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 700 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <header className="slide">
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
                    color: "white",
                    margin: "0px 1rem",
                    textShadow: "1px 1px 1px black",
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
                    color: "white",
                    margin: "0px 1rem",
                    textShadow: "1px 1px 1px black",
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
                    color: "white",
                    margin: "0px 1rem",
                    textShadow: "1px 1px 1px black",
                  }}
                >
                  Markets
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="prices"
                  style={{
                    color: "white",
                    margin: "0px 1rem",
                    textShadow: "1px 1px 1px black",
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
                    color: "white",
                    margin: "0px 1rem",
                    textShadow: "1px 1px 1px black",
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
                    color: "white",
                    margin: "0px 1rem",
                    textShadow: "1px 1px 1px black",
                  }}
                >
                  Contact
                </a>
              </li>
              <div className="liner"></div>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="login"
                  style={{
                    color: "white",
                    margin: "0px 0.5rem",
                    background: "none",
                    border: "none",
                    width: "7rem",
                    height: "2.5rem",
                    borderRadius: "2rem",
                    textShadow: "1px 1px 1px black",
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
                  href="signup"
                  style={{
                    color: "white",
                    margin: "0px 0.5rem",
                    background: "rgba(0,0,0,0.1)",
                    border: "0.8px solid grey",
                    width: "7rem",
                    height: "2.5rem",
                    borderRadius: "2rem",
                    textAlign: "center",
                    textShadow: "1px 1px 1px black",
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
        <div id="intro" class="bg-image vh-100">
          <Carousel
            autoPlay={true}
            autoFocus={true}
            infiniteLoop={true}
            interval={5000}
            showArrows={false}
            transitionTime={1000}
          >
            <div className="slide1">
              <div className="div">
                <div className="language">
                  <div>
                    <small>
                      We better protect ourselves from risk thanks to
                      international trade and the amount of diversification
                      we've achieved.
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
              <div className="content">
                <div className="con">
                  <h1>Award-winning Products and Trading platforms</h1>
                  <p>
                    Tap into the world's markets and explore endless trading
                    opportunities with tight spreads and no commission.
                  </p>
                </div>
                <div className="tent">
                  <button className="btn">
                    <FontAwesomeIcon
                      icon={faScroll}
                      style={{ marginRight: "0.5rem" }}
                    />
                    <a href="/login" style={{ color: "white" }}>
                      Start Trading
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="slide2">
              <div className="div">
                <div className="language">
                  <div>
                    <small>
                      We better protect ourselves from risk thanks to
                      international trade and the amount of diversification
                      we've achieved.
                    </small>
                    <a href="https://wa.me/447918134307">
                      <FontAwesomeIcon icon={faPhone} /> +447918134307
                    </a>
                    <a href="/contact">
                      <FontAwesomeIcon icon={faMessage} /> LIVE CHAT
                    </a>
                  </div>
                  <div className="google">
                    <div id="google_translate_element"></div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="con">
                  <h1>Multi-regulated Global Forex and Shares Broker </h1>
                  <p>
                    A trusted destination for traders worldwide, with
                    multi-lingual support 24/5.
                  </p>
                </div>
                <div className="tent">
                  <button className="btn">
                    <FontAwesomeIcon
                      icon={faScroll}
                      style={{ marginRight: "0.5rem" }}
                    />
                    <a href="/login" style={{ color: "white" }}>
                      Start Trading
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="slide3">
              <div className="div">
                <div className="language">
                  <div>
                    <small>
                      We better protect ourselves from risk thanks to
                      international trade and the amount of diversification
                      we've achieved.
                    </small>
                    <a href="https://wa.me/447918134307">
                      <FontAwesomeIcon icon={faPhone} /> +447918134307
                    </a>
                    <a href="/contact">
                      <FontAwesomeIcon icon={faMessage} /> LIVE CHAT
                    </a>
                  </div>
                  <div className="google">
                    <div id="google_translate_element"></div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="con">
                  <h1>Your First Steps into the Financial Markets </h1>
                  <p>
                    A range of cutting-edge educational tools designed to
                    develop your trading skills of the financial markets.
                  </p>
                </div>
                <div className="tent">
                  <button className="btn">
                    <FontAwesomeIcon
                      icon={faScroll}
                      style={{ marginRight: "0.5rem" }}
                    />
                    <a href="/login" style={{ color: "white" }}>
                      Start Trading
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </header>
  );
};

export default Slide;
