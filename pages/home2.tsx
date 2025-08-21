import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Home2 = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 60 });
  }, []);
  return (
    <>
      <Head>
        <title>Home2</title>
        <meta
          name="description"
          content="Delicious food delivered to your door"
        />
      </Head>{" "}
      <Headder />
      {/* Hero Section: Fullscreen video with overlayed content and image */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between px-4 py-0 min-h-screen w-full"
        data-aos="fade-up"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 dark:opacity-50 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b  to-transparent   to-30% z-10" />
        <div
          className="relative z-20 flex-1 flex flex-col justify-center items-start md:items-start pt-32 pb-16"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-orange-600 dark:text-yellow-400 mb-6 drop-shadow-lg">
            Order. Eat. Enjoy.
          </h1>
          <p className="text-lg md:text-2xl text-black dark:text-zinc-200 mb-8 max-w-2xl">
            Welcome to our food delivery platform, where taste meets
            convenience. Explore a world of flavors, order from top restaurants,
            and enjoy fast, fresh delivery right to your door. Your next meal is
            just a click away!
          </p>
        </div>
        <div className="relative z-20 flex-1 flex justify-center items-center pt-16 pb-8">
          <img
            src="/hero-food.png"
            alt="Delicious Food"
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </section>
      {/* Section 2: About Our Chefs */}
      <section
        className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-zinc-800 dark:to-yellow-900"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col items-start" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            Meet Our Chefs
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            Our talented chefs bring a world of culinary expertise to your
            table. From traditional recipes to modern fusion, they craft every
            dish with passion and precision, ensuring a memorable dining
            experience every time you order.
          </p>
        </div>
        <div className="flex-1 flex flex-wrap gap-6 justify-center">
          {[
            { img: "/chef1.jpg", name: "Chef Arjun" },
            { img: "/chef2.jpg", name: "Chef Mei" },
            { img: "/chef3.jpg", name: "Chef Luca" },
            { img: "/chef4.jpg", name: "Chef Sara" },
          ].map((chef) => (
            <div key={chef.name} className="w-32 flex flex-col items-center">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-24 h-24 rounded-full mb-2 object-cover border-4 border-orange-200 dark:border-yellow-400 object-top"
              />
              <span className="font-semibold text-orange-700 dark:text-yellow-300 text-center">
                {chef.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Section 3: Our Menu Highlights */}
      <section
        className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            Explore Our Menu
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            From classic favorites to new discoveries, our menu is designed to
            delight every palate. Whether you crave pizza, sushi, burgers, or
            desserts, we have something for everyone. Browse our highlights and
            find your next craving!
          </p>
        </div>
        <div
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6"
          data-aos="fade-left"
        >
          {[
            {
              icon: "https://www.svgrepo.com/show/356622/pizza-01.svg",
              title: "Pizza",
            },
            {
              icon: "https://www.svgrepo.com/show/356623/sandwich-burger.svg",
              title: "Burgers",
            },
            {
              icon: "https://www.svgrepo.com/show/356579/sushi-03-nigiri-sake.svg",
              title: "Sushi",
            },
            {
              icon: "https://www.svgrepo.com/show/356655/ice-cream-sundae-02.svg",
              title: "Desserts",
            },
            {
              icon: "https://www.svgrepo.com/show/356651/strawberry-smoothie.svg",
              title: "Drinks",
            },
            {
              icon: "https://www.svgrepo.com/show/356599/salad.svg",
              title: "Salads",
            },
          ].map((cat) => (
            <div key={cat.title} className="flex flex-col items-center">
              <img src={cat.icon} alt={cat.title} className="w-16 h-16 mb-2" />
              <span className="font-semibold text-orange-700 dark:text-yellow-300">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Section 4: How It Works */}
      <section
        className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 bg-gradient-to-l from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-zinc-900"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col items-start" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            How It Works
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            Ordering is simple and seamless. Just choose your favorite dishes,
            place your order, and relax while we deliver your meal hot and
            fresh. Enjoy restaurant-quality food in the comfort of your home!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6" data-aos="fade-up">
          {[
            {
              icon: "https://www.svgrepo.com/show/277641/menu.svg",
              title: "Choose Menu",
            },
            {
              icon: "https://www.svgrepo.com/show/503678/order-food.svg",
              title: "Place Order",
            },
            {
              icon: "https://www.svgrepo.com/show/269548/logistics-delivery-express.svg",
              title: "Fast Delivery",
            },
            {
              icon: "https://www.svgrepo.com/show/429373/chow-food-mein.svg",
              title: "Enjoy!",
            },
          ].map((step) => (
            <div key={step.title} className="flex items-center gap-4">
              <img src={step.icon} alt={step.title} className="w-14 h-14" />
              <span className="font-semibold text-orange-700 dark:text-yellow-300">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Section 5: Our Ambience */}
      <section
        className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 mx-auto"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            Our Ambience
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            Step into a world of comfort and style. Our partner restaurants
            offer inviting spaces, perfect for every occasion. Whether dining in
            or ordering out, we bring the ambience to you through every meal.
          </p>
        </div>
        <div className="flex-1 flex justify-center" data-aos="fade-up">
          <img
            src="/ambience.jpg"
            alt="Ambience"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>
      {/* Section 6: Stay Updated */}
      <section
        className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12   mx-auto bg-gradient-to-l from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-zinc-900"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col items-start" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            Stay Updated!
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6">
            Subscribe to our newsletter for exclusive offers, new menu items,
            and more. Be the first to know about our latest updates and special
            deals!
          </p>
          <form className="flex w-full max-w-md bg-white/90 dark:bg-zinc-800/90 rounded-full shadow-lg overflow-hidden border-2 border-orange-200 dark:border-yellow-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent outline-none text-zinc-800 dark:text-zinc-100"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold hover:from-orange-600 hover:to-yellow-500 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/newsletter-illustration.jpg"
            alt="Newsletter"
            className="w-72 md:w-96 h-auto"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home2;
