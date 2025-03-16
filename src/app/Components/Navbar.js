"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LoginModel from "./LoginModel.js";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const checkLoginStatus = () => {
    const loggedInUser = localStorage.getItem("isLoggedIn");
    if (loggedInUser === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully");
    //return to the homepage after logging out:
    router.push("/");
  };

  return (
    <nav className="sticky top-0 w-full border-b bg-white shadow-md backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-blue-600 font-mono">
          🏏 Cricket Rankings
        </Link>
        <div className="flex space-x-8">
          <Link href="/" className="text-xl text-gray-700 hover:text-blue-600">
            Homepage
          </Link>

          {isLoggedIn ? (
            <Link
              href="/viewlist"
              className="text-xl text-gray-700 hover:text-blue-600"
            >
              Get List
            </Link>
          ) : (
            <Link
              href="/RestrictedFeature"
              className="text-xl text-gray-700 hover:text-blue-600"
            >
              Get List
            </Link>
          )}

          {isLoggedIn ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={() => setIsModelOpen(true)}>Login</Button>
          )}
        </div>
      </div>
      <LoginModel
        isOpen={isModelOpen}
        onClose={() => setIsModelOpen(false)}
        setIsLoggedIn={setIsLoggedIn}
      />
    </nav>
  );
};

export default Navbar;
