import React from "react";
import Head from "next/head";
import Image from "next/image";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const FarmToForkDelivery = () => {
  return (
    <>
      <Head>
        <title>
          From Local Farms to Your Table: The Rise of Farm-to-Fork Delivery |
          Blog
        </title>
        <meta
          name="description"
          content="Explore how farm-to-fork delivery is transforming the way we eat, supporting local farmers, and bringing fresh produce directly to your table."
        />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-16 md:py-24 mx-auto gap-8 min-h-[60vh]">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              From Local Farms to Your Table: The Rise of Farm-to-Fork Delivery
            </h1>
            <p className="dark:text-zinc-200 text-lg md:text-2xl text-zinc-700   mb-6 max-w-xl">
              Discover how farm-to-fork delivery is revolutionizing food
              sourcing, supporting local farmers, and ensuring the freshest
              ingredients reach your plate.
            </p>
          </div>
          <div className="flex-1 flex w-full md:w-[70%] h-auto justify-center z-10">
            <Image
              src="/farm-to-fork-hero.jpg"
              alt="Farm to Fork Delivery"
              width={420}
              height={320}
              className="rounded-3xl shadow-2xl w-full md:max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
            />
          </div>
          {/* Decorative BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-white/0 dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-zinc-900/0 z-0 pointer-events-none" />
        </section>
        {/* Blog Content Section */}
        <section className="py-10 px-4 mx-auto  *:text-zinc-800 dark:text-zinc-100 bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-4">
            Why Farm-to-Fork Delivery is Gaining Momentum
          </h2>
          <p className="dark:text-zinc-200 mb-4 text-lg">
            The farm-to-fork movement is all about shortening the distance
            between where food is grown and where it’s consumed. By connecting
            local farmers directly with consumers, this approach ensures
            fresher, more nutritious produce and helps support sustainable
            agriculture.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 dark:text-zinc-200 ">
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                Freshness Guaranteed:
              </span>{" "}
              Produce is harvested at its peak and delivered quickly, preserving
              flavor and nutrients.
            </li>
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                Supporting Local Farmers:
              </span>{" "}
              Every order helps small-scale farmers thrive and strengthens local
              economies.
            </li>
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                Sustainable Practices:
              </span>{" "}
              Reduced transportation means a smaller carbon footprint and less
              food waste.
            </li>
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                Seasonal Variety:
              </span>{" "}
              Enjoy fruits and vegetables at their freshest, with menus that
              change with the seasons.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 dark:text-yellow-300 mb-3 mt-8">
            How Farm-to-Fork Delivery Works
          </h3>
          <p className="dark:text-zinc-200 mb-4">
            Farm-to-fork delivery services partner with local farms to source
            produce, dairy, and meats. Orders are placed online, harvested to
            order, and delivered directly to your home or restaurant—often
            within 24-48 hours of picking.
          </p>
          <ul className="list-decimal pl-6 mb-4 space-y-2 dark:text-zinc-200 ">
            <li>
              Browse available produce and products from local farms on the
              delivery platform.
            </li>
            <li>Place your order and select your preferred delivery date.</li>
            <li>Farmers harvest and pack your order fresh.</li>
            <li>
              Your box of farm-fresh goodness arrives at your doorstep, ready to
              enjoy!
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 dark:text-yellow-300 mb-3 mt-8">
            The Benefits for You and the Community
          </h3>
          <p className="dark:text-zinc-200 mb-4">
            Choosing farm-to-fork delivery means better taste, better nutrition,
            and a positive impact on your community. It’s a win-win for
            health-conscious consumers and local producers alike.
          </p>
          <p className="  mb-2 font-semibold text-orange-700 dark:text-yellow-300">
            Ready to experience the difference? Try a farm-to-fork delivery
            service and taste the freshness for yourself!
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default FarmToForkDelivery;
