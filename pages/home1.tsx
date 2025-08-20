import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home1 = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 transition-colors duration-300">
      <Headder />
      {/* Hero Section with Background Video */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-20    mx-auto gap-8 overflow-hidden    min-h-screen mb-6">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 dark:opacity-50 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent dark:from-zinc-900/80 to-30% z-10 flex items-center justify-center" />
        <div className="flex-1 text-center md:text-left relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
            Delicious Food Delivered Fast
          </h1>
          <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
            Order from your favorite restaurants and get your meal delivered to
            your door, hot and fresh. Experience the best of food delivery and
            restaurant services!
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-yellow-700"
          >
            View Menu
          </Link>
        </div>
        <div className="flex-1 flex justify-center relative z-20">
          <Image
            src="/hero-food.png"
            alt="Hero Food"
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Section 2: Services - Modern horizontal scroll with icons and lines */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-yellow-400 mb-12">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative max-w-screen">
          {/* Decorative line for desktop */}
          <div
            className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-yellow-200 dark:from-zinc-800 dark:via-yellow-500 dark:to-zinc-800 z-0  "
            style={{ transform: "translateY(-50%)" }}
          />
          {/* Service Items */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-screen    ">
            {[
              {
                icon: "/food-delivery.svg",
                title: "Food Delivery",
                desc: "Get your favorite meals delivered fast and fresh to your doorstep.",
              },
              {
                icon: "/table-booking.svg",
                title: "Table Booking",
                desc: "Reserve your table at top restaurants with just a few clicks.",
              },
              {
                icon: "/catering.svg",
                title: "Catering",
                desc: "Perfect catering solutions for your parties and events.",
              },
              {
                icon: "/online-menu.svg",
                title: "Online Menu",
                desc: "Browse our digital menu and order with ease from anywhere.",
              },
              {
                icon: "/party-orders.svg",
                title: "Party Orders",
                desc: "Order in bulk for your celebrations and gatherings.",
              },
              {
                icon: "/reservation-management.svg",
                title: "Reservation Management",
                desc: "Manage your reservations easily and get instant confirmations.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center mx-4 mb-12 md:mb-0 md:w-1/6 min-w-[90px]"
              >
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-zinc-800 dark:to-yellow-900 p-4 rounded-full shadow-lg mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12"
                    height={48}
                    width={48}
                  />
                </div>
                <h3 className="font-bold   text-lg mb-2 text-orange-700 dark:text-yellow-300">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Restaurants - Responsive horizontal/vertical layout */}
      <section className="py-16 px-4 flex justify-center items-center flex-col mx-auto w-full max-w-screen">
        <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-yellow-400 mb-12">
          Featured Restaurants
        </h2>
        <div className="flex flex-wrap   gap-8 pb-4 w-full max-w-screen justify-center items-stretch">
          {[
            {
              img: "/restaurant1.jpg",
              name: "Spicy Spoon",
              desc: "Authentic Indian cuisine with a modern twist.",
            },
            {
              img: "/restaurant2.jpg",
              name: "Urban Bites",
              desc: "Trendy urban eatery with global flavors and fast delivery.",
            },
            {
              img: "/restaurant3.jpg",
              name: "Green Garden",
              desc: "Fresh, healthy, and delicious vegetarian options.",
            },
          ].map((r, idx) => (
            <div
              key={idx}
              className="w-full sm:w-80 md:w-80 flex-shrink-0 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-zinc-800 dark:to-yellow-900 rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 transition-transform border-4 border-transparent hover:border-orange-400 dark:hover:border-yellow-400 mx-auto"
            >
              <img
                src={r.img}
                alt={r.name}
                className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-orange-200 dark:border-yellow-400"
              />
              <h3 className="font-bold text-xl mb-2 text-orange-700 dark:text-yellow-300">
                {r.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-center">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: How It Works - Vertical timeline */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-yellow-400 mb-12">
          How It Works
        </h2>
        <div className="relative border-l-4 border-orange-300 dark:border-yellow-500 pl-8">
          {[
            {
              icon: "/choose-menu.svg",
              title: "Choose Menu",
              desc: "Browse and select your favorite dishes from our menu.",
            },
            {
              icon: "/place-order.svg",
              title: "Place Order",
              desc: "Place your order easily through our website or app.",
            },
            {
              icon: "/fast-delivery.svg",
              title: "Fast Delivery",
              desc: "Enjoy quick and reliable delivery to your doorstep.",
            },
          ].map((step, idx) => (
            <div key={step.title} className="mb-12 flex items-center group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-zinc-800 dark:to-yellow-900 shadow-lg mr-6 border-4 border-white dark:border-zinc-900 group-hover:scale-110 transition-transform">
                <img src={step.icon} alt={step.title} className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-orange-700 dark:text-yellow-300 mb-1">
                  {idx + 1}. {step.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Customer Reviews - Responsive layout */}
      <section className="py-16 px-4 w-full flex justify-center items-center flex-col mx-auto max-w-screen">
        <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-yellow-400 mb-12">
          What Our Customers Say
        </h2>
        <div className="flex flex-wrap   gap-8 pb-4 w-full max-w-5xl justify-center items-stretch">
          {[
            {
              img: "/user1.jpg",
              name: "Priya S.",
              review:
                "“The food always arrives hot and on time. Love the variety!”",
            },
            {
              img: "/user2.jpg",
              name: "Rahul M.",
              review:
                "“Booking a table is so easy, and the service is fantastic!”",
            },
            {
              img: "/user3.jpg",
              name: "Anjali T.",
              review:
                "“Great catering for our office party. Highly recommend!”",
            },
          ].map((u) => (
            <div
              key={u.name}
              className="w-full sm:w-80 md:w-80 flex-shrink-0 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-zinc-800 dark:to-yellow-900 rounded-3xl p-8 flex flex-col items-center shadow-xl border-4 border-transparent hover:border-orange-400 dark:hover:border-yellow-400 transition-all mx-auto"
            >
              <img
                src={u.img}
                alt={u.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-4 border-orange-200 dark:border-yellow-400"
              />
              <p className="italic text-zinc-700 dark:text-zinc-200 mb-2 text-center">
                {u.review}
              </p>
              <span className="font-bold text-orange-600 dark:text-yellow-400">
                {u.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-4">
          Ready to Order?
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6">
          Sign up or log in to start your delicious journey with us!
        </p>
        <a
          href="/auth"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-yellow-700"
        >
          Get Started
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Home1;
