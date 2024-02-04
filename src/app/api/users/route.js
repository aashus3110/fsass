import connectMongoDB from "@/lib/db";
import { connectToDatabase } from "@/lib/db";

import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { username, email, password, name, age, country } =
    await request.json();

  try {
    await connectMongoDB();

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      name,
      age,
      country,
    });

    return NextResponse.json(
      { message: "User Created", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}



export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const aggregationResult = await db.collection("users").aggregate([
    // Your MongoDB aggregation pipeline here
  ]).toArray();

  res.status(200).json(aggregationResult);
}
