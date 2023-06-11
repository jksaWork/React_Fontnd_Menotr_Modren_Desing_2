import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import StateProvider, { useStateProvider } from "./context/StateProvider";
import { Header, Counts, GridsComponents, Footer } from "./components";
// import './App.css'
function App() {
  return (
    <StateProvider>
      <AppBody />
    </StateProvider>
  );
}

const AppBody = () => {
  const { Mode } = useStateProvider();
  return (
    <div className={`${Mode && "dark"} `}>
      <Header />
      <Counts />
      <GridsComponents />
      <Footer />
    </div>
  );
};

export default App;
