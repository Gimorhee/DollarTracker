import React from "react";

function Transaction({ transaction }) {
  return (
    <div className="Transaction-Container">
      <li className={transaction.amount < 0 ? "Minus" : "Plus"}>
        {transaction.text}{" "}
        <span>
          {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
        </span>
        <button className="Delete-Button">X</button>
      </li>
    </div>
  );
}

export default Transaction;
