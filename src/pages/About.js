import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHourglass, faFlag } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Header title="ABOUT US" a="/about" />
      <section className="abt">
        <h1>Putting our clients first</h1>
        <p style={{ fontSize: "1.5rem", color: "grey" }}>
          For almost a decade, we’ve been empowering clients by helping them
          take control of their financial lives.
        </p>
        <p>
          BritishFX is one of the finest and the most secure trading company
          found by financial experts and professionals with years of experience
          in financial trading and online technology. <br /> Regulated by the UK
          government and registered with company number 525164, BritishFX is
          completely based on clients’ satisfaction and focus to lead the field
          of BritishFX with innovation and financial security.
        </p>
        <p>
          Since 2017, our success stories have been told again and again, with
          over 44,000 satisfied investors from around the world, benefiting from
          our expertise and efficiency in investing. <br /> We are prepared to
          seize daily opportunities and customers can trade with confidence,
          knowing that their trades are informed by the most updated
          information.
        </p>
        <div className="abt-con">
          <div className="abt-cont">
            <div className="icon">
              <FontAwesomeIcon icon={faLeaf} fontSize="1.5rem" color="white" />
            </div>
            <div className="txt">
              <h4 style={{ marginBottom: "1rem" }}>Philosophy</h4>
              <p>
                We focus on the composition of the total portfolio in relation
                to the client’s risk tolerance and the rate of return
              </p>
            </div>
          </div>
          <div className="abt-cont">
            <div className="icon">
              <FontAwesomeIcon
                icon={faHourglass}
                fontSize="1.5rem"
                color="white"
              />
            </div>
            <div className="txt">
              <h4 style={{ marginBottom: "1rem" }}>Experience</h4>
              <p>
                An abundance of historical evidence supports the conclusion that
                equities are the financial asset of choice for investors seeking
                to fund long-term goals.
              </p>
            </div>
          </div>
          <div className="abt-cont">
            <div className="icon">
              <FontAwesomeIcon icon={faFlag} fontSize="1.5rem" color="white" />
            </div>
            <div className="txt">
              <h4 style={{ marginBottom: "1rem" }}>Diversification</h4>
              <p>
                While diversification cannot eliminate the risk of market loss,
                effective diversification does mitigate risk incurred from a
                single company, sector or country.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Banner
        text="Get up to 30% monthly ROI investing in our financial markets."
        btn="Open an Account"
        a="/signup"
      />
      <QuickLinks />
      <Footer />
    </>
  );
};

export default About;
