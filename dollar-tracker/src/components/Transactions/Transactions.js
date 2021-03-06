import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { AppContext } from "../../context/GlobalState";

function Transactions() {
  const { transactions, getTransactions } = useContext(AppContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="Transactions-Container">
      <h3 className="Transactions-Header">Transactions</h3>
      <ul className="Transactions-List">
        {transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
