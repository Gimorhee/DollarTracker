import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Basketball", amount: -20 },
    { id: 1, text: "Salary", amount: 100000 },
    { id: 1, text: "Baseball", amount: -20 },
    { id: 1, text: "Computer", amount: -2000 }
  ]
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
