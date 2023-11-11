import React, { useState } from "react";

import Logo from "../data/logo.png";

import GoogleTrans from "../components/GoogleTrans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    fetch("https://coherent-alike-patient.glitch.me/user/veify", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <section className="login">
      <div className="pword-img"></div>
      <div className="log">
        <a class="navbar-brand" href="/">
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
              textShadow: "2px 0px 2px black",
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
        <GoogleTrans />
        <div style={{ margin: "1rem 0px 2rem" }}>
          <p style={{ fontSize: "1.5rem", margin: "0px" }}>Reset Password</p>
          <p style={{ fontSize: "0.8rem", margin: "0px", width: "16rem" }}>
            Please enter your username or email address. You will receive a link
            to confirm your mail then come back to reset your password.
          </p>
        </div>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>
          </InputGroup>
          <button className="sin" onClick={handleSubmit}>
            Submit
          </button>
          <div className="or">
            <hr />
            Or
            <hr />
          </div>
          <button className="ssn" onClick={() => navigate("/login")}>
            Login Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default PasswordReset;
