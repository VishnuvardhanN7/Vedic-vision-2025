import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import TabletReminder from "./components/Medication";
import LandingPage from "./components/LandingPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem("authToken")));
  const [userName, setUserName] = useState(localStorage.getItem("authUserName") || "");

  const handleAuthSuccess = ({ token, name }) => {
    localStorage.setItem("authToken", token || "signed-up");
    localStorage.setItem("authUserName", name || "");
    setUserName(name || "");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUserName");
    setIsAuthenticated(false);
    setUserName("");
  };

  if (!isAuthenticated) {
    return <LandingPage onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <>
      <Navbar userName={userName} onLogout={handleLogout} />
      <MainPage />
      <TabletReminder />
    </>
  );
}

export default App;


