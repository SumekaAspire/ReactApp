import '../App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  const handleNavigateToSignUp = () => {
    navigate("/SignUp");
  };
  const handleNavigateToLogin = () => {
    navigate("/Login");
  };
  return (

    <div
      style={{
          backgroundColor: "peachpuff",
          height: "100vh", 
          width: "100vw", 
          margin: 0,
          padding: 0,
          position: "relative",
          fontFamily: "Arial, sans-serif",
        
      }}
    >
      <div style={contentStyle}>
        <h2>HomePage</h2>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          Sample project is created using React and Node.js!
        </div>

<div style={buttonContainerStyle}>
<button
          onClick={handleNavigateToSignUp}
          style={buttonStyle}
        >
          Register
        </button>
        <button
          onClick={handleNavigateToLogin}
          style={buttonStyle}
        >
          Login
        </button>
</div>
       
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "7px 15px",
  fontSize: "13px",
  cursor: "pointer",
  backgroundColor: "black",
  color: "white",
  borderRadius: "4px",
  margin: "10px",
  
  
};
const buttonContainerStyle = {
  position: "absolute" ,
  top: "50px",
  right: "140px",
  display: "flex",
  gap: "10px",
};
const contentStyle = {
  textAlign: "center" ,
  position: "absolute",
  top: "7%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};


export default HomePage
