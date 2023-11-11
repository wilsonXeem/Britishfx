import React, { useEffect, useState, useContext } from "react";
import Boards from "./components/Boards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";

import {
  TickerTape,
  CryptoCurrencyMarket,
  ForexCrossRates,
} from "react-ts-tradingview-widgets";
import SubHeader from "./components/SubHeader";

import { ValueContext } from "../../Context";

const Dashboard = () => {
  const { user } = useContext(ValueContext);
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.innerWidth <= 700 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("resize", changeNavBg);
    return () => {
      window.removeEventListener("resize", changeNavBg);
    };
  }, []);
  return (
    <>
      <Header />
      <section className="main">
        <SubHeader title="Dashboard" plan={user.investmentPlan} />
        <Boards />
        <div className="tape">
          <TickerTape />
        </div>
        <div className="trade">
          <div>
            <h5>Cryptocurrency Market</h5>
            <CryptoCurrencyMarket
              showFloatingTooltip
              colorTheme="light"
              height={500}
              width={navBg ? 350 : 550}
            />
          </div>
          <div>
            <h5>Forex Rates</h5>
            <ForexCrossRates
              showFloatingTooltip
              colorTheme="light"
              height={500}
              width={navBg ? 350 : 550}
            />
          </div>
        </div>
        <div className="table">
          <h6 style={{ color: "white" }}>Latest Transactions</h6>
          <Table data={user.transactions.allTransactions} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Dashboard;
