// components/Auth/LoginForm.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react"; 
import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null); // State to handle login errors
  const router = useRouter(); // Initialize router for redirection

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 
    setError(null); 

    try {
      const result = await signIn('credentials', {
        redirect: false, 
        email,
        password,
        
      });

      if (result?.error) {
        // Handle login error
        setError(result.error); // Display NextAuth's error message
        console.error("Login failed:", result.error);
      } else if (result?.ok) {
        // Login successful
        console.log("Login successful! Redirecting...");
        // Redirect to your dashboard page
        router.push('/dashboard');
      }
    } catch (err) {
      console.error("An unexpected error occurred during login:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    // Add onSubmit handler to the form
    <form className="w-full" onSubmit={handleSubmit}>
      

      {/* Display error message if any */}
      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
      </div>

      {/* Remember me checkbox */}
      <div className="flex items-center mb-8">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
          Remember me
        </label>
      </div>

      {/* Sign in Button */}
      <button
        type="submit" 
        className="w-full bg-[#0070F3] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
      >
        Sign in
      </button>
    </form>
  );
}