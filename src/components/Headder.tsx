import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import i18n from "../i18n";
import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "./theme/ModeToggle";

const Headder = () => {
  // removed duplicate router declaration
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [userInitials, setUserInitials] = React.useState(""); // Default initials
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [langReady, setLangReady] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

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
          u.email === user.email ? { ...u, lastLoginOut: now } : u
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

  // Language change handler
  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    setOpenDropdown(null);
    // Change i18n language
    if (lang === "English") i18n.changeLanguage("en");
    else if (lang === "Arabic") i18n.changeLanguage("ar");
    else if (lang === "Hebrew") i18n.changeLanguage("he");
    // Persist language selection
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", lang);
      if (lang === "Arabic" || lang === "Hebrew") {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    }
  };

  // Restore language from localStorage on mount and on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      const setLangFromStorage = () => {
        const savedLang = localStorage.getItem("selectedLanguage");
        if (savedLang) {
          setSelectedLanguage(savedLang);
          if (savedLang === "English" && i18n.language !== "en")
            i18n.changeLanguage("en");
          else if (savedLang === "Arabic" && i18n.language !== "ar")
            i18n.changeLanguage("ar");
          else if (savedLang === "Hebrew" && i18n.language !== "he")
            i18n.changeLanguage("he");
          // Set document direction
          if (savedLang === "Arabic" || savedLang === "Hebrew") {
            document.documentElement.dir = "rtl";
          } else {
            document.documentElement.dir = "ltr";
          }
        }
      };
      setLangFromStorage();
      setLangReady(true);
      // Listen for route changes to re-apply language
      const handleRouteChange = () => {
        setLangFromStorage();
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events, i18n.language]);

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

  if (!langReady) return null;

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
                {t("Header_Home")} <span className="ml-1">&#9662;</span>
              </button>
              {openDropdown === "home" && (
                <ul className="md:absolute left-0 mt-2 w-full md:w-44 bg-white dark:bg-zinc-800 rounded-lg shadow-lg py-2 z-30 md:z-20">
                  <li>
                    <Link href="/home1">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Home")} 1
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home2">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Home")} 2
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative w-full md:w-auto">
              <Link href="/about-us">
                <span className="px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  {t("Header_About_Us")}
                </span>
              </Link>
            </li>
            <li className="relative w-full md:w-auto">
              <button
                onClick={() => handleDropdown("services")}
                className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors w-full md:w-auto justify-between md:justify-center"
              >
                {t("Header_Services")} <span className="ml-1">&#9662;</span>
              </button>
              {openDropdown === "services" && (
                <ul className="md:absolute left-0 mt-2 w-full md:w-56 bg-white dark:bg-zinc-800 rounded-lg shadow-lg py-2 z-30 md:z-20">
                  <li>
                    <Link href="/services">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Services")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/food-delivery">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Food_Delivery")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/table-booking">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Table_Booking")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/catering">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Catering")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/online-menu">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Online_Menu")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/party-orders">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Party_Orders")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservation-management">
                      <span className="block px-4 py-2 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded transition-colors cursor-pointer">
                        {t("Header_Reservation_Management")}
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative w-full md:w-auto">
              <Link href="/blog">
                <span className="px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  {t("Header_Blog")}
                </span>
              </Link>
            </li>
            <li className="relative w-full md:w-auto">
              <Link href="/contact-us">
                <span className="px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  {t("Header_Contact_Us")}
                </span>
              </Link>
            </li>
          </ul>

          {/* Language Dropdown */}
          <div className="relative ml-2">
            <button
              onClick={() => handleDropdown("language")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-tr from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-orange-900 text-orange-700 dark:text-yellow-300 font-semibold hover:bg-orange-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Language menu"
            >
              <span className="mr-1">{t(selectedLanguage)}</span>
              <span className="text-lg">&#9662;</span>
            </button>
            {openDropdown === "language" && (
              <ul className="absolute right-0 mt-2 w-36 bg-white dark:bg-zinc-800 rounded-lg shadow-lg py-2 z-30">
                <li>
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className={`block w-full text-left px-4 py-2 rounded transition-colors cursor-pointer ${
                      selectedLanguage === "English"
                        ? "bg-orange-50 dark:bg-yellow-900 font-bold"
                        : "hover:bg-orange-50 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {t("English")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange("Arabic")}
                    className={`block w-full text-left px-4 py-2 rounded transition-colors cursor-pointer ${
                      selectedLanguage === "Arabic"
                        ? "bg-orange-50 dark:bg-yellow-900 font-bold"
                        : "hover:bg-orange-50 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {t("Arabic")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange("Hebrew")}
                    className={`block w-full text-left px-4 py-2 rounded transition-colors cursor-pointer ${
                      selectedLanguage === "Hebrew"
                        ? "bg-orange-50 dark:bg-yellow-900 font-bold"
                        : "hover:bg-orange-50 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {t("Hebrew")}
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Profile Dropdown */}
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
