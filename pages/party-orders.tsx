import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const partySections = [
  // Section 1: How to Place a Party Order
  {
    title: "How to Place a Party Order",
    desc: "Make your next celebration effortless with our easy party ordering process.",
    icon: "/party.svg",
    content: (
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-2xl mx-auto py-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-40 blur-lg z-0 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-0">
            {[
              {
                icon: "/inquiry.svg",
                label: "Send Inquiry",
                desc: "Share your party details and preferences",
              },
              {
                icon: "/menu.svg",
                label: "Customize Menu",
                desc: "Select dishes and quantities for your guests",
              },
              {
                icon: "/planning.svg",
                label: "Confirm & Schedule",
                desc: "Finalize your order and delivery timing",
              },
              {
                icon: "/delivery.svg",
                label: "Enjoy the Party",
                desc: "We deliver, set up, and you celebrate!",
              },
            ].map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={step.label}
                  className={`relative flex w-full justify-${isLeft ? "start" : "end"} md:justify-${isLeft ? "start" : "end"} max-[495px]:justify-center max-[495px]:my-4 group`}
                  style={{
                    animationDelay: `${0.1 + idx * 0.12}s`,
                    animationDuration: "1.1s",
                  }}
                >
                  {idx !== 0 && (
                    <span className="absolute left-1/2 top-0 w-1 h-10 bg-gradient-to-b from-orange-300 via-yellow-200 to-orange-200 dark:from-yellow-800 dark:via-yellow-700 dark:to-yellow-900 opacity-70 z-0 -translate-x-1/2 animate-pulse" />
                  )}
                  <div
                    className={`relative bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-2xl border-4 border-orange-100 dark:border-yellow-900 px-6 py-6 min-w-[220px] max-w-xs flex flex-col items-center gap-2 backdrop-blur-lg transition-transform duration-300 group-hover:scale-105 ${isLeft ? "ml-0 md:-ml-32 md:self-start" : "mr-0 md:-mr-32 md:self-end"}`}
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
  // Section 2: Party Menu Options
  {
    title: "Party Menu Options",
    desc: "Choose from a variety of party platters and packages to suit your celebration.",
    icon: "/menu.svg",
    content: (
      <div className="flex flex-wrap gap-8 justify-center items-center py-4">
        {[
          {
            name: "Veg Platter",
            img: "/veg-platter.jpg",
            desc: "Assorted vegetarian snacks and starters",
          },
          {
            name: "Non-Veg Platter",
            img: "/nonveg-platter.jpg",
            desc: "A selection of chicken, fish, and meat appetizers",
          },
          {
            name: "Dessert Platter",
            img: "/dessert-platter.jpg",
            desc: "Sweet treats for every guest",
          },
          {
            name: "Custom Package",
            img: "/custom-package.jpg",
            desc: "Tailored menu for your unique party needs",
          },
        ].map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 w-60"
          >
            <Image
              src={cat.img}
              alt={cat.name}
              width={100}
              height={100}
              className="rounded-xl mb-3 object-cover w-24 h-24"
            />
            <span className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
              {cat.name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-300 mb-2">
              {cat.desc}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  // Section 3: Why Choose Party Orders?
  {
    title: "Why Choose Party Orders?",
    desc: "Enjoy exclusive benefits and a stress-free experience when you order for your party with us.",
    icon: "/success.svg",
    content: (
      <ul className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-200 text-left max-w-xl mx-auto">
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="/clock.svg"
              alt="On-Time Delivery"
              width={20}
              height={20}
            />
          </span>
          On-time delivery and professional setup
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="/chef-hat.svg"
              alt="Expert Chefs"
              width={20}
              height={20}
            />
          </span>
          Expert chefs and quality ingredients
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image src="/support.svg" alt="Support" width={20} height={20} />
          </span>
          Dedicated support for your event
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="/discount.svg"
              alt="Special Offers"
              width={20}
              height={20}
            />
          </span>
          Special party packages and discounts
        </li>
      </ul>
    ),
  },
  // Section 4: Party Success Stories
  {
    title: "Party Success Stories",
    desc: "See what our customers are saying about their party order experience.",
    icon: "/user1.jpg",
    content: (
      <div className="flex flex-wrap gap-6 justify-center">
        {[
          {
            name: "Karan D.",
            feedback:
              "The food was a hit at our birthday party! Everything was fresh and delicious.",
            img: "/user1.jpg",
          },
          {
            name: "Priya S.",
            feedback:
              "Loved the variety and the setup was so professional. Highly recommend!",
            img: "/user2.jpg",
          },
          {
            name: "Amit R.",
            feedback:
              "Ordering for our office party was seamless and the team was very helpful.",
            img: "/user3.jpg",
          },
          {
            name: "Meena T.",
            feedback:
              "Great service and tasty food. Will definitely order again for our next event!",
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
  // Section 5: Book Your Party Order CTA
  {
    title: "Book Your Party Order!",
    desc: "Let us handle the food so you can enjoy the celebration. Get a custom quote for your party today!",
    icon: "/calendar.svg",
    content: (
      <div
        className="w-full flex flex-col items-center justify-center py-8"
        id="book-party"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
          Plan Your Party With Us!
        </h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
          From menu selection to delivery and setup, our team will make your
          party food experience seamless and memorable. Reach out for a custom
          quote and let’s make your event special.
        </p>
        <Link
          href="/contact-us"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-xl shadow-xl hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 animate-bounce-slow"
        >
          Get a Party Quote
        </Link>
      </div>
    ),
  },
];

const PartyOrders = () => {
  return (
    <>
      <Head>
        <title>Party Orders | Celebrate with Great Food</title>
        <meta
          name="description"
          content="Order food for your party or event. Custom menus, professional setup, and seamless delivery."
        />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:py-24 mx-auto gap-8 min-h-[100vh]">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              Party Orders Made Easy
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              Celebrate with delicious food, custom menus, and seamless service.
              We make party food ordering simple and stress-free!
            </p>
            <Link
              href="#book-party"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
          <div className="flex-1 flex w-[70%] h-auto justify-center z-10">
            <Image
              src="/party-orders-hero.png"
              alt="Party Orders"
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl w-full md:max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
            />
          </div>
          {/* Decorative BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-white/0 dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-zinc-900/0 z-0 pointer-events-none" />
        </section>
        {/* Party Sections */}
        {partySections.map((sec, i) => (
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

export default PartyOrders;
