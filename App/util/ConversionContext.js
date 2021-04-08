import React, { createContext } from "react";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  return (
    <ConversionContext.Provider value="Example">
      {children}
    </ConversionContext.Provider>
  );
};
