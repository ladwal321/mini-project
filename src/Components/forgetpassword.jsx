// src/Components/ForgotPassword/ForgotPassword.jsx

import React from 'react';

const ForgotPassword = ({ onToggle }) => {
  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Forgot Password
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Enter your email address to get a password reset link.
      </p>

      <form className="space-y-6">
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full p-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        <button onClick={() => onToggle('login')} className="text-cyan-600 hover:underline">
          Back to Login
        </button>
      </p>
    </div>
  );
};

export default ForgotPassword;