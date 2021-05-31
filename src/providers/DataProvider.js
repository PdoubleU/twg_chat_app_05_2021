import React, { useState, useEffect } from "react";
import roomsData from "../api/roomsData";

export const DataContext = React.createContext({
  isNewMessage: false,
  isTyping: false,
  getData: () => {},
});

export const DataProvider = ({ children }) => {
  const { data, loading, error } = roomsData();
  let isNewMessage = false;
  let isTyping = false;
  const getData = () => {
    return [data, loading, error];
  };

  return (
    <DataContext.Provider
      value={{
        isNewMessage,
        isTyping,
        getData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
