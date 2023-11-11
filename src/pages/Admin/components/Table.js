import React from "react";

import { Table } from "react-bootstrap";

const Tables = ({ data }) => {
  // const [deposit, setDeposit] = useState([]);

  // setDeposit(data);
  return (
    <Table responsive style={{ color: "white" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Referrence Code</th>
          <th>Amount</th>
          <th>Mode of Payment</th>
          <th>Status</th>
          <th>Date</th>
          <th>Approve Payment</th>
        </tr>
      </thead>
      <tbody>
        {data.length < 1
          ? "No Transaction(s) Yet"
          : data.map((item, i) => {
              console.log(item);
              return item.deposit.map((ite) => {
                return (
                  <tr key={i}>
                    <td>{ite.deposit.referrenceCode}</td>
                    <td>{ite.deposit.transactionType}</td>
                    <td>{ite.deposit.amount}</td>
                    <td>{ite.deposit.modeOfPayment}</td>
                    <td
                      style={{
                        color:
                          ite.deposit.status === "pending" ? "red" : "green",
                      }}
                    >
                      {item.deposit.status}
                    </td>
                    <td>{ite.deposit.dateOfTrans}</td>
                    <td>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </td>
                  </tr>
                );
              });
            })}
      </tbody>
    </Table>
  );
};

export default Tables;
