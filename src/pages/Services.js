import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header title="SERVICES" a="/services" />
      <section className="services">
        <div className="serv">
          <h1>Our Services</h1>
          <p style={{ fontSize: "1.5rem", width: "70%", color: "grey" }}>
            We are here to manage your finance with experience
          </p>
        </div>
        <div className="serve">
          <div>
            <h2>Forex Trading</h2>
            <p>
              Forex, also known as foreign exchange, FX or currency trading, is
              a decentralized global market where all the world's currencies
              trade. The forex market is the largest, most liquid market in the
              world with an average daily trading volume exceeding $5 trillion.
            </p>
            <a href="/login">Get Started >></a>
          </div>
          <div>
            <h2>Stocks & Commodities</h2>
            <p>
              The stock market is built around the simple concept of connecting
              buyers and sellers who wish to trade shares of publicly traded
              companies. It is a marketplace. Each publicly traded company lists
              their shares on a stock exchange.
            </p>
            <a href="/login">Get Started >></a>
          </div>
          <div>
            <h2>Cryptocurrency Investments</h2>
            <p>
              Cryptocurrency investment doesn't depend on your country or
              geography, so it doesn't matter where you are. Bitcoin was the
              first cryptocurrency to be created and is often referred to as the
              best cryptocurrency to invest in.
            </p>
            <a href="/login">Get Started >></a>
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

export default Services;
