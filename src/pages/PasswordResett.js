import React, { useState } from "react";

import Logo from "../data/logo.png";

import GoogleTrans from "../components/GoogleTrans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
const PasswordResett = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [show, setShow] = useState(false);
  const { email } = useParams();

  const handleSubmit = () => {
    if (password !== conPass) {
      setShow(!show);
    } else {
      fetch(`https://coherent-alike-patient.glitch.me/user/reset/${email}`, {
        method: "POST",
        body: JSON.stringify({
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
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
            Please enter new password.
          </p>
        </div>
        <div>
          {show && <p style={{ color: "red" }}>Password must match!</p>}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faLock} />
            </InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Confirm Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              type="password"
              value={conPass}
              onChange={(e) => setConPass(e.target.value)}
            />
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faLock} />
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

export default PasswordResett;
