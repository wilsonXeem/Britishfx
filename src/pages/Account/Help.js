import React from "react";

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

const Help = () => {
  return (
    <>
      <Header />
      <section className="main">
        <SubHeader title="Contact Support" />
        <div className="help">
          <div className="sup-form">
            <div className="profile-form">
              <h5 style={{ color: "white" }}>Account Details</h5>
              <div style={{ marginTop: "2rem" }}>
                <p style={{ margin: "0px", color: "grey" }}>
                  Your Name<span style={{ color: "red" }}>**</span>
                </p>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Full Name"
                    aria-label="Full Name"
                    aria-describedby="basic-addon1"
                    type="text"
                    style={{ backgroundColor: "black" }}
                  />
                </InputGroup>
                <p style={{ margin: "0px", color: "grey" }}>
                  Your Email<span style={{ color: "red" }}>**</span>
                </p>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Mobile"
                    aria-label="Mobile"
                    aria-describedby="basic-addon1"
                    type="text"
                    style={{ backgroundColor: "black" }}
                  />
                </InputGroup>
                <p style={{ margin: "0px", color: "grey" }}>
                  Mobile<span style={{ color: "red" }}>**</span>
                </p>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Bitcoin Address"
                    aria-label="Bitcoin Address"
                    aria-describedby="basic-addon1"
                    type="text"
                    style={{ backgroundColor: "black" }}
                  />
                </InputGroup>

                <p style={{ margin: "0px", color: "grey" }}>
                  Subject<span style={{ color: "red" }}>**</span>
                </p>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Next of Kin's Name"
                    aria-label="Kin"
                    aria-describedby="basic-addon1"
                    type="text"
                    style={{ backgroundColor: "black" }}
                  />
                </InputGroup>
                <p style={{ margin: "0px", color: "grey" }}>
                  Your Message<span style={{ color: "red" }}>**</span>
                </p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    style={{ backgroundColor: "black", height: "10rem" }}
                  />
                </Form.Group>
                <button className="profile-btn">Update</button>
                <button className="profile-ccn">Cancel</button>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <h5 style={{ color: "white" }}>Contact Info.</h5>
            <div>
              <p>
                Email:{" "}
                <a href="mailto: Support@britishfx.net">
                  Support@britishfx.net
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="https://wa.me/447466499231"> +44 746 6499 231</a>
              </p>
              <p>
                Address: Longbow House, 20 Chiswell Street, London, EC1Y 4TW,
                United Kingdom.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Help;
