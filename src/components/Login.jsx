"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          toast.success("Login successful!");

          // Store the user token in local storage
          localStorage.setItem("userToken", data.token);

          // Redirect to the home page
          window.location.href = "/";

          // Call the onSuccess callback provided by the parent component
          onSuccess();
        } else {
          const errorData = await response.json();
          toast.error(`Login failed: ${errorData.error}`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };
  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail.trim() === "") {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(inputEmail)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (password.trim().length < 10) {
      setPasswordError("Password must be at least 10 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email:
              <input
                type="email"
                className={`border-b focus:outline-none focus:border-blue-500 py-1 ${
                  emailError ? "border-red-500" : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password:
              <input
                type="password"
                className={`border-b focus:outline-none focus:border-blue-500 py-1 ${
                  passwordError ? "border-red-500" : ""
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              {passwordError && (
                <p className="text-red-500 text-xs">{passwordError}</p>
              )}
            </label>
          </div>
          <div className="mx-auto inline-block">
            <button
              type="button"
              className="bg-blue-500 mx-4 text-white py-1 px-4 rounded-md hover:bg-blue-600 text-base font-thin"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link href="/">
              <button className="mt-4 bg-gray-300 mx-4 text-gray-700 py-1 px-4 rounded-md hover:bg-gray-400 text-base font-thin">
                Go Home
              </button>
            </Link>
          </div>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?
          <Link href="/Signup" className="text-blue-500 hover:underline">
            Create a new account
          </Link>
          .
        </p>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
};

export default Login;
