import React, { createContext } from "react";
import { useReducer } from "react";
import Reducer from "./Reducer";

export const TodoContext = createContext();

const initialState = {
  inputValue: [],
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getInputValue = (input) => {
    dispatch({ type: "GET_VALUE", payload: input })
  };

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

  const value = {
    inputValue: state.inputValue,
    getInputValue,
    removeItem
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
