import React, { useState, useContext } from "react";

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Boards from "./components/Boards";
import Table from "./components/Table";
import Footer from "./components/Footer";

import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

import { ValueContext } from "../../Context";

const Withdrawal = () => {
  const { user, setUser } = useContext(ValueContext);
  const [amount, setAmount] = useState("");
  const [payMethod, setPayMethod] = useState("");
  const [wallet, setWallet] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = () => {
    setLoad(!load);
    fetch("https://coherent-alike-patient.glitch.me/user/withdraw", {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        amount: amount,
        modeOfPayment: payMethod,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setUser(json.user))
      .then(() => {
        setAmount("");
        setPayMethod("");
        setWallet("");
        setLoad(!load);
      });
  };

  const handleCancel = () => {
    setAmount("");
    setPayMethod("");
    setWallet("");
  };
  return (
    <>
      <Header />
      <section className="main">
        <SubHeader title="Withdrawal" />
        <Boards />
        <div className="dep-form">
          <div className="dep-hd">
            <h6>Withdrawal Form</h6>
          </div>
          <div className="depp-form">
            <p>Minimum Withdrawal amount: 10USD</p>
            <p style={{ margin: "0px" }}>
              Amount<span style={{ color: "red" }}>**</span>
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="E.g 1000"
                aria-label="Amount"
                aria-describedby="basic-addon1"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faDollarSign} />
              </InputGroup.Text>
            </InputGroup>
            <p style={{ margin: "0px" }}>
              Withdrawal Method<span style={{ color: "red" }}>**</span>
            </p>
            <Form.Select
              aria-label="Default select example"
              value={payMethod}
              onChange={(e) => setPayMethod(e.target.value)}
            >
              <option>Payment Method</option>
              <option value="1">Btc</option>
              <option value="2">Eth</option>
              <option value="3">USDT</option>
            </Form.Select>
            <p style={{ margin: "1rem 0px 0px" }}>
              Withdrawal Details<span style={{ color: "red" }}>**</span>
            </p>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Wallet address or account details"
                style={{ height: "10rem" }}
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
            </Form.Group>
            <div style={{ marginTop: "1rem", textAlign: "end" }}>
              <button
                style={{
                  backgroundColor: "blue",
                  borderRadius: "0.3rem",
                  border: "none",
                  color: "white",
                  marginRight: "0.5rem",
                  padding: "0.8rem 2rem",
                }}
                onClick={handleSubmit}
              >
                Submit {load && <span>...</span>}
              </button>
              <button
                style={{
                  backgroundColor: "grey",
                  borderRadius: "0.3rem",
                  border: "none",
                  color: "white",
                  padding: "0.8rem 2rem",
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="table">
          <h6 style={{ color: "white" }}>Withdrawal Transactions</h6>
          <Table data={user.transactions.withdrawal} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Withdrawal;
