import React, { useContext } from "react";

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Table from "./components/Table";
import Footer from "./components/Footer";

import { ValueContext } from "../../Context";

const History = () => {
  const { user } = useContext(ValueContext);
  return (
    <>
      <Header />
      <section className="main">
        <SubHeader title="Account History" />
        <div className="table">
          <h6 style={{ color: "white" }}>Deposit Transactions</h6>
          <Table data={user.transactions.deposit} />
        </div>
        <div className="table">
          <h6 style={{ color: "white" }}>Withdrawal Transactions</h6>
          <Table data={user.transactions.withdrawal} />
        </div>
        <div className="table">
          <h6 style={{ color: "white" }}>All Transactions</h6>
          <Table data={user.transactions.allTransactions}/>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default History;
