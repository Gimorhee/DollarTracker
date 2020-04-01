import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeOrExpense from "./components/IncomeOrExpense";
import Transactions from "./components/Transactions/Transactions";
import AddTransaction from "./components/Transactions/AddTransaction";
import { AppProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <Header />
      <div className="Main-Container">
        <Balance />
        <IncomeOrExpense />
        <Transactions />
        <AddTransaction />
      </div>
    </AppProvider>
  );
}

export default App;
