import React from "react";

import { Table } from "react-bootstrap";

const Tables = ({ data }) => {
  return (
    <Table responsive style={{ color: "white" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Referrence Code</th>
          <th>Transaction Type</th>
          <th>Amount</th>
          <th>Mode of Payment</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.length < 1
          ? "No Transaction(s) Yet"
          : data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.referrenceCode}</td>
                  <td>{item.transactionType}</td>
                  <td>{item.amount}</td>
                  <td>{item.modeOfPayment}</td>
                  <td
                    style={{
                      color: item.status === "pending" ? "red" : "green",
                    }}
                  >
                    {item.status}
                  </td>
                  <td>{item.dateOfTrans}</td>
                </tr>
              );
            })}
      </tbody>
    </Table>
  );
};

export default Tables;
