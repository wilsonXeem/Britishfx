import React, { useState, useEffect } from "react";
import Slide from "../components/Slide";
import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import PDF from "../data/britishfx privacy policy.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartLine,
  faCreditCard,
  faGlobe,
  faLock,
  faMoneyBill1Wave,
  faPenToSquare,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

import { MarketOverview, ForexHeatMap } from "react-ts-tradingview-widgets";

const Home = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.innerWidth <= 700 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("resize", changeNavBg);
    return () => {
      window.removeEventListener("resize", changeNavBg);
    };
  }, []);
  return (
    <>
      <Slide />
      <div className="start">
        <h1 style={{ color: "black" }}>Get started today with Britishfx.</h1>
        <div className="info">
          <div className="inf">
            <div className="i">
              <h4>
                <FontAwesomeIcon icon={faGlobe} /> World coverage
              </h4>
              <p>
                Providing services in most of the countries around the world.
              </p>
            </div>
            <div className="i">
              <h4>
                <FontAwesomeIcon icon={faLock} /> Stong Security
              </h4>
              <p>Secure data protection with full data encryption.</p>
            </div>
            <div className="i">
              <h4>
                <FontAwesomeIcon icon={faCreditCard} /> Payment Options
              </h4>
              <p>Popular methods: Bitcoin, Ethereum, Bank transfer.</p>
            </div>
            <div className="i">
              <h4>
                <FontAwesomeIcon icon={faBars} /> High Liquidity
              </h4>
              <p>
                Fast access to high liquidity order book for top currency pairs.
              </p>
            </div>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                textDecoration: "none",
                fontSize: "small",
                width: "6rem",
                height: "1.5rem",
                textAlign: "center",
                borderRadius: "1rem",
                margin: "0px",
                border: "none",
              }}
            >
              <a href="/signup" style={{ color: "white" }}>
                {" "}
                Start Trading
              </a>
            </button>{" "}
            <small>
              Open account for free and start trading Brtish FX Markets!{" "}
              <a href="/signup">Join now!</a>
            </small>
          </div>
        </div>
      </div>
      <section className="security">
        <div className="msk">
          <h5 style={{ color: "blue" }}>Trade with Confidence</h5>
          <h1>New Level of Financial Security</h1>
          <div className="sec">
            <div className="sec1">
              <h4>Our Guarantees</h4>
              <p>
                We are here because we are passionate about open, transparent
                markets and aim to be a major driving force in widespread
                adoption, we are the first and the best in forex trading.
              </p>
            </div>
            <div className="sec2">
              <h4>Our Mission</h4>
              <p>
                Our mission is to empower and enable our traders to gain
                financial independence and trading excellence, when they want
                and how they want it.
              </p>
            </div>
          </div>
          <div className="bb">
            <span>
              <a href="/signup" style={{ color: "white" }}>
                OPEN YOUR ACCOUNT
              </a>
            </span>
          </div>
          <div className="acc">
            <div className="regg">
              <h4>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  fontSize="35px"
                  style={{ marginRight: "2px" }}
                />
                <a href="/signup" style={{ color: "blue" }}>
                  Register
                </a>
              </h4>
              <p>
                Fill in your personal details in our secure online application.
              </p>
            </div>
            <div className="dep">
              <h4>
                <FontAwesomeIcon
                  icon={faMoneyBill1Wave}
                  fontSize="35px"
                  style={{ marginRight: "2px" }}
                />
                <a href="/signup" style={{ color: "blue" }}>
                  Deposit
                </a>
              </h4>
              <p>Make a deposit via Bitcoin, Ethereum, Bank transfer.</p>
            </div>
            <div className="trad">
              <h4>
                <FontAwesomeIcon
                  icon={faChartLine}
                  fontSize="35px"
                  style={{ marginRight: "2px" }}
                />
                <a href="/signup" style={{ color: "blue" }}>
                  Trading
                </a>
              </h4>
              <p>Once approved, trading begins immediately on your account.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="analysis">
        <h1 style={{ color: "black", fontWeight: "bolder", fontSize: "3rem" }}>
          Up to the minute analysis
        </h1>
        <p>
          Inform your decisions with timely dispatches from our large team of
          global analysts.
        </p>
        <div className="tradeview">
          <div>
            <MarketOverview
              showFloatingTooltip
              colorTheme="light"
              height={500}
              width={navBg ? 350 : 400}
            />
          </div>
          <div>
            <ForexHeatMap
              showFloatingTooltip
              colorTheme="light"
              height={500}
              width={navBg ? 350 : 400}
            />
          </div>
        </div>
      </section>
      <section className="legal">
        <div className="xx">
          <FontAwesomeIcon icon={faFileSignature} fontSize={300} />
        </div>
        <div className="legals">
          <h1>The Legal Stuff</h1>
          <p>
            BritishFX is a trading name of BritishFX Financial UK Ltd, a
            financial services company authorised and regulated by the Financial
            Conduct Authority under firm reference number 525164. Our registered
            office is Longbow House, 20 Chiswell Street, London, EC1Y 4TW,
            United Kingdom. <br /> BritishFX is a trading name of BritishFX
            Australia Pty Ltd, a financial services company authorised and
            regulated by the Australian Securities and Investments Commission,
            ACN 158 065 635, AFSL No. 422661. <br /> BritishFX Financial (Pty)
            Ltd, registration number 2018/418755/07, is authorised and regulated
            by the Financial Sector Conduct Authority, FSP No 49846. <br />{" "}
            BritishFX Ltd, registration Number 203493 B, is authorised and
            regulated by the Securities Commission of the Bahamas, SIA-F216.{" "}
            <br /> The information on this site is not directed at residents of
            the United States or any particular country outside the UK,
            Australia, South Africa or The Bahamas and is not intended for
            distribution to, or use by, any person in any country or
            jurisdiction where such distribution or use would be contrary to
            local law or regulation. <br /> * The Loyalty Bonus is not offered
            with BritishFX UK and BritishFX Australia accounts
          </p>
          <p>
            Download and read our <a href={PDF}>Privacy Policy</a>
          </p>
        </div>
      </section>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Home;
