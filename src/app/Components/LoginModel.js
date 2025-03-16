"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const LoginModel = ({ isOpen, onClose, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);

  async function handleLogin(eOrData) {
    let loginDetails;

    if (eOrData.preventDefault) {
      // Called from the login  button, when what is passed in is an event,submit
      eOrData.preventDefault();
      const userData = new FormData(eOrData.target);
      loginDetails = {
        email: userData.get("email"),
        password: userData.get("password"),
      };
    } else {
      // Called from handleSignUp, where an event is not passed in but data.
      loginDetails = eOrData;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginDetails),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");

      if (setIsLoggedIn) {
        setIsLoggedIn(true);
      }

      onClose();
    } else {
      alert(`Error: ${result.error}`);
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Signup successful! Logging in...");

      // after signingup, the user should also be loggedin
      await handleLogin({
        email: newUser.email,
        password: newUser.password,
      });

      if (setIsLoggedIn) {
        setIsLoggedIn(true);
      }

      onClose();
    } else {
      alert(`Error: ${result.error}`);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-6 min-h-screen overflow-auto">
      <Card className="w-96 h-auto max-h-screen p-4 bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </CardTitle>
        </CardHeader>

        <div className="flex justify-between mb-4 border-b pb-2">
          <button
            className={`w-1/2 text-lg font-medium ${
              isLogin
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-lg font-medium ${
              !isLogin
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <CardContent className="p-6 space-y-6">
          {isLogin ? (
            <form className="space-y-6" onSubmit={handleLogin}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit" className="w-full">
                Login
              </Button>

              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="mt-2 text-blue-600 text-sm hover:underline block mx-auto"
              >
                New user? Sign up instead
              </button>
            </form>
          ) : (
            // sign up if you dont have an account
            <form className="space-y-6" onSubmit={handleSignUp}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              {/* login button in the homepage */}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="mt-2 text-blue-600 text-sm hover:underline block mx-auto"
              >
                Already have an account? Login instead
              </button>
            </form>
          )}
        </CardContent>

        <button
          onClick={onClose}
          className="mt-4 text-gray-500 text-sm hover:underline text-center w-full"
        >
          Close
        </button>
      </Card>
    </div>
  );
};

export default LoginModel;
