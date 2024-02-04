"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    age: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear corresponding error when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("User created successfully!");
        // Clear form fields
        setFormData({
          username: "",
          email: "",
          password: "",
          name: "",
          age: "",
          country: "",
        });
        // Redirect to the login page
        // Replace the URL with the actual login page URL
        window.location.href = "/Login";
      } else {
        const errorData = await response.json();
        toast.error(`Error creating user: ${errorData.error}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (formData.password.length < 10) {
      errors.password = "Password must be at least 10 characters";
    }

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
      errors.age = "Age must be a positive number";
    }

    if (!formData.country.trim()) {
      errors.country = "Country is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`border-b focus:outline-none focus:border-blue-500 py-1 text-sm ${
                  formErrors.username ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.username && (
                <p className="text-red-500 text-xs mt-1">{formErrors.username}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border-b focus:outline-none focus:border-blue-500 py-1 text-sm ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`border-b focus:outline-none focus:border-blue-500 py-1 text-sm ${
                  formErrors.password ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.password && (
                <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`border-b focus:outline-none focus:border-blue-500 py-1 text-sm ${
                  formErrors.name ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`border-b focus:outline-none focus:border-blue-500 py-1 text-sm ${
                  formErrors.age ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.age && (
                <p className="text-red-500 text-xs mt-1">{formErrors.age}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`border-b focus:outline-none focus:border-blue-500 py-1 text-sm ${
                  formErrors.country ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.country && (
                <p className="text-red-500 text-xs mt-1">{formErrors.country}</p>
              )}
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 text-base font-thin"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-500 hover:underline">
            Login here
          </Link>
          .
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default Signup;
