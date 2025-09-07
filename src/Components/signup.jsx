import React, { useState } from "react";

const Signup = ({ onToggle }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
    } else {
      setError("");
      alert("Sign up successful!");
    }
  };

  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Sign Up
      </h2>
      <div className="bg-gray-100 p-1.5 rounded-full mb-8 flex justify-between">
        <button
          onClick={() => onToggle('login')}
          className="flex-1 p-2 text-center text-lg font-medium rounded-full transition-colors duration-300 text-gray-500"
        >
          Login
        </button>
        <button
          className="flex-1 p-2 text-center text-lg font-medium rounded-full transition-colors duration-300 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white shadow-md">
          Sign Up
        </button>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 placeholder-gray-400"
        />
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        <button
          type="submit"
          className="w-full p-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <button onClick={() => onToggle('login')} className="text-cyan-600 hover:underline">
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;