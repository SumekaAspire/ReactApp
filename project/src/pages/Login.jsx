import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {AuthContext} from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
const {dispatch} = useContext(AuthContext);
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async(data) => {
   // toast.info(`Username: ${data.username}\nPassword: ${data.password}`);
    console.log(data.username + " " + data.password);
try{
  const response = await axios.post("http://localhost:3001/login",{
    username: data.username, password: data.password
  });

  //if successful
  dispatch({
    type:"LOGIN",
    payload: response.data.token
  })

  localStorage.setItem('token', response.data.token);
  navigate('/Profile')
}catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error("Invalid username or password");
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
    console.error("Login error:", error);
  }

    
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <h2 style={headingStyle}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters',
            },
            maxLength: {
              value: 20,
              message: 'Name cannot exceed 10 characters',
            },
          })}
          style={inputStyle}
        />
        {errors.username && (
          <span style={errorStyle}>{errors.username.message}</span>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
          style={inputStyle}
        />
        {errors.password && (
          <span style={errorStyle}>{errors.password.message}</span>
        )}

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#813d9f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#9b59b6")}
        >
          Login
        </button>
      </form>
            <ToastContainer position="top-center" autoClose={3000} />

    </div>
  );
};



const formStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
  width: "320px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const headingStyle = {
  margin: 0,
  textAlign: "center",
  color: "#333",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s",
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#9b59b6",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "-10px",
  textAlign: "left",
};

export default Login;
