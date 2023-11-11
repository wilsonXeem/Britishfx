import React, { useState, useContext, useRef } from "react";

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

const Deposit = () => {
  const { user, setUser } = useContext(ValueContext);
  const [amount, setAmount] = useState("");
  const [payMethod, setPayMethod] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleSubmit = () => {
    if (amount < 1000) setErr(!err);
    else {
      fetch("https://coherent-alike-patient.glitch.me/user/deposit", {
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
          setShow(!show);
        });
    }
  };

  const handleCancel = () => {
    setAmount("");
    setPayMethod("");
  };

  const textAreaRef = useRef(null);
  return (
    <>
      <Header />
      <section className="main">
        <SubHeader title="Deposit" />
        <Boards />
        <div className="dep-form">
          <div className="dep-hd">
            <h6>Deposit Form</h6>
          </div>
          <div className="depp-form">
            {show ? (
              <div>
                <p>
                  Make payment to the appopriate account. Amount will reflect
                  when admin approves payment.
                </p>
                <div className="pmi">
                  <h4>BITCOIN</h4>
                  <div style={{ display: "flex", width: "100%" }}>
                    <form>
                      <input
                        className="input"
                        ref={textAreaRef}
                        value="bc1qlsfh55x8jg22u0a7ylxpvqsmymx5u8gka2f76u"
                        readOnly
                      />
                    </form>
                    {document.queryCommandSupported("copy") && (
                      <div>
                        <button
                          className="b"
                          onClick={() => {
                            setShow1(!show1);
                            navigator.clipboard.writeText(
                              "bc1qlsfh55x8jg22u0a7ylxpvqsmymx5u8gka2f76u"
                            );
                          }}
                        >
                          {show1 ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pmi">
                  <h4>ETHEREUM</h4>
                  <div style={{ display: "flex" }}>
                    <form>
                      <input
                        className="input"
                        ref={textAreaRef}
                        value="0x3354c55D9e84e5B8BA3c1963AD1821eF8A4a27aC"
                        readOnly
                      />
                    </form>
                    {document.queryCommandSupported("copy") && (
                      <div>
                        <button
                          className="b"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "0x3354c55D9e84e5B8BA3c1963AD1821eF8A4a27aC"
                            );
                            setShow2(!show2);
                          }}
                        >
                          {show2 ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pmi">
                  <h4>USDT</h4>
                  <div style={{ display: "flex" }}>
                    <form>
                      <input
                        className="input"
                        ref={textAreaRef}
                        value="1FK4TJqJ9EGH5QYfafcJDpJ6TfVjC9EyM5"
                        readOnly
                      />
                    </form>
                    {document.queryCommandSupported("copy") && (
                      <div>
                        <button
                          className="b"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "1FK4TJqJ9EGH5QYfafcJDpJ6TfVjC9EyM5"
                            );
                            setShow3(!show3);
                          }}
                        >
                          {show3 ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p>Minimum deposit amount: 1000USD</p>
                <p style={{ margin: "0px" }}>
                  Amount<span style={{ color: "red" }}>**</span>
                </p>
                {err && (
                  <p style={{ color: "red", margin: "0px" }}>
                    Minimum amount is 1000USD
                  </p>
                )}
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
                  Payment Method<span style={{ color: "red" }}>**</span>
                </p>
                <Form.Select
                  aria-label="Default select example"
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                >
                  <option>Payment Method</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                </Form.Select>
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
                    Submit
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
            )}
          </div>
        </div>
        <div className="table">
          <h6 style={{ color: "white" }}>Deposit Transactions</h6>
          <Table data={user.transactions.deposit} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Deposit;
