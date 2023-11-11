import React, { useEffect, useState } from "react";
import "./admin.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tables from "./components/Table";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://coherent-alike-patient.glitch.me/user/admin", {
      method: "POST",
      body: JSON.stringify({
        username: "admin",
        password: "bfxadmin",
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json.userss);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="main">
        <div style={{ height: "60vh" }}>
          <Tables data={data} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Dashboard;
