import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  const { email, password } = await req.json();

  await connectToDatabase();

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }

  // Create a new user with the plain-text password
  const newUser = new User({
    email,
    password, // Plain-text password - the pre('save') hook will hash it
  });

  await newUser.save();

  return new Response(
    JSON.stringify({ message: "User created successfully" }),
    { status: 201 }
  );
}
