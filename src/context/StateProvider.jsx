import React, { useState, createContext, useContext } from "react";

export const AppState = createContext();

function StateProvider({ children }) {
  const [Lang, setLang] = useState("en");
  const [Mode, setMode] = useState(
    JSON.parse(localStorage.getItem("theme") || false)
  );

  const ChangeMode = () => {
    setMode(!Mode);
    localStorage.setItem("theme", Mode);
  };
  const state = {
    Mode,
    Lang,
    ChangeMode,
    setLang,
  };
  return <AppState.Provider value={state}>{children}</AppState.Provider>;
}

export const useStateProvider = () => useContext(AppState);
export default StateProvider;
