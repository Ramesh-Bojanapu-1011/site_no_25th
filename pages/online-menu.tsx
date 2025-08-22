import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const menuSections = [
  // Section 1: How Online Ordering Works
  {
    title: "How Online Ordering Works",
    desc: "Order your favorite dishes in just a few clicks and enjoy fast, contactless delivery.",
    icon: "/online-order.svg",
    content: (
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-2xl mx-auto py-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-40 blur-lg z-0 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-0">
            {[
              {
                icon: "/menu.svg",
                label: "Browse Menu",
                desc: "Explore our delicious offerings",
              },
              {
                icon: "/cart.svg",
                label: "Add to Cart",
                desc: "Select your favorites and customize",
              },
              {
                icon: "/payment.svg",
                label: "Checkout",
                desc: "Secure online payment options",
              },
              {
                icon: "/delivery.svg",
                label: "Track & Enjoy",
                desc: "Real-time order tracking and fast delivery",
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
  // Section 2: Menu Categories
  {
    title: "Menu Categories",
    desc: "Discover a variety of cuisines and dishes to satisfy every craving.",
    icon: "/menu.svg",
    content: (
      <div className="flex flex-wrap gap-8 justify-center items-center py-4">
        {[
          {
            name: "Starters",
            img: "/starters.jpg",
            desc: "Tasty beginnings to your meal",
          },
          {
            name: "Main Course",
            img: "/main-course.jpg",
            desc: "Hearty and flavorful dishes",
          },
          {
            name: "Desserts",
            img: "/desserts.jpg",
            desc: "Sweet treats to finish",
          },
          {
            name: "Beverages",
            img: "/beverages.jpg",
            desc: "Refreshing drinks and more",
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
  // Section 3: Featured Dishes
  {
    title: "Featured Dishes",
    desc: "Our chef’s top picks, loved by customers and perfect for any occasion.",
    icon: "/chef-hat.svg",
    content: (
      <div className="flex flex-wrap gap-8 justify-center items-center py-4">
        {[
          {
            name: "Paneer Tikka",
            img: "/paneer-tikka.jpg",
            desc: "Grilled cottage cheese with spices",
          },
          {
            name: "Butter Chicken",
            img: "/butter-chicken.jpg",
            desc: "Creamy tomato-based chicken curry",
          },
          {
            name: "Veg Biryani",
            img: "/veg-biryani.jpg",
            desc: "Aromatic rice with mixed vegetables",
          },
          {
            name: "Gulab Jamun",
            img: "/gulab-jamun.jpg",
            desc: "Soft, syrupy dessert balls",
          },
        ].map((dish) => (
          <div
            key={dish.name}
            className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 w-60"
          >
            <Image
              src={dish.img}
              alt={dish.name}
              width={100}
              height={100}
              className="rounded-xl mb-3 object-cover w-24 h-24"
            />
            <span className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
              {dish.name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-300 mb-2">
              {dish.desc}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  // Section 4: Why Order Online?
  {
    title: "Why Order Online?",
    desc: "Enjoy exclusive benefits and a hassle-free experience when you order from our online menu.",
    icon: "/success.svg",
    content: (
      <ul className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-200 text-left max-w-xl mx-auto">
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="/clock.svg"
              alt="Quick Delivery"
              width={20}
              height={20}
            />
          </span>
          Quick and reliable delivery to your doorstep
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="/discount.svg"
              alt="Exclusive Offers"
              width={20}
              height={20}
            />
          </span>
          Exclusive online-only deals and discounts
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="/payment.svg"
              alt="Secure Payment"
              width={20}
              height={20}
            />
          </span>
          Secure payment and easy checkout
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image src="/support.svg" alt="Support" width={20} height={20} />
          </span>
          24/7 customer support for your orders
        </li>
      </ul>
    ),
  },
  // Section 5: Customer Reviews
  {
    title: "Customer Reviews",
    desc: "See what our happy customers are saying about their online ordering experience.",
    icon: "/user1.jpg",
    content: (
      <div className="flex flex-wrap gap-6 justify-center">
        {[
          {
            name: "Rohit S.",
            feedback:
              "Ordering online was so easy and the food arrived hot and fresh!",
            img: "/user1.jpg",
          },
          {
            name: "Neha T.",
            feedback:
              "Loved the variety and the quick delivery. Will order again!",
            img: "/user2.jpg",
          },
          {
            name: "Arjun M.",
            feedback: "Great offers and the checkout process was smooth.",
            img: "/user3.jpg",
          },
          {
            name: "Simran P.",
            feedback: "Customer support was very helpful with my order.",
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
  // Section 6: Order Now CTA
  {
    title: "Ready to Order?",
    desc: "Browse our menu and place your order for a delicious meal delivered to your door!",
    icon: "/cart.svg",
    content: (
      <div
        className="w-full flex flex-col items-center justify-center py-8"
        id="order-now"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
          Order Online Now!
        </h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
          Enjoy restaurant-quality food at home. Fast delivery, secure payment,
          and exclusive deals await you.
        </p>
        <Link
          href="/contact-us"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-xl shadow-xl hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 animate-bounce-slow"
        >
          Contact us
        </Link>
      </div>
    ),
  },
];

const OnlineMenu = () => {
  return (
    <>
      <Head>
        <title>Online Menu | Order Food Online</title>
        <meta
          name="description"
          content="Order your favorite dishes online for fast delivery. Browse our menu and enjoy exclusive offers."
        />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section with Background Video */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:py-24 mx-auto gap-8 min-h-[100vh] overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
             
            className="absolute inset-0 w-full h-full object-cover z-0 brightness-95 dark:brightness-60 contrast-110 dark:contrast-90 pointer-events-none"
          >
            <source src="/ " type="video/mp4" />
            {/* Fallback for browsers that don't support the video tag */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-white/0 dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-zinc-900/0 z-0 pointer-events-none" />
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              Order Delicious Food Online
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              Explore our menu, customize your order, and enjoy fast delivery to
              your doorstep. Restaurant-quality food, just a click away!
            </p>
            <Link
              href="#order-now"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
            >
              Order Now
            </Link>
          </div>
          <div className="flex-1 flex w-[70%] h-auto justify-center z-10">
            <Image
              src="/online-menu-hero.png"
              alt="Online Menu"
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl w-full md:max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
            />
          </div>
        </section>
        {/* Menu Sections */}
        {menuSections.map((sec, i) => (
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

export default OnlineMenu;
