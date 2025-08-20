import React, { useEffect } from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";

const services = [
  {
    title: "Food Delivery",
    desc: "Get your favorite meals delivered hot and fresh to your doorstep, fast and hassle-free.",
    icon: "/delivery.svg",
    link: "/services/food-delivery",
    color: "from-orange-400 via-yellow-300 to-orange-600",
  },
  {
    title: "Table Booking",
    desc: "Reserve your table at top restaurants instantly and skip the wait.",
    icon: "/table.svg",
    link: "/services/table-booking",
    color: "from-yellow-400 via-orange-200 to-yellow-600",
  },
  {
    title: "Catering",
    desc: "Delicious catering for all occasions, tailored to your needs and preferences.",
    icon: "/catering.svg",
    link: "/services/catering",
    color: "from-green-400 via-yellow-200 to-green-600",
  },
  {
    title: "Online Menu",
    desc: "Browse and order from our digital menu, updated in real-time.",
    icon: "/menu.svg",
    link: "/services/online-menu",
    color: "from-pink-400 via-yellow-200 to-orange-400",
  },
  {
    title: "Party Orders",
    desc: "Order in bulk for parties and events, with special discounts and combos.",
    icon: "/party.svg",
    link: "/services/party-orders",
    color: "from-purple-400 via-yellow-200 to-pink-500",
  },
  {
    title: "Reservation Management",
    desc: "Seamlessly manage your reservations and bookings online.",
    icon: "/reservation.svg",
    link: "/services/reservation-management",
    color: "from-blue-400 via-yellow-200 to-blue-600",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 60 });
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-900 transition-colors duration-300">
      <Headder />

      {/* 1. Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between px-4 py-20 min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900"
        data-aos="fade-up"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 dark:opacity-50 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/services-hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex-1 flex flex-col justify-center items-start z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-6 drop-shadow-lg animate-slide-in-left">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl dark:text-zinc-200 mb-8 max-w-2xl animate-fade-in-up">
            Experience the best in food delivery, dining, and event services.
            Explore what we offer to make every meal memorable.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center z-20">
          <Image
            src="https://i.pinimg.com/736x/c9/6a/62/c96a62d98b654fffb855265c082e30d0.jpg"
            alt="Services"
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl h-[500px] object-center object-cover "
            data-aos="zoom-in"
            style={{ animationDelay: "0.5s", animationDuration: "1.2s" }}
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* 2. Services Grid Section */}
      <section
        className="py-16 px-4 w-full max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-12 text-center animate-fade-in-up">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              className={`group relative flex flex-col items-center justify-between bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-orange-100 dark:border-yellow-900 p-8 hover:scale-105 hover:shadow-orange-200 dark:hover:shadow-yellow-900 transition-all duration-500 cursor-pointer animate-fade-in-up`}
              data-aos="zoom-in"
              style={{
                animationDelay: `${0.1 + idx * 0.1}s`,
                animationDuration: "1.1s",
              }}
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-lg mb-6 animate-pop-in`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold text-orange-600 dark:text-yellow-400 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-200 text-center mb-4">
                {service.desc}
              </p>
              <Link href={service.link} key={service.title}>
                <span className="inline-block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg  transition-all duration-300 group-hover:scale-105 group-hover:shadow-orange-300 dark:group-hover:shadow-yellow-700 border-2 border-orange-200 dark:border-yellow-600">
                  Learn More
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section
        className="relative py-20 px-4 w-full flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto overflow-visible"
        data-aos="fade-up"
      >
        {/* Diagonal split background */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-orange-50 via-yellow-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900 rounded-3xl shadow-2xl -z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}></span>
        {/* Left: Glassmorphism card with frosted border and floating badges */}
        <div className="flex-1 flex flex-col items-start z-10" data-aos="fade-right">
          <div className="relative w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-4 border-orange-100 dark:border-yellow-900 px-10 py-12 animate-fade-in-up overflow-visible">
            <h2 className="text-4xl font-extrabold text-orange-600 dark:text-yellow-400 mb-10 tracking-tight animate-slide-in-left">
              Why Choose Us?
            </h2>
            <ul className="flex flex-col gap-7">
              <li className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-600 text-white text-2xl shadow-xl border-4 border-white dark:border-zinc-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                </span>
                <span className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-semibold">Fast, reliable, and contactless delivery</span>
              </li>
              <li className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-orange-200 to-yellow-600 text-white text-2xl shadow-xl border-4 border-white dark:border-zinc-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-semibold">Wide range of cuisines and restaurants</span>
              </li>
              <li className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-yellow-200 to-green-600 text-white text-2xl shadow-xl border-4 border-white dark:border-zinc-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </span>
                <span className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-semibold">Easy online reservations and management</span>
              </li>
              <li className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-yellow-200 to-orange-400 text-white text-2xl shadow-xl border-4 border-white dark:border-zinc-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V5m0 11v3m7-7h3m-17 0H2" /></svg>
                </span>
                <span className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-semibold">Custom catering for every occasion</span>
              </li>
              <li className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 via-yellow-200 to-pink-500 text-white text-2xl shadow-xl border-4 border-white dark:border-zinc-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z" /></svg>
                </span>
                <span className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-semibold">Exclusive party and group order deals</span>
              </li>
              <li className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-yellow-200 to-blue-600 text-white text-2xl shadow-xl border-4 border-white dark:border-zinc-900">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.414 1.414M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 7.364l-1.414-1.414M6.343 6.343L4.929 4.929" /></svg>
                </span>
                <span className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-semibold">24/7 customer support</span>
              </li>
            </ul>
            {/* Floating decorative badge */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-xl animate-bounce border-2 border-orange-200 dark:border-yellow-600 z-20">
              Trusted by Thousands
            </span>
          </div>
        </div>
        {/* Right: Layered image card with glowing border and floating sparkles */}
        <div className="flex-1 flex justify-center items-center z-10" data-aos="zoom-in">
          <div className="relative w-80 md:w-96 h-80 md:h-96 flex items-center justify-center rounded-3xl bg-white/90 dark:bg-zinc-900/90 shadow-2xl border-4 border-orange-100 dark:border-yellow-900 overflow-visible">
            {/* Glowing border ring */}
            <span className="absolute -inset-6 rounded-full bg-gradient-to-tr from-orange-400 via-yellow-200 to-orange-600 dark:from-yellow-700 dark:via-orange-500 dark:to-yellow-300 blur-3xl opacity-40 animate-pulse-slow z-0"></span>
            <img
              src="/choose-us.svg"
              alt="Why Choose Us"
              className="w-56 md:w-72 h-56 md:h-72 object-contain rounded-2xl shadow-xl animate-pop-in relative z-10"
              style={{ animationDelay: '0.7s', animationDuration: '1.2s' }}
            />
            {/* Floating sparkles */}
            <span className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-300 dark:bg-yellow-800 rounded-full blur-md opacity-60 animate-pulse-slow"></span>
            <span className="absolute bottom-0 right-0 w-8 h-8 bg-orange-200 dark:bg-yellow-900 rounded-full blur-lg opacity-50 animate-float-slow"></span>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 rounded-full blur-md opacity-40 animate-fade-in-up"></span>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section
        className="py-16 px-4 w-full max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-12 text-center animate-fade-in-up">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-6 animate-fade-in-up">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-600 text-white font-bold text-2xl shadow-lg ">
                1
              </span>
              <span className="text-lg text-zinc-700 dark:text-zinc-200">
                Choose your service
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-600 text-white font-bold text-2xl shadow-lg ">
                2
              </span>
              <span className="text-lg text-zinc-700 dark:text-zinc-200">
                Place your order or reservation
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-600 text-white font-bold text-2xl shadow-lg ">
                3
              </span>
              <span className="text-lg text-zinc-700 dark:text-zinc-200">
                Enjoy seamless service and great food!
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center animate-pop-in">
            <img
              src="/how-it-works.svg"
              alt="How It Works"
              className="w-72 md:w-96 rounded-2xl shadow-2xl"
              style={{ animationDelay: "0.7s", animationDuration: "1.2s" }}
            />
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section
        className="py-16 px-4 w-full max-w-7xl mx-auto bg-gradient-to-br from-yellow-50 via-orange-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900 rounded-3xl shadow-xl"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-12 text-center animate-fade-in-up">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border-2 border-orange-100 dark:border-yellow-900 animate-fade-in-up">
            <p className="text-zinc-700 dark:text-zinc-200 mb-4">
              “The food delivery is always on time and the quality is top-notch.
              Highly recommend!”
            </p>
            <span className="font-bold text-orange-600 dark:text-yellow-400">
              — Priya S.
            </span>
          </div>
          <div
            className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border-2 border-orange-100 dark:border-yellow-900 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-zinc-700 dark:text-zinc-200 mb-4">
              “Booking a table is so easy now. The app is user-friendly and the
              staff is great!”
            </p>
            <span className="font-bold text-orange-600 dark:text-yellow-400">
              — Rahul M.
            </span>
          </div>
          <div
            className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border-2 border-orange-100 dark:border-yellow-900 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-zinc-700 dark:text-zinc-200 mb-4">
              “We ordered catering for our event and everyone loved the food.
              Will use again!”
            </p>
            <span className="font-bold text-orange-600 dark:text-yellow-400">
              — Aisha K.
            </span>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Section */}
      <section
        className="py-16 px-4 w-full flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto bg-gradient-to-br from-orange-50 via-yellow-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900 rounded-3xl shadow-2xl"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-4 text-center animate-fade-in-up">
          Ready to Experience the Best?
        </h2>
        <p className="text-zinc-700 dark:text-zinc-200 text-lg text-center mb-6 animate-fade-in-up">
          Sign up now or contact us to get started with our restaurant and food
          delivery services. We’re here to make every meal special!
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <Link href="/contact-us">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-600 text-white px-8 py-3 rounded-full font-bold shadow-lg  transition-all duration-300 hover:scale-105 hover:shadow-yellow-300 dark:hover:shadow-orange-700 border-2 border-yellow-200 dark:border-orange-600">
              Contact Us
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
