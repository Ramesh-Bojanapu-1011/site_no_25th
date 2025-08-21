import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const reservationSections = [
  // Section 1: How Reservation Management Works
  {
    title: "How Reservation Management Works",
    desc: "Easily manage all your table bookings and guest reservations in one place.",
    icon: "/table-booking.svg",
    content: (
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-2xl mx-auto py-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-40 blur-lg z-0 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-0">
            {[
              {
                icon: "/calendar.svg",
                label: "View Reservations",
                desc: "See all upcoming and past bookings",
              },
              {
                icon: "/edit.svg",
                label: "Modify Details",
                desc: "Edit guest info, time, or table",
              },
              {
                icon: "/cancel.svg",
                label: "Cancel Reservation",
                desc: "Easily cancel or reschedule",
              },
              {
                icon: "/success.svg",
                label: "Instant Updates",
                desc: "Get real-time confirmation and reminders",
              },
            ].map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={step.label}
                  className={`relative flex w-full justify-${
                    isLeft ? "start" : "end"
                  } md:justify-${
                    isLeft ? "start" : "end"
                  } max-[495px]:justify-center max-[495px]:my-4 group`}
                  style={{
                    animationDelay: `${0.1 + idx * 0.12}s`,
                    animationDuration: "1.1s",
                  }}
                >
                  {idx !== 0 && (
                    <span className="absolute left-1/2 top-0 w-1 h-10 bg-gradient-to-b from-orange-300 via-yellow-200 to-orange-200 dark:from-yellow-800 dark:via-yellow-700 dark:to-yellow-900 opacity-70 z-0 -translate-x-1/2 animate-pulse" />
                  )}
                  <div
                    className={`relative bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-2xl border-4 border-orange-100 dark:border-yellow-900 px-6 py-6 min-w-[220px] max-w-xs flex flex-col items-center gap-2 backdrop-blur-lg transition-transform duration-300 group-hover:scale-105 ${
                      isLeft
                        ? "ml-0 md:-ml-32 md:self-start"
                        : "mr-0 md:-mr-32 md:self-end"
                    }`}
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700 shadow-lg border-2 border-orange-200 dark:border-yellow-800 mb-2 relative animate-bounce-slow">
                      <Image
                        src={step.icon}
                        alt={step.label}
                        width={36}
                        height={36}
                      />
                      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700 opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <span className="font-bold text-orange-700 dark:text-yellow-300 text-base mb-1 text-center group-hover:text-orange-600 dark:group-hover:text-yellow-400 transition-colors">
                      {idx + 1}. {step.label}
                    </span>
                    <span className="text-xs text-zinc-600 dark:text-zinc-300 text-center mb-2">
                      {step.desc}
                    </span>
                  </div>
                  <span className="absolute left-1/2 top-10 w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 dark:from-yellow-700 dark:to-yellow-500 border-4 border-white dark:border-zinc-900 shadow-2xl -translate-x-1/2 z-20 animate-pop-in blur-[1px] max-[495px]:hidden" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
  },
  // Section 2: Key Features
  {
    title: "Key Features",
    desc: "Powerful tools to help you manage reservations efficiently and effortlessly.",
    icon: "/features.svg",
    content: (
      <div className="flex flex-wrap gap-8 justify-center items-center py-4">
        {[
          {
            name: "Calendar View",
            img: "/calendar-view.jpg",
            desc: "Visualize all bookings in a calendar format",
          },
          {
            name: "Table Management",
            img: "/table-management.jpg",
            desc: "Assign, block, or free up tables instantly",
          },
          {
            name: "Guest Profiles",
            img: "/guest-profiles.jpg",
            desc: "Store guest preferences and history",
          },
          {
            name: "Notifications",
            img: "/notifications.jpg",
            desc: "Automated reminders and updates",
          },
        ].map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 w-60"
          >
            <Image
              src={feature.img}
              alt={feature.name}
              width={100}
              height={100}
              className="rounded-xl mb-3 object-cover w-24 h-24"
            />
            <span className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
              {feature.name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-300 mb-2">
              {feature.desc}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  // Section 3: Why Use Reservation Management?
  {
    title: "Why Use Reservation Management?",
    desc: "Enjoy exclusive benefits and a hassle-free experience with our reservation management system.",
    icon: "/success.svg",
    content: (
      <ul className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-200 text-left max-w-xl mx-auto">
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image src="/clock.svg" alt="Time Saving" width={20} height={20} />
          </span>
          Save time and reduce manual work
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="/analytics.svg"
              alt="Analytics"
              width={20}
              height={20}
            />
          </span>
          Get insights and analytics on reservations
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image src="/support.svg" alt="Support" width={20} height={20} />
          </span>
          24/7 support for your team and guests
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image src="/secure.svg" alt="Secure" width={20} height={20} />
          </span>
          Secure and reliable reservation management
        </li>
      </ul>
    ),
  },
  // Section 4: User Testimonials
  {
    title: "User Testimonials",
    desc: "See what our users are saying about managing reservations with us.",
    icon: "/user1.jpg",
    content: (
      <div className="flex flex-wrap gap-6 justify-center">
        {[
          {
            name: "Suresh K.",
            feedback:
              "Managing reservations has never been easier. The calendar view is a game changer!",
            img: "/user1.jpg",
          },
          {
            name: "Anita P.",
            feedback:
              "Love the instant updates and reminders. Our guests appreciate it too!",
            img: "/user2.jpg",
          },
          {
            name: "Ravi S.",
            feedback: "The support team is always available and helpful.",
            img: "/user3.jpg",
          },
          {
            name: "Meena D.",
            feedback:
              "We can now focus on our guests instead of paperwork. Highly recommend!",
            img: "/user4.jpg",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-zinc-800 dark:to-yellow-900 rounded-2xl p-4 w-64 flex flex-col items-center shadow border border-orange-100 dark:border-yellow-900"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={48}
              height={48}
              className="rounded-full mb-2"
            />
            <span className="italic text-zinc-700 dark:text-zinc-200 text-sm mb-1">
              “{item.feedback}”
            </span>
            <span className="font-bold text-orange-600 dark:text-yellow-400 text-xs">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  // Section 5: Get Started CTA
  {
    title: "Start Managing Reservations!",
    desc: "Streamline your reservation process and enhance guest satisfaction. Get started today!",
    icon: "/calendar.svg",
    content: (
      <div
        className="w-full flex flex-col items-center justify-center py-8"
        id="get-started"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
          Try Reservation Management Now!
        </h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
          Experience the convenience and efficiency of our reservation
          management system. Contact us for a demo or to get started.
        </p>
        <Link
          href="/contact-us"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-xl shadow-xl hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 animate-bounce-slow"
        >
          Get a Demo
        </Link>
      </div>
    ),
  },
];

const ReservationManagement = () => {
  return (
    <>
      <Head>
        <title>Reservation Management | Streamline Your Bookings</title>
        <meta
          name="description"
          content="Manage all your table reservations and guest bookings with ease. Powerful features, analytics, and support."
        />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:py-24 mx-auto gap-8 min-h-[100vh]">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              Reservation Management Made Simple
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              Take control of your bookings, guest profiles, and table
              management with our intuitive system. Save time and delight your
              guests!
            </p>
            <Link
              href="#get-started"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1 flex w-[70%] h-auto justify-center z-10">
            <Image
              src="/reservation-management-hero.png"
              alt="Reservation Management"
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl w-full md:max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
            />
          </div>
          {/* Decorative BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-white/0 dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-zinc-900/0 z-0 pointer-events-none" />
        </section>
        {/* Reservation Sections */}
        {reservationSections.map((sec, i) => (
          <section
            key={i}
            className="py-14 px-4   mx-auto flex flex-col items-center text-center gap-6"
          >
            {sec.icon && (
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={sec?.icon}
                  alt={sec?.title}
                  width={56}
                  height={56}
                  className="mb-2"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-2 drop-shadow-lg">
                  {sec?.title}
                </h2>
                <p className="text-zinc-700 dark:text-zinc-200 mb-2 max-w-2xl">
                  {sec?.desc}
                </p>
              </div>
            )}
            <div className="w-full flex justify-center">{sec.content}</div>
          </section>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default ReservationManagement;
