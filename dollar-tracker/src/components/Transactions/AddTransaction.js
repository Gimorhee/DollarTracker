import React, { useState, useContext } from "react";
import { AppContext } from "../../context/GlobalState";

import { v4 as uuidv4 } from "uuid";

function AddTransaction() {
  const [transaction, setTransaction] = useState({
    text: "",
    amount: 0
  });

  const { text, amount } = transaction;

  const onChange = e => {
    e.preventDefault();

    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const { addTransaction } = useContext(AppContext);

  const onSubmit = e => {
    e.preventDefault();

    const transaction = {
      id: uuidv4(),
      text,
      amount: Number(amount)
    };

    addTransaction(transaction);
  };

  return (
    <div className="AddTransaction-Container">
      <h3 className="AddTransaction-Header">Add new transaction</h3>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-control">
          <label className="AddTransaction-Label" htmlFor="text">
            Text
          </label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={e => onChange(e)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label className="AddTransaction-Label" htmlFor="amount">
            Amount <br />
            <span>
              Expense(-)
            </span> <span className="Label-Breaker">|</span>{" "}
            <span>Expense(-)</span>
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={e => onChange(e)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="Add-Button">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
