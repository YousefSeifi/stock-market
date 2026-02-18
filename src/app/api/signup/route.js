import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

let users = []; 

export async function POST(req) {
  const { email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ message: "User created" });
}
