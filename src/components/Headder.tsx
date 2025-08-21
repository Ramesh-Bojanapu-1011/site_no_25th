import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { ModeToggle } from "./theme/ModeToggle";

const Headder = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [userInitials, setUserInitials] = React.useState(""); // Default initials

  // Logout handler
  const handleLogout = () => {
    // Update lastLoginOut for the current user in "Users" localStorage
    const userData = localStorage.getItem("Current User");
    const usersData = localStorage.getItem("Users");
    if (userData && usersData) {
      try {
        const user = JSON.parse(userData);
        const users = JSON.parse(usersData);
        const now = new Date().toISOString();
        const updatedUsers = users.map((u: any) =>
          u.email === user.email ? { ...u, lastLoginOut: now } : u,
        );
        localStorage.setItem("Users", JSON.stringify(updatedUsers));
      } catch (e) {
        // ignore
      }
    }
    // Clear any local storage, cookies, or session data here
    localStorage.removeItem("Current User");
    // Redirect to login page
    router.push("/auth");
  };

  React.useEffect(() => {
    // Runs only in the browser
    const userData = localStorage.getItem("Current User");
    // console.log("User Data:", userData); // Debugging line

    if (userData) {
      try {
        const user = JSON.parse(userData);
        console.log("Parsed User Data:", user); // Debugging line
        const firstInitial = user.firstName?.[0]?.toUpperCase() || "R";
        const lastInitial = user.lastName?.[0]?.toUpperCase() || "B";
        setUserInitials(firstInitial + lastInitial);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  // Dropdown handler: only one open at a time
  const handleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full sticky caret-transparent top-0 z-50 bg-gradient-to-r from-orange-100 to-yellow-100 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-yellow-100 border-b border-orange-200 dark:border-yellow-700 transition-colors duration-300 shadow-none">
      <nav
        ref={navRef}
        className="mx-auto flex items-center justify-between px-2 sm:px-4 py-2"
      >
        <div className="flex-shrink-0">
          <Link href="/home1" className="flex items-center">
            <Image
              src="/logo-stackly.png"
              alt="Logo"
              width={120}
              height={120}
              className="h-8 w-auto sm:h-10"
            />
          </Link>
        </div>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none ml-2"
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        <div className="flex items-center ml-1 gap-1 sm:ml-2 sm:gap-2">
          <ul
            className={`nav-list flex-col md:flex-row md:flex items-center gap-2 md:gap-5 font-medium text-base md:text-lg transition-all duration-300 bg-white/95 dark:bg-zinc-900/95 md:bg-transparent md:dark:bg-transparent fixed md:static left-0 w-full md:w-auto top-16 md:top-auto shadow-2xl md:shadow-none text-nowrap ${
              menuOpen ? "flex" : "hidden"
            } z-40 md:z-auto p-6 md:p-0 rounded-b-2xl md:rounded-none border-b-2 border-orange-100 dark:border-yellow-900 md:border-none`}
          >
            <li className="relative w-full md:w-auto">
              <button
                onClick={() => handleDropdown("home")}
                className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors w-full md:w-auto justify-between md:justify-center"
              >
                Home <span className="ml-1">&#9662;</span>
              </button>
              {openDropdown === "home" && (
                <ul className="md:absolute left-0 mt-2 w-full md:w-44 bg-white dark:bg-zinc-800 rounded-lg shadow-lg py-2 z-30 md:z-20">
                  <li>
                    <Link href="/home1">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Home 1
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home2">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Home 2
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative w-full md:w-auto">
              <Link href="/about-us">
                <span className="px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  About Us
                </span>
              </Link>
            </li>
            <li className="relative w-full md:w-auto">
              <button
                onClick={() => handleDropdown("services")}
                className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors w-full md:w-auto justify-between md:justify-center"
              >
                Services <span className="ml-1">&#9662;</span>
              </button>
              {openDropdown === "services" && (
                <ul className="md:absolute left-0 mt-2 w-full md:w-56 bg-white dark:bg-zinc-800 rounded-lg shadow-lg py-2 z-30 md:z-20">
                  <li>
                    <Link href="/services">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        All Services
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/food-delivery">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Food Delivery
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/table-booking">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Table Booking
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/catering">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Catering
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/online-menu">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Online Menu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/party-orders">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Party Orders
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservation-management">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        Reservation Management
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative w-full md:w-auto">
              <Link href="/blog">
                <span className="px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  Blog
                </span>
              </Link>
            </li>
            <li className="relative w-full md:w-auto">
              <Link href="/contact-us">
                <span className="px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>

          <div className="relative ml-2">
            <button
              onClick={() => handleDropdown("profile")}
              className="flex items-center gap-2 p-2 rounded-full hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Profile menu"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-400 flex items-center justify-center text-white dark:from-[#ffff] dark:to-[#00000] font-bold text-lg dark:text-[#ffffff]">
                {userInitials}
              </span>
            </button>
            {openDropdown === "profile" && (
              <ul className="absolute right-0 mt-2 w-36 bg-white dark:bg-zinc-800 rounded-lg shadow-lg py-2 z-30">
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer text-red-600 dark:text-red-400 font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Headder;
