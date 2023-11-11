import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import Faq from "react-faq-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCirclePlus,
  faQuestion,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

const data = {
  rows: [
    {
      title: "Who is BritishFX liquidity provider?",
      content: `CFx Trading offers outstanding liquidity from trans-institutional networks.`,
    },
    {
      title: "Is BritishFX trading regulated?",
      content:
        "CFx Trading is regulated by the UK's company house and registered with company number 11101313.",
    },
    {
      title: "Can I make this investment through a trust?",
      content: `Yes, you can invest as a Trust. however, the Trust must have more than $5M in assets.`,
    },
    {
      title: "What is the minimum investment balance?",
      content: "Minimum investment balance is the equivalent of $1000.",
    },
    {
      title: "Can funds be added to my plan?",
      content: "Yes, funds can be added to your plan for investment top ups.",
    },
    {
      title: "Are there any commissions for withdrawals?",
      content: "No, withdrawals are totally free.",
    },
    {
      title: "What is ROI?",
      content:
        "Return-On-Investment (ROI), is the expected profit ratio on an investment.",
    },
    {
      title: "What is a trading day?",
      content:
        "A trading day is the time span that a particular stock exchange is open. Trading days never take place on weekends. There are several other special circumstances which would lead to a shortened trading day, or no trading day at all, such as on holidays.",
    },
    {
      title: "What is market cap?",
      content:
        "Market cap—or market capitalization—refers to the total value of all a company's shares of stock. It is calculated by multiplying the price of a stock by its total number of outstanding shares. For example, a company with 20 million shares selling at $50 a share would have a market cap of $1 billion.",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

const Faqs = () => {
  return (
    <>
      <Header title="FAQ" a="faq" />
      <section className="faq">
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "9rem",
            borderRadius: "0.5rem",
          }}
        >
          <h1>Hi, we’re here to help.</h1>
        </div>
        <div className="opt">
          <div style={{ padding: "0px 2rem" }}>
            <h3>How do i join?</h3>
            <div className="op">
              <p>
                You can create a free account from{" "}
                <a href="/signup">our registration page.</a>
              </p>
              <FontAwesomeIcon
                icon={faPersonCirclePlus}
                fontSize="3rem"
                color="grey"
              />
            </div>
          </div>
          <div
            className="to"
            style={{
              padding: "0px 2rem",
            }}
          >
            <h3>How do i deposit funds?</h3>
            <div className="op">
              <p>
                You can deposit funds from the deposit section inside your
                dashboard
              </p>
              <FontAwesomeIcon icon={faQuestion} fontSize="3rem" color="grey" />
            </div>
          </div>
          <div style={{ padding: "0px 2rem" }}>
            <h3>Is my data secure?</h3>
            <div className="op">
              <p>
                Yes, we take a security and privacy of our investors very
                seriously.
              </p>
              <FontAwesomeIcon icon={faUnlock} fontSize="3rem" color="grey" />
            </div>
          </div>
        </div>
        <div className="faqs">
          <Faq data={data} styles={styles} config={config} />
          <div className="fq">
            <p>
              For general inquiries please contact{" "}
              <a href="mailto:Support@britishfx.net">Support@britishfx.net</a>
            </p>
          </div>
        </div>
      </section>
      <Banner
        text="Get up to 30% monthly ROI investing in our financial markets."
        btn="Open an Account"
        a="signup"
      />
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Faqs;
