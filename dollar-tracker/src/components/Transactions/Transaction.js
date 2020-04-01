import React, { useContext } from "react";
import { AppContext } from "../../context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(AppContext);

  return (
    <div className="Transaction-Container">
      <li className={transaction.amount < 0 ? "Minus" : "Plus"}>
        {transaction.text}{" "}
        <span>
          {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="Delete-Button"
        >
          X
        </button>
      </li>
    </div>
  );
}

export default Transaction;
