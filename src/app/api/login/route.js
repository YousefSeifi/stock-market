import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  // Extract email and password from the request body
  const { email, password } = await req.json();

  // fetch the user from a database
  const fakeUser = {
    id: 1,
    email: "test@gmail.com",
    password: await bcrypt.hash("123456", 10),
  };

  // Check if the email exists
  if (email !== fakeUser.email) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }

  // Verify that the provided password matches the hashed password
  const isValid = await bcrypt.compare(password, fakeUser.password);

  if (!isValid) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  // Create a JSON Web Token 
  const token = jwt.sign({ userId: fakeUser.id }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

  // Prepare the response for a successful login
  const response = NextResponse.json({ message: "Login successful" });

  // Store the JWT in an HTTP-only cookie to enhance security
  response.cookies.set("token", token, {
    httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
    path: "/", // Cookie is accessible on all routes
    maxAge: 60 * 60 * 24 * 7, // Cookie expires after 7 days
  });

  return response;
}
