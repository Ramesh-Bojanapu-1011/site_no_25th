import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from "react-i18next";

// Carousel Component (must be outside Home1 and before export default)
function CustomerCarousel() {
  const { t } = useTranslation();
  const testimonials = [
    {
      img: "/user1.jpg",
      name: t("home1_testimonial_name_1"),
      review: t("home1_testimonial_review_1"),
    },
    {
      img: "/user2.jpg",
      name: t("home1_testimonial_name_2"),
      review: t("home1_testimonial_review_2"),
    },
    {
      img: "/user3.jpg",
      name: t("home1_testimonial_name_3"),
      review: t("home1_testimonial_review_3"),
    },
    {
      img: "/user4.jpg",
      name: t("home1_testimonial_name_4"),
      review: t("home1_testimonial_review_4"),
    },
    {
      img: "/user5.jpg",
      name: t("home1_testimonial_name_5"),
      review: t("home1_testimonial_review_5"),
    },
    {
      img: "/user6.jpg",
      name: t("home1_testimonial_name_6"),
      review: t("home1_testimonial_review_6"),
    },
    {
      img: "/user7.jpg",
      name: t("home1_testimonial_name_7"),
      review: t("home1_testimonial_review_7"),
    },
    {
      img: "/user8.jpg",
      name: t("home1_testimonial_name_8"),
      review: t("home1_testimonial_review_8"),
    },
  ];
  // Show 4 reviews per slide
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    slides.push(
      [
        testimonials[i],
        testimonials[i + 1],
        testimonials[i + 2],
        testimonials[i + 3],
      ].filter(Boolean),
    );
  }
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Cards with glassmorphism and animated transitions */}
      <div className="relative w-full flex flex-col items-center">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-center justify-center">
          {slides[idx].map((t, i) => (
            <div
              key={t.name}
              className="w-full h-full sm:w-80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-orange-100 dark:border-yellow-900 p-10 flex flex-col items-center transition-all duration-700 animate-fade-in-up relative  "
            >
              {/* Overlapping Avatar */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-top object-cover border-4 border-orange-300 dark:border-yellow-400 shadow-xl bg-white dark:bg-zinc-800"
                />
              </div>
              <div className="mt-12" />
              <div className="flex flex-col justify-between  h-full items-center">
                <p className="italic text-lg text-zinc-700 dark:text-zinc-200 mb-4 text-center">
                  {t.review}
                </p>
                <span className="font-bold text-orange-600 dark:text-yellow-400 text-lg text-center w-full">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <div className="flex gap-2 mt-6 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-orange-400 dark:border-yellow-400 transition-all duration-300 ${
                i === idx
                  ? "bg-orange-400 dark:bg-yellow-400 scale-125"
                  : "bg-white dark:bg-zinc-800 opacity-60"
              }`}
              onClick={() => setIdx(i)}
              aria-label={`Go to testimonial slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Home1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Home1")}</title>
        <meta
          name="description"
          content={t("Delicious food delivered to your door")}
        />
      </Head>
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
              {t("home1_hero_title")}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              {t("home1_hero_desc")}
            </p>
            <Link
              href="/menu"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-yellow-700"
            >
              {t("home1_hero_button")}
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
              {t("home1_story_title")}
            </h2>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-2xl text-justify">
              {t("home1_story_desc")}
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
                {t("home1_story_point1")}
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
                {t("home1_story_point2")}
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
                {t("home1_story_point3")}
              </li>
            </ul>
            <Link
              href={"/about-us"}
              className="inline-block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-orange-300 dark:hover:shadow-yellow-700 border-2 border-orange-200 dark:border-yellow-600 text-lg transition-all duration-300 cursor-pointer"
            >
              {t("home1_story_button")}
            </Link>
          </div>
        </section>

        {/* Section 3: Featured Restaurants - Modern Overlap Card Style */}
        <section className="  flex flex-col items-center mx-auto w-full max-w-screen relative">
          <h2 className="text-4xl font-extrabold text-center text-orange-600 dark:text-yellow-400 mb-14 tracking-tight drop-shadow-lg">
            {t("home1_featured_title")}
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
                  {t(`home1_featured_badge_${idx + 1}`)}
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
                  {t(`home1_featured_name_${idx + 1}`)}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-base mb-2">
                  {t(`home1_featured_desc_${idx + 1}`)}
                </p>
                <span className="inline-block mt-2 text-xs font-semibold text-orange-400 dark:text-yellow-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  {t("home1_featured_button")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: How It Works - Modern Horizontal Stepper */}
        <section className="py-20 px-4 mx-auto w-full max-w-6xl">
          <h2 className="text-4xl font-extrabold text-center text-orange-600 dark:text-yellow-400 mb-16 drop-shadow-lg tracking-tight">
            {t("home1_how_title")}
          </h2>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-70 z-0"
              style={{ transform: "translateY(-50%)" }}
            />
            {[
              {
                icon: "https://www.svgrepo.com/show/277641/menu.svg",
                title: "Choose Menu",
                desc: "Browse and select your favorite dishes from our menu.",
                color:
                  "from-orange-200 to-yellow-200 dark:from-zinc-800 dark:to-yellow-900",
              },
              {
                icon: "https://www.svgrepo.com/show/277664/tray-food-and-restaurant.svg",
                title: "Place Order",
                desc: "Place your order easily through our website or app.",
                color:
                  "from-yellow-200 to-orange-100 dark:from-yellow-900 dark:to-orange-900",
              },
              {
                icon: "https://www.reshot.com/preview-assets/icons/EA7YQRPCX9/delivery-truck-EA7YQRPCX9.svg",
                title: "Fast Delivery",
                desc: "Enjoy quick and reliable delivery to your doorstep.",
                color:
                  "from-orange-100 to-yellow-300 dark:from-yellow-800 dark:to-yellow-600",
              },
            ].map((step, idx, arr) => (
              <div
                key={step.title}
                className={`relative z-10 flex flex-col items-center w-full md:w-1/3 group animate-fade-in-up`}
                style={{
                  animationDelay: `${0.1 + idx * 0.15}s`,
                  animationDuration: "1.1s",
                }}
              >
                {/* Glassmorphism Card */}
                <div
                  className={`w-24 h-24 flex items-center justify-center rounded-2xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg shadow-2xl border-4 border-orange-100 dark:border-yellow-900 mb-6 relative group-hover:scale-110 transition-transform duration-300`}
                >
                  <img src={step.icon} alt={step.title} className="w-12 h-12" />
                  {/* Animated Glow */}
                  <span
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
                  />
                </div>
                <h4 className="font-bold text-xl text-orange-700 dark:text-yellow-300 mb-2 text-center group-hover:text-orange-600 dark:group-hover:text-yellow-400 transition-colors">
                  {idx + 1}. {t(`home1_how_step_title_${idx + 1}`)}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-300 text-center max-w-xs">
                  {t(`home1_how_step_desc_${idx + 1}`)}
                </p>
                {/* Stepper Dot */}
                <span
                  className="hidden md:block   absolute top-1/2 right-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 dark:from-yellow-700 dark:to-yellow-500 border-4 border-white dark:border-zinc-900 shadow-lg -translate-y-1/2 translate-x-1/2 z-20 animate-pop "
                  style={{ display: idx !== arr.length - 1 ? "block" : "none" }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Customer Reviews - Modern Carousel/Slider Style */}
        <section className="py-20 px-4 w-full flex flex-col items-center mx-auto max-w-screen relative">
          <h2 className="text-4xl font-extrabold text-center text-orange-600 dark:text-yellow-400 mb-16 drop-shadow-lg tracking-tight">
            {t("home1_reviews_title")}
          </h2>
          {/* Carousel/Slider */}
          <div className="relative w-full   flex items-center justify-center">
            {/* Carousel logic (simple, no external lib) */}
            <CustomerCarousel />
          </div>
        </section>

        {/* Section 6: Special Offers & Loyalty Rewards - For Logged-in Users */}
        <section className="py-16 px-4 flex justify-center items-center w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-white dark:from-zinc-900 dark:via-yellow-900 dark:to-zinc-800">
          <div className="w-full max-w-2xl mx-auto rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg shadow-2xl border-4 border-orange-100 dark:border-yellow-900 p-8 sm:p-12 flex flex-col items-center text-center overflow-hidden relative">
            {/* Animated Gift Icon */}
            <div className="mb-6 animate-bounce-slow">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <rect
                  x="10"
                  y="25"
                  width="40"
                  height="25"
                  rx="6"
                  fill="url(#gift-bg)"
                />
                <rect
                  x="10"
                  y="25"
                  width="40"
                  height="25"
                  rx="6"
                  stroke="#F59E42"
                  strokeWidth="2"
                />
                <rect
                  x="18"
                  y="15"
                  width="24"
                  height="14"
                  rx="5"
                  fill="#FDE047"
                  stroke="#F59E42"
                  strokeWidth="2"
                />
                <path
                  d="M30 25V10"
                  stroke="#F59E42"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="22" cy="15" r="3" fill="#F59E42" />
                <circle cx="38" cy="15" r="3" fill="#F59E42" />
                <defs>
                  <linearGradient
                    id="gift-bg"
                    x1="10"
                    y1="25"
                    x2="50"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FDE047" />
                    <stop offset="1" stopColor="#F59E42" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              {t("home1_offers_title")}
            </h2>
            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-200 mb-8 max-w-lg mx-auto">
              {t("home1_offers_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-4">
              <div className="flex-1 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-yellow-900 dark:to-orange-900 rounded-2xl p-4 shadow-md border border-orange-200 dark:border-yellow-800">
                <h3 className="font-bold text-orange-700 dark:text-yellow-300 text-lg mb-1">
                  {t("home1_offers_point1_title")}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                  {t("home1_offers_point1_desc")}
                </p>
              </div>
              <div className="flex-1 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-orange-900 dark:to-yellow-900 rounded-2xl p-4 shadow-md border border-yellow-200 dark:border-orange-800">
                <h3 className="font-bold text-orange-700 dark:text-yellow-300 text-lg mb-1">
                  {t("home1_offers_point2_title")}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                  {t("home1_offers_point2_desc")}
                </p>
              </div>
            </div>
            <Link
              href="/services"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-yellow-700 mt-2"
            >
              {t("home1_offers_button")}
            </Link>
            {/* Decorative Gradient Border */}
            <span className="pointer-events-none absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-600 opacity-30 blur-[2px] z-0" />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home1;
