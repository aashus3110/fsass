import connectMongoDB from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function PUT(request, { params }) {
  const {
    newUsername: username,
    newEmail: email,
    newPassword: password,
    newName: name,
    newAge: age,
    newCountry: country,
  } = await request.json();

  try {
    await connectMongoDB();

    // Hash the new password before updating the document
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use the { new: true } option to return the modified document
    const updatedUser = await User.findByIdAndUpdate(
      params.id,
      {
        username,
        email,
        password: hashedPassword,
        name,
        age,
        country,
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const user = await User.findOne({ _id: params.id });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
