// Import necessary libraries and models
import bcrypt from "bcryptjs";
import connectMongoDB from "@/lib/db";

import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  // Destructure email and password from the request body
  const { email, password } = await request.json();

  // Check if both email and password are provided; otherwise, return an error
  if (!email || !password) {
    return NextResponse.json(
      { error: "Please provide both email and password" },
      { status: 400 }
    );
  }

  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Find the user with the provided email
    const user = await User.findOne({ email });

    // If the user is not found, return a 404 error
    if (!user) {
      return NextResponse.json(
        { error: "User with the provided email not found" },
        { status: 404 }
      );
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the passwords match, generate a JWT token and return a success message
    if (passwordMatch) {
      const token = jwt.sign(
        { email: user.email, name: user.name },
        "your-secret-key", // Replace with a secure and unique secret key
        { expiresIn: "2d" }
      );

      return NextResponse.json(
        { success: true, message: "Login successful", token },
        { status: 200 }
      );
    } else {
      // If the passwords do not match, return a 401 error
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    // If an error occurs, return a 500 error
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
