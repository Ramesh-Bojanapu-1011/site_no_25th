import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home1 = () => {
  return (
    <div className="bg-white dark:bg-zinc-900     transition-colors duration-300 caret-transparent">
      <Headder />
      {/* Hero Section with Background Video */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-20    mx-auto gap-8  max-w-screen   min-h-screen mb-6">
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

      {/* Section 2: Our Story - Creative narrative with image */}
      <section className="py-20 px-4 max-w-screen mx-auto flex flex-col md:flex-row items-center gap-12 ">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/our-story.jpg"
            alt="Our Story"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
            width={420}
            height={420}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-extrabold text-orange-600 dark:text-yellow-400 mb-6 drop-shadow-lg">
            Our Story
          </h2>
          <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-2xl text-justify">
            Founded with a passion for great food and seamless experiences, our
            journey began in a small kitchen with a big dream: to bring the best
            flavors of the city to your doorstep. Today, we connect food lovers
            with top restaurants, deliver joy to every home, and make every meal
            memorable—whether you dine in or order out.
          </p>
          <ul className="mb-6 space-y-3">
            <li className="flex items-center gap-3 text-orange-600 dark:text-yellow-400 font-semibold text-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              10+ Years Serving Foodies
            </li>
            <li className="flex items-center gap-3 text-orange-600 dark:text-yellow-400 font-semibold text-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              100+ Partner Restaurants
            </li>
            <li className="flex items-center gap-3 text-orange-600 dark:text-yellow-400 font-semibold text-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Thousands of Happy Customers
            </li>
          </ul>
          <Link
            href={"/about-us"}
            className="inline-block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-orange-300 dark:hover:shadow-yellow-700 border-2 border-orange-200 dark:border-yellow-600 text-lg transition-all duration-300 cursor-pointer"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Section 3: Featured Restaurants - Modern Overlap Card Style */}
      <section className="  flex flex-col items-center mx-auto w-full max-w-screen relative">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 dark:text-yellow-400 mb-14 tracking-tight drop-shadow-lg">
          Featured Restaurants
        </h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch w-full relative ">
          {[
            {
              img: "/restaurant1.jpg",
              name: "Spicy Spoon",
              desc: "Authentic Indian cuisine with a modern twist.",
              badge: "Top Rated",
            },
            {
              img: "/restaurant2.jpg",
              name: "Urban Bites",
              desc: "Trendy urban eatery with global flavors and fast delivery.",
              badge: "Fastest Delivery",
            },
            {
              img: "/restaurant3.jpg",
              name: "Green Garden",
              desc: "Fresh, healthy, and delicious vegetarian options.",
              badge: "Best Veg",
            },
          ].map((r, idx) => (
            <div
              key={idx}
              className={`relative group flex-1 min-w-[200px] max-w-xs mx-auto bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl border-2 border-orange-100 dark:border-yellow-900 p-8 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-orange-200 dark:hover:shadow-yellow-900 cursor-pointer overflow-visible animate-fade-in-up`}
              style={{
                animationDelay: `${0.1 + idx * 0.15}s`,
                animationDuration: "1.1s",
              }}
            >
              {/* Badge */}
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-4 py-1 rounded-full font-bold text-xs shadow-lg border-2 border-orange-200 dark:border-yellow-600 z-20 animate-pop-in">
                {r.badge}
              </span>
              {/* Overlapping Image */}
              <div className="relative -mt-16 mb-4 z-10">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-orange-200 dark:border-yellow-400 shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-yellow-200 dark:ring-yellow-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
              </div>
              <h3 className="font-extrabold text-2xl mb-2 text-orange-700 dark:text-yellow-300 tracking-tight group-hover:text-orange-600 dark:group-hover:text-yellow-400 transition-colors">
                {r.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-base mb-2">
                {r.desc}
              </p>
              <span className="inline-block mt-2 text-xs font-semibold text-orange-400 dark:text-yellow-400 opacity-80 group-hover:opacity-100 transition-opacity">
                View Menu
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: How It Works - Vertical timeline */}
      <section className="py-16 px-4   mx-auto">
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
      <section className="py-12 px-4 max-w-screen mx-auto text-center">
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
