import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faMoneyBillTransfer,
  faMoneyBill1Wave,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

import { ValueContext } from "../../../Context";

const Boards = () => {
  const { user } = useContext(ValueContext);

  return (
    <div className="dashes">
      <div className="dash">
        <h5>Deposit</h5>
        <div className="mid">
          <div className="fnt-bg">
            <div
              className="fnt"
              style={{ background: "rgba(1, 147, 226, 0.8)" }}
            >
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
            </div>
          </div>
          <div style={{ textAlign: "end", width: "100%" }}>
            <h3>${user.account.deposit}</h3>
            <p>Total Deposit: ${user.account.deposit}</p>
          </div>
        </div>
        <div
          className="butt"
          style={{ background: "rgba(1, 147, 226, 0.4)" }}
        ></div>
      </div>
      <div className="dash">
        <h5>Earnings</h5>
        <div className="mid">
          <div className="fnt-bg">
            <div
              className="fnt"
              style={{ background: "rgba(1, 141, 57, 0.8)" }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </div>
          </div>
          <div style={{ textAlign: "end", width: "100%" }}>
            <h3>${user.account.earnings}</h3>
            <p>Total Earnings: ${user.account.earnings}</p>
          </div>
        </div>
        <div
          className="butt"
          style={{ background: "rgba(1, 141, 57, 0.3)" }}
        ></div>
      </div>
      <div className="dash">
        <h5>Withdrawals</h5>
        <div className="mid">
          <div className="fnt-bg">
            <div
              className="fnt"
              style={{ background: "rgba(255, 255, 0, 0.8)" }}
            >
              <FontAwesomeIcon icon={faMoneyBill1Wave} />
            </div>
          </div>
          <div style={{ textAlign: "end", width: "100%" }}>
            <h3>${user.account.withdrawal}</h3>
            <p>Total Withdrawal: ${user.account.withdrawal}</p>
          </div>
        </div>
        <div
          className="butt"
          style={{ background: "rgba(255, 255, 0, 0.3)" }}
        ></div>
      </div>
      <div className="dash">
        <h5>Balance</h5>
        <div className="mid">
          <div className="fnt-bg">
            <div
              className="fnt"
              style={{ background: "rgba(0, 255, 255, 0.8)" }}
            >
              <FontAwesomeIcon icon={faDashboard} />
            </div>
          </div>
          <div style={{ textAlign: "end", width: "100%" }}>
            <h3>${user.account.balance}</h3>
            <p>Total: ${user.account.balance}</p>
          </div>
        </div>
        <div
          className="butt"
          style={{ background: "rgba(0, 255, 255, 0.5)" }}
        ></div>
      </div>
    </div>
  );
};

export default Boards;
