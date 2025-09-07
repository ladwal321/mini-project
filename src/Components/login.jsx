import React from "react";

const Login = ({ onToggle }) => {
  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Login
      </h2>

      <div className="bg-gray-100 p-1.5 rounded-full mb-8 flex justify-between">
        <button
          className="flex-1 p-2 text-center text-lg font-medium rounded-full transition-colors duration-300 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white shadow-md">
          Login
        </button>
        <button
          onClick={() => onToggle('signup')}
          className="flex-1 p-2 text-center text-lg font-medium rounded-full transition-colors duration-300 text-gray-500"
        >
          Sign Up
        </button>
      </div>

      <form className="space-y-6">
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
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 placeholder-gray-400"
        />
        <div className="text-right">
          <button onClick={() => onToggle('forgotPassword')} className="text-cyan-600 hover:underline">
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
        >
          Login
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{" "}
        <button onClick={() => onToggle('signup')} className="text-cyan-600 hover:underline">
          Sign up now
        </button>
      </p>
    </div>
  );
};

export default Login;