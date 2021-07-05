import React, { createContext, useContext, useReducer } from "react";

//prepare data layer
export const StateContext = createContext();

//higher order component - grab our app and wrap the app with the state provider - BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


//pull from data layer with useStateValue hook
export const useStateValue = () => useContext(StateContext);