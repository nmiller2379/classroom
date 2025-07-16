"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State to handle error messages
  const [error, setError] = useState("");
  // Initialize router for redirection
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call signIn and set redirect to false to manually handle success and error
    const result = await signIn("credentials", {
      // We handle the redirect manually
      redirect: false,
      email,
      password,
    });

    // Handle successful sign-in
    if (!result.error) {
      setError(""); // Clear any previous errors
      // Redirect to dashboard or any other page
      router.push("/dashboard"); 
    } else {
      // Handle error - set error message
      setError(result.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
    </div>
  );
}
