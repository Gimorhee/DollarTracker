import React, { useContext } from "react";
import { AppContext } from "../context/GlobalState";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function IncomeOrExpense() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .map(transaction => transaction.amount > 0 && transaction.amount)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  const expense =
    transactions
      .map(transaction => transaction.amount < 0 && transaction.amount)
      .reduce((a, b) => (a += b), 0)
      .toFixed(2) * -1;

  return (
    <div className="IncomeOrExpense-Container">
      <div>
        <h4 className="Income-Header">Income</h4>
        <p className="Money Plus">${numberWithCommas(income)}</p>
      </div>
      <div>
        <h4 className="Expense-Header">Expense</h4>
        <p className="Money Minus">${numberWithCommas(expense)}.00</p>
      </div>
    </div>
  );
}

export default IncomeOrExpense;
