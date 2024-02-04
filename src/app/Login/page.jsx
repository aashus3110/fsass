// pages/login.js
"use client";
import Link from "next/link";
import React from "react";
import Login from "@/components/Login"; // Adjust the import path based on your project structure

const LoginPage = () => {
  const handleSuccessfulLogin = () => {
    // Redirect to the home page after successful login
    window.location.href = "/";
  };

  return (
    <div>
      <Login onSuccess={handleSuccessfulLogin} />
      <p className="mt-4 text-sm">
        Don't have an account?
        <Link href="/Signup" className="text-blue-500 hover:underline">
          Create a new account
        </Link>
        .
      </p>
    </div>
  );
};

export default LoginPage;

// components/Login.jsx
