import React, { useContext } from "react";
import { AppContext } from "../../context/GlobalState";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(AppContext);

  return (
    <div className="Transaction-Container">
      <li className={transaction.amount < 0 ? "Minus" : "Plus"}>
        {transaction.text}{" "}
        <span>
          {transaction.amount < 0 ? "-" : "+"}$
          {numberWithCommas(Math.abs(transaction.amount))}
        </span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="Delete-Button"
        >
          X
        </button>
      </li>
    </div>
  );
}

export default Transaction;
