import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Developer");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("Developer");

      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Name */}
        <div>
          <label className="font-medium block mb-2" htmlFor="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 mb-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-medium block mb-2" htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full px-3 py-2 mb-3 outline-none rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="font-medium block mb-2" htmlFor="password">
            Password
          </label>

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full px-3 py-2 mb-3 outline-none rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border w-full px-3 py-2 mb-3 outline-none rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="font-medium block mb-2" htmlFor="role">
            Role
          </label>

          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border w-full px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {/* Button */}
        <button
          className="bg-blue-600 w-full mb-3 text-white font-medium p-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          type="submit"
        >
          Create Account
        </button>

        <div className="flex justify-center">
          <p>Already have an account?</p>

          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline mx-2"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;