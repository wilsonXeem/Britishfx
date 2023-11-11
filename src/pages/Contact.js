import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import Emailjs from "../components/Emailjs";

const Contact = () => {
  return (
    <>
      <Header title="CONTACT US" a="/contact" />

      <section className="contact">
        <h1>Contact Us</h1>
        <p style={{ fontSize: "1.3rem", color: "grey" }}>
          Do not hesitate to reach out. Just fill in the contact form here and
          we’ll be sure to reply as fast as possible.
        </p>

        <div className="con-con">
          <div className="visit">
            <div style={{ marginBottom: "3rem" }}>
              <h4>Visit our office</h4>
              <p>
                Longbow House, 20 Chiswell Street, London, EC1Y 4TW, United
                Kingdom.
              </p>
            </div>
            <div>
              <h4>Message us</h4>
              <a href="https://wa.me/447918134307"> +44 791 8134 307</a> <br />
              <a href="mailto:Support@britishfx.net">Support@britishfx.net</a>
            </div>
          </div>
          <Emailjs />
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

export default Contact;
