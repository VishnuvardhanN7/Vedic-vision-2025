import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import TabletReminder from "./components/Medication";
import SymptomChecker from "./components/SymptomChecker.jsx";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <TabletReminder />
      <SymptomChecker />
    </>
  );
}

export default App;
