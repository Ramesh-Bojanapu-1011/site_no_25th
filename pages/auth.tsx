import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [error, setError] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const now = new Date().toISOString();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setError("Please enter both email and password.");
      return;
    }
    // Retrieve users from localStorage
    const usersStr =
      typeof window !== "undefined" ? localStorage.getItem("Users") : null;
    let users = [];
    if (usersStr) {
      try {
        users = JSON.parse(usersStr);
      } catch {
        users = [];
      }
    }
    if (loginEmail === "admin@enkonix.in" && loginPassword === "admin123") {
      router.push("/admin-dashbord");
    }
    const foundUserIdx = users.findIndex(
      (u: any) => u.email === loginEmail && u.password === loginPassword,
    );
    if (foundUserIdx === -1) {
      setError("Invalid email or password.");
      return;
    }
    // Update lastLoginAt
    const nowLogin = new Date().toISOString();
    users[foundUserIdx].lastLoginAt = nowLogin;
    const foundUser = users[foundUserIdx];
    if (typeof window !== "undefined") {
      localStorage.setItem("Users", JSON.stringify(users));
      localStorage.setItem("Current User", JSON.stringify(foundUser));
    }
    setError("");
    router.push("/home1");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !registerEmail ||
      !registerPassword ||
      !registerFirstName ||
      !registerLastName
    ) {
      setError("Please fill all fields.");
      return;
    }
    // Retrieve users from localStorage
    const usersStr =
      typeof window !== "undefined" ? localStorage.getItem("Users") : null;
    let users = [];
    if (usersStr) {
      try {
        users = JSON.parse(usersStr);
      } catch {
        users = [];
      }
    }
    // Check if user already exists
    if (users.some((u: any) => u.email === registerEmail)) {
      setError("User already exists with this email.");
      return;
    }
    const newUser = {
      email: registerEmail,
      password: registerPassword,
      firstName: registerFirstName,
      lastName: registerLastName,
      registeredAt: now,
      lastLoginAt: null, // Set lastLoginAt to null for new users
      lastLoginOut: null, // Set lastLoginOut to null for new users
    };
    users.push(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("Users", JSON.stringify(users));
      //   localStorage.setItem("Current User", JSON.stringify(newUser));
    }
    setError("");
    alert(`Registered as ${registerEmail}`);
    setIsLogin(true);
    setLoginEmail(registerEmail);
    setLoginPassword("");
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterFirstName("");
    setRegisterLastName("");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br   from-orange-50 to-yellow-100 dark:from-zinc-900  dark:to-zinc-800 transition-colors duration-300 px-2 py-8">
      <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <div className="w-full flex flex-row-reverse not-md:flex-col items-center gap-2.5">
          {/* Image Side */}
          <div className="   md:w-1/2 items-center justify-center">
            {isLogin ? (
              <div key="login-img">
                <Image
                  src="/login-restaurant.jpg"
                  alt="Login"
                  width={1000}
                  height={1000}
                  className="rounded-2xl  shadow-lg object-cover"
                />
              </div>
            ) : (
              <div key="register-img">
                <Image
                  src="/register-restaurant.jpg"
                  alt="Register"
                  width={1000}
                  height={1000}
                  className="rounded-2xl    h-auto shadow-lg object-cover"
                />
              </div>
            )}
          </div>
          {/* Form Side */}
          <div className="w-full md:w-1/2">
            {isLogin ? (
              <form
                onSubmit={handleLogin}
                className="min-w-full"
                key="login-form"
              >
                <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-yellow-400 text-center">
                  Login
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="loginEmail"
                    className="block mb-1 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="loginEmail"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    autoComplete="email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="loginPassword"
                    className="block mb-1 font-medium"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="loginPassword"
                      type={showLoginPassword ? "text" : "password"}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-10"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 dark:text-yellow-400 text-lg focus:outline-none"
                      onClick={() => setShowLoginPassword((prev) => !prev)}
                      aria-label={
                        showLoginPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showLoginPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>
                {error && (
                  <div className="mb-4 text-red-600 text-sm">{error}</div>
                )}
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-md hover:scale-105 transition-all duration-300"
                >
                  Login
                </button>
                <div className="mt-4 text-center text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-orange-600 dark:text-yellow-400 font-semibold hover:underline"
                    onClick={() => {
                      setIsLogin(false);
                      setError("");
                    }}
                  >
                    Register
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleRegister}
                className="min-w-full"
                key="register-form"
              >
                <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-yellow-400 text-center">
                  Register
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="registerFirstName"
                    className="block mb-1 font-medium"
                  >
                    First Name
                  </label>
                  <input
                    id="registerFirstName"
                    type="text"
                    value={registerFirstName}
                    onChange={(e) => setRegisterFirstName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    autoComplete="name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registerName"
                    className="block mb-1 font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    id="registerLastName"
                    type="text"
                    value={registerLastName}
                    onChange={(e) => setRegisterLastName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    autoComplete="name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registerEmail"
                    className="block mb-1 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="registerEmail"
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    autoComplete="email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registerPassword"
                    className="block mb-1 font-medium"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="registerPassword"
                      type={showRegisterPassword ? "text" : "password"}
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-10"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 dark:text-yellow-400 text-lg focus:outline-none"
                      onClick={() => setShowRegisterPassword((prev) => !prev)}
                      aria-label={
                        showRegisterPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showRegisterPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>
                {error && (
                  <div className="mb-4 text-red-600 text-sm">{error}</div>
                )}
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-md hover:scale-105 transition-all duration-300"
                >
                  Register
                </button>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-orange-600 dark:text-yellow-400 font-semibold hover:underline"
                    onClick={() => {
                      setIsLogin(true);
                      setError("");
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
