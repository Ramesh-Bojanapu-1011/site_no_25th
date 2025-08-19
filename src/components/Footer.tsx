import React from "react";
import Image from "next/image";
import { Locate, Mail, Phone } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-100 to-yellow-100 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-yellow-100 border-t border-orange-200 dark:border-yellow-700 mt-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <Image
            src="/logo-stackly.png"
            alt="Logo"
            className=" mb-4"
            width={112}
            height={28}
          />
          <p className="mb-4 text-sm text-zinc-700 dark:text-zinc-300">
            Delicious food delivered to your door. Experience the best of
            restaurant and food delivery services with us!
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-orange-500 transition-colors"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="text-zinc-500 dark:text-zinc-300"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-500 transition-colors"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="text-zinc-500 dark:text-zinc-300"
              >
                <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.027C7.728 9.38 4.1 7.575 1.671 4.95c-.386.664-.607 1.437-.607 2.262 0 1.56.794 2.936 2.002 3.744a4.48 4.48 0 01-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.102-.775.157-1.186.157-.29 0-.57-.028-.844-.08.57 1.78 2.223 3.075 4.183 3.11A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.253 0 12.77-6.833 12.77-12.76 0-.195-.004-.39-.013-.583A9.22 9.22 0 0024 4.59a8.93 8.93 0 01-2.54.697z"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-500 transition-colors"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="text-zinc-500 dark:text-zinc-300"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/home1"
                className="hover:text-orange-500 transition-colors"
              >
                Home 1
              </a>
            </li>
            <li>
              <a
                href="/home2"
                className="hover:text-orange-500 transition-colors"
              >
                Home 2
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="hover:text-orange-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-orange-500 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-orange-500 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-yellow-400">
            Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/food-delivery"
                className="hover:text-orange-500 transition-colors"
              >
                Food Delivery
              </a>
            </li>
            <li>
              <a
                href="/table-booking"
                className="hover:text-orange-500 transition-colors"
              >
                Table Booking
              </a>
            </li>
            <li>
              <a
                href="/catering"
                className="hover:text-orange-500 transition-colors"
              >
                Catering
              </a>
            </li>
            <li>
              <a
                href="/online-menu"
                className="hover:text-orange-500 transition-colors"
              >
                Online Menu
              </a>
            </li>
            <li>
              <a
                href="/party-orders"
                className="hover:text-orange-500 transition-colors"
              >
                Party Orders
              </a>
            </li>
            <li>
              <a
                href="/reservation-management"
                className="hover:text-orange-500 transition-colors"
              >
                Reservation Management
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-yellow-400">
            Contact Us
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">
                <Locate />
              </span>
              123 Main St, Food City
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">
                <Phone />
              </span>
              <a
                href="tel:+1234567890"
                className="hover:text-orange-500 transition-colors"
              >
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">
                <Mail />
              </span>
              <a
                href="mailto:info@restaurant.com"
                className="hover:text-orange-500 transition-colors"
              >
                info@restaurant.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 border-t border-orange-200 dark:border-yellow-700 text-sm bg-white/80 dark:bg-zinc-900/90 transition-colors duration-300">
        <p className="text-zinc-700 dark:text-yellow-100">
          © {new Date().getFullYear()} Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
