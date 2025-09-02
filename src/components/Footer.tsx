import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  Locate,
  Mail,
  Phone,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-gradient-to-r from-orange-100 to-yellow-100 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-yellow-100 border-t border-orange-200 dark:border-yellow-700   transition-colors duration-300">
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
            {t("footer_logo_description")}
          </p>
          <div className="flex gap-3 mt-2">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-orange-500 transition-colors"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-500 transition-colors"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-500 transition-colors"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-yellow-400">
            {t("Footer_Quick_Links")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/home1"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Home")} 1
              </Link>
            </li>
            <li>
              <Link
                href="/home2"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Home")} 2
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_About_Us")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Services")}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Blog")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Contact_Us")}
              </Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-yellow-400">
            {t("Header_Services")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/food-delivery"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Food_Delivery")}
              </Link>
            </li>
            <li>
              <Link
                href="/table-booking"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Table_Booking")}
              </Link>
            </li>
            <li>
              <Link
                href="/catering"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Catering")}
              </Link>
            </li>
            <li>
              <Link
                href="/online-menu"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Online_Menu")}
              </Link>
            </li>
            <li>
              <Link
                href="/party-orders"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Party_Orders")}
              </Link>
            </li>
            <li>
              <Link
                href="/reservation-management"
                className="hover:text-orange-500 transition-colors"
              >
                {t("Header_Reservation_Management")}
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-yellow-400">
            {t("footer_contact_us")}
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">
                <Locate />
              </span>
              {t("footer_location")}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">
                <Phone />
              </span>
              <Link
                href="tel:+1234567890"
                className="hover:text-orange-500 transition-colors"
              >
                +1 234 567 890
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">
                <Mail />
              </span>
              <Link
                href="mailto:info@restaurant.com"
                className="hover:text-orange-500 transition-colors"
              >
                info@restaurant.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 border-t border-orange-200 dark:border-yellow-700 text-sm bg-white/80 dark:bg-zinc-900/90 transition-colors duration-300">
        <p className="text-zinc-700 dark:text-yellow-100">
          © {new Date().getFullYear()} {t("Restaurant")}.{" "}
          {t("All rights reserved.")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
