import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartColumn,
  faBuildingColumns,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <>
      <Header title="INVESTMENT PACKAGES" a="/prices" />
      <section className="pkgs-cont">
        <h1>Investment Packages</h1>
        <p className="tt" style={{ fontSize: "1.5rem", color: "grey" }}>
          We're constantly updating our investment pricing to make passive
          earnings available to everyone!
        </p>
        <div className="pkgs">
          <div className="pkg">
            <div className="hd">
              <div className="font">
                <FontAwesomeIcon icon={faBars} color="blue" fontSize="1.5rem" />
              </div>
              <h4>BRONZE</h4>
              <p
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "5rem",
                  borderRadius: "1rem",
                  textAlign: "center",
                  fontSize: "small",
                  margin: "0px 0px 0.5rem 5px",
                }}
              >
                $1,000
              </p>
            </div>
            <div style={{ padding: "2rem 1rem" }} className="cc">
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                $1,000 Minimum Capital
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                10% Weekly ROI
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                5% Referral Bonus
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                Free Consulting
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                24/7 Customer Service
              </p>
              <div style={{ textAlign: "center" }}>
                <button>
                  <a href="/signup" style={{ color: "white" }}>
                    Open an Account
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="pkg">
            <div className="hd">
              <div className="font">
                <FontAwesomeIcon
                  icon={faChartColumn}
                  color="blue"
                  fontSize="1.5rem"
                />
              </div>
              <h4>SILVER</h4>
              <p
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "5rem",
                  borderRadius: "1rem",
                  textAlign: "center",
                  fontSize: "small",
                  margin: "0px 0px 0.5rem 5px",
                }}
              >
                $10,000
              </p>
            </div>
            <div style={{ padding: "2rem 1rem" }} className="cc">
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                $10,000 Minimum Capital
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                15% Weekly ROI
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                10% Referral Bonus
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                Free Consulting
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                24/7 Customer Service
              </p>
              <div style={{ textAlign: "center" }}>
                <button>
                  <a href="/signup" style={{ color: "white" }}>
                    Open an Account
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="pkg">
            <div className="hd">
              <div className="font">
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  color="blue"
                  fontSize="1.5rem"
                />
              </div>
              <h4>GOLD</h4>
              <p
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "5rem",
                  borderRadius: "1rem",
                  textAlign: "center",
                  fontSize: "small",
                  margin: "0px 0px 0.5rem 5px",
                }}
              >
                $25,000
              </p>
            </div>
            <div style={{ padding: "2rem 1rem" }} className="cc">
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                $25,000 Minimum Capital
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                20% Weekly ROI
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                10% Referral Bonus
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                Free Consulting
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="blue"
                  style={{ marginRight: "0.5rem" }}
                />
                24/7 Customer Service
              </p>
              <div style={{ textAlign: "center" }}>
                <button>
                  <a href="/signup" style={{ color: "white" }}>
                    Open an Account
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner
        text="Need help choosing a plan? We're here to assist you."
        btn="Contact Us"
        a="/contact"
      />
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Portfolio;
