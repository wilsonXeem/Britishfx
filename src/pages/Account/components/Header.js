import React, { useState, useEffect } from "react";

import Logo from "../data/logo.png";
import GoogleTrans from "../components/GoogleTrans";
import { Dropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faArrowRotateForward,
  faMoneyBillTransfer,
  faWallet,
  faUsers,
  faUser,
  faQuestionCircle,
  faRightFromBracket,
  faUserCircle,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ marginRight: "0.3rem" }}
                    />
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="/referral">
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{ marginRight: "0.3rem" }}
                    />
                    Referrals
                  </Dropdown.Item>
                  <Dropdown.Item href="/login">
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      style={{ marginRight: "0.3rem" }}
                    />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item me-3 me-lg-0">
              <span
                className="nav-link"
                onClick={() => navigate("/dashboard/")}
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faDashboard}
                  style={{ marginRight: "0.5rem" }}
                />
                Dashboard
              </span>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <span
                className="nav-link"
                onClick={() => navigate("/account-history/")}
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faArrowRotateForward}
                  style={{ marginRight: "0.5rem" }}
                />
                Account History
              </span>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <span
                className="nav-link"
                onClick={() => navigate("/deposit/")}
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faMoneyBillTransfer}
                  style={{ marginRight: "0.5rem" }}
                />
                Deposit
              </span>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <span
                className="nav-link"
                onClick={() => navigate("/withdrawal/")}
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faWallet}
                  style={{ marginRight: "0.5rem" }}
                />
                Withdrawal
              </span>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <span
                className="nav-link"
                onClick={() => navigate("/profile/")}
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginRight: "0.5rem" }}
                />
                My Account
              </span>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <span
                className="nav-link"
                onClick={() => navigate("/referral/")}
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ marginRight: "0.5rem" }}
                />
                Account Referrals
              </span>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <span
                className="nav-link"
                onClick={() => navigate("/help/")}
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  style={{ marginRight: "0.5rem" }}
                />
                Help
              </span>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="/login"
                style={{
                  color: navBg ? "white" : "white",
                  margin: "0px 1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  style={{ marginRight: "0.5rem" }}
                />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div id="intro" className="header"></div>
      </section>
    </header>
  );
};

export default Header;
