import React, { useContext } from "react";

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

import { Table } from "react-bootstrap";

import { ValueContext } from "../../Context";

const Referral = () => {
  const { user } = useContext(ValueContext);
  return (
    <>
      <Header />
      <section className="main">
        <SubHeader title="Referral Program" />
        <div className="refer">
          <h6>Referral Summary</h6>
          <div>
            <p>
              Sponsor Link{" "}
              <a
                href={`https://www.britishfx.net/referred-signup/${user.username}`}
              >
                https://www.britishfx.net/referred-signup/sponsor=
                {user.username}
              </a>
            </p>
            <p>Total Referral(s): {user.referral.length}</p>
            <p>Referral Bonus: $0</p>
            <Table responsive style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Date Joined</th>
                </tr>
              </thead>
              <tbody>
                {user.referral.length < 1
                  ? "You have 0 referral(s)"
                  : user.referral.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.email}</td>
                          <td>{item.plan}</td>
                          <td>{item.dateJoined}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Referral;
