import React, { useContext } from "react";
import { AppContext } from "../context/GlobalState";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Balance() {
  const { transactions } = useContext(AppContext);

  const totalBalance = transactions
    .map(transaction => transaction.amount)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  return (
    <div className="Balance-Container">
      <h4 className="Balance-Header">Your Balance</h4>
      <h1
        className={
          totalBalance < 0 ? "Minus Total-Balance" : "Plus Total-Balance"
        }
      >
        {totalBalance < 0 && "-"}${numberWithCommas(Math.abs(totalBalance))}
      </h1>
    </div>
  );
}

export default Balance;
