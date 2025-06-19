import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({
    orgId: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);

    // You can validate here or call your backend API
    // If login is successful:
    navigate("/assistant");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 md:p-10 border border-slate-200">
        <h2 className="text-3xl font-bold text-blue-600 mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-slate-500 text-sm mb-8 text-center">
          Sign in to your employee portal
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Organization ID
            </label>
            <input
              type="text"
              name="orgId"
              value={form.orgId}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Org ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all shadow-sm"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Need help?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Contact HR
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
