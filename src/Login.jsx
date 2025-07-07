import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await axios.post("http://localhost:3000/login", {
      emailId,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 -mt-24">
      <div className="w-full max-w-sm bg-base-100 shadow-xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary">Login</h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={emailId}
              placeholder="you@example.com"
              className="input input-bordered w-full"
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              placeholder="••••••••"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="btn btn-primary w-full shadow-md hover:shadow-lg transition duration-200"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="#" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
