import i18next from "i18next";
import React, { useState, createContext, useContext } from "react";

export const AppState = createContext();

function StateProvider({ children }) {
  const [Lang, setLang] = useState("en");

  const [Mode, setMode] = useState(
    JSON.parse(localStorage.getItem("theme") || false)
  );

  const ChangeMode = () => {
    setMode(!Mode);
    localStorage.setItem("theme", !Mode);
  };

  const changeLanguageHandler = () => {
    const newLange = Lang == "ar" ? "en" : "ar";
    document.dir = document.dir == "ltr" ? "rtl" : "ltr";
    console.log("Hwllo World");
    i18next.changeLanguage(newLange);
    setLang(newLange);
  };
  const state = {
    Mode,
    Lang,
    ChangeMode,
    setLang,
    changeLanguageHandler,
  };
  return <AppState.Provider value={state}>{children}</AppState.Provider>;
}

export const useStateProvider = () => useContext(AppState);
export default StateProvider;
