import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // alert(`Username: ${data.username}\nPassword: ${data.password}`);
    console.log(data.username + " " + data.password);
    axios
      .post("http://localhost:3001/signup", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        // toast.success("Sign up Success: " + res.data);
        toast.success("Sign up successful! " + res.data);

        setTimeout(() => {
          navigate("/Login");
        }, 2000);

        reset();
      })
      .catch((err) => {
        console.error("Signup error:", err);
        toast.error("Signup failed. Please try again.");
      });

    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
          width: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ margin: 0, textAlign: "center", color: "#333" }}>
          Sign Up
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required!",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Name cannot exceed 20 characters",
            },
          })}
          style={inputStyle}
        />
        {errors.username && (
          <span style={errorStyle}>{errors.username.message}</span>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required!",
            validate: (value) =>
              value.includes("@") || "Password must include-character '@'",
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
          Register
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

// 🔧 Styles
const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
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

export default SignUp;
