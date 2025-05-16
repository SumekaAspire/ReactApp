import React,{useContext}from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import { AuthContext } from "./context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/components/HomePage");
  };
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Welcome</h1>
      <p>
        This is the home page. Click the button below to go to the project page.
      </p>
      <button
        onClick={handleNavigate}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        Navigate to Project
      </button>
    </div>
  );
}
function App() {
const {user} = useContext(AuthContext);
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/HomePage" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={user?<Profile />:<Login/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
