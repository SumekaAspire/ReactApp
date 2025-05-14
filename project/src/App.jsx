// import { useState } from 'react'

// import { Link } from 'react-router-dom';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//
//       {/* <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>

//       </div> */}
//       <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
//       <h1>Home Page</h1>
//       <p>Welcome to the home page.</p>
//       <Link to="" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
//         Go to About Page
//       </Link>
//     </div>

//     </>
//   )
// }

// export default App

import React from "react";
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
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/HomePage" element={<HomePage />} />

          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
