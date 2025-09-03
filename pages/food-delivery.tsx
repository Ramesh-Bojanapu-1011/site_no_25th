import React from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const getFoodSections = (t: any) => [
  // Section 2: How It Works
  {
    title: t("FoodDelivery_How_Title"),
    desc: t("FoodDelivery_How_Desc"),
    content: (
      <div className="w-full flex flex-col items-center">
        {/* Modern floating card timeline with glowing connectors */}
        <div className="relative w-full max-w-2xl mx-auto py-8">
          {/* Glowing blurred path as the timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-40 blur-lg z-0 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-0">
            {[
              {
                icon: "https://www.svgrepo.com/show/277641/menu.svg",
                label: t("FoodDelivery_How_Step1_Label"),
                desc: t("FoodDelivery_How_Step1_Desc"),
              },
              {
                icon: "https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.svg",
                label: t("FoodDelivery_How_Step2_Label"),
                desc: t("FoodDelivery_How_Step2_Desc"),
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/128/5161/5161406.png",
                label: t("FoodDelivery_How_Step3_Label"),
                desc: t("FoodDelivery_How_Step3_Desc"),
              },
              {
                icon: "https://www.svgrepo.com/show/283358/delivery-truck-delivery.svg",
                label: t("FoodDelivery_How_Step4_Label"),
                desc: t("FoodDelivery_How_Step4_Desc"),
              },
            ].map((step, idx, arr) => {
              // Stagger left/right for desktop, center for mobile
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={step.label}
                  className={`relative flex w-full justify-${
                    isLeft ? "start" : "end"
                  } md:justify-${
                    isLeft ? "start" : "end"
                  } max-[495px]:justify-center max-[495px]:my-4  group`}
                  style={{
                    animationDelay: `${0.1 + idx * 0.12}s`,
                    animationDuration: "1.1s",
                  }}
                >
                  {/* Connector from previous card */}
                  {idx !== 0 && (
                    <span
                      className={`absolute left-1/2 top-0 w-1 h-10 bg-gradient-to-b from-orange-300 via-yellow-200 to-orange-200 dark:from-yellow-800 dark:via-yellow-700 dark:to-yellow-900 opacity-70 z-0 -translate-x-1/2 animate-pulse`}
                    />
                  )}
                  {/* Floating card */}
                  <div
                    className={`relative bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-2xl border-4 border-orange-100 dark:border-yellow-900 px-6 py-6 min-w-[220px] max-w-xs flex flex-col items-center gap-2 backdrop-blur-lg transition-transform duration-300 group-hover:scale-105
                      ${
                        isLeft
                          ? "ml-0 md:-ml-32 md:self-start"
                          : "mr-0 md:-mr-32 md:self-end"
                      }
                    `}
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
                  {/* Glowing dot on the path */}
                  <span className="absolute left-1/2 top-10 w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 dark:from-yellow-700 dark:to-yellow-500 border-4 border-white dark:border-zinc-900 shadow-2xl -translate-x-1/2 z-20 animate-pop-in blur-[1px] max-[495px]:hidden" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
  },
  // Section 3: Featured Restaurants
  {
    title: t("FoodDelivery_Featured_Title"),
    desc: t("FoodDelivery_Featured_Desc"),
    content: (
      <div className="relative w-full  flex  items-center justify-center mx-auto  py-4">
        <div className="flex  justify-center items-center md:gap-16 flex-wrap gap-10 px-2 md:px-8     animate-fade-in-up">
          {[
            {
              name: t("FoodDelivery_Featured_Name1"),
              img: "/restaurant1.jpg",
              color: "from-orange-400 to-yellow-300",
            },
            {
              name: t("FoodDelivery_Featured_Name2"),
              img: "/restaurant2.jpg",
              color: "from-green-400 to-lime-300",
            },
            {
              name: t("FoodDelivery_Featured_Name3"),
              img: "/restaurant3.jpg",
              color: "from-emerald-400 to-green-200",
            },
            {
              name: t("FoodDelivery_Featured_Name4"),
              img: "/restaurant1.jpg",
              color: "from-yellow-400 to-orange-300",
            },
          ].map((rest, i) => (
            <div
              key={rest.name}
              className="relative flex flex-col items-center group"
            >
              {/* Glowing circular image */}
              <div
                className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${rest.color} shadow-2xl border-4 border-white dark:border-zinc-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
              >
                <Image
                  src={rest.img}
                  alt={rest.name}
                  width={140}
                  height={140}
                  className="rounded-full object-cover w-28 h-28 md:w-36 md:h-36 border-4 border-white dark:border-zinc-900 shadow-lg"
                />
              </div>
              {/* Floating badge */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 text-orange-600 dark:text-yellow-400 font-bold text-sm shadow-md border border-orange-200 dark:border-yellow-800 animate-bounce-slow">
                {rest.name}
              </span>
              {/* Animated Top Choice badge */}
              <span className="absolute -top-4 right-1/2 translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 dark:from-yellow-900 dark:to-yellow-700 text-white text-xs font-semibold shadow animate-fade-in-up">
                {t("FoodDelivery_Featured_Badge")}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // Section 4: Delivery Partners
  {
    title: t("FoodDelivery_Tracking_Title"),
    desc: t("FoodDelivery_Tracking_Desc"),
    content: (
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center py-8">
        {/* Route line */}
        <div className="relative w-full h-32 md:h-40 flex items-center justify-between">
          {/* Start (Restaurant) */}
          <div className="flex flex-col items-center z-10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 flex items-center justify-center shadow-lg border-4 border-white dark:border-zinc-900">
              <Image
                src="/restaurant1.jpg"
                alt="Restaurant"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
            <span className="mt-2 text-xs font-bold text-orange-600 dark:text-yellow-400">
              {t("FoodDelivery_Tracking_Restaurant")}
            </span>
          </div>
          {/* Animated route */}
          <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 z-0 flex items-center">
            <div className="w-full h-2 bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-400 dark:from-yellow-900 dark:via-yellow-700 dark:to-orange-900 rounded-full opacity-60 blur-[1px]" />
            {/* Animated scooter */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 animate-[moveScooter_3s_linear_infinite]"
              style={{
                animationName: "moveScooter",
                animationDuration: "3s",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
              }}
            >
              <Image
                src="https://www.svgrepo.com/show/283358/delivery-truck-delivery.svg"
                alt="Scooter"
                width={48}
                height={48}
                className="drop-shadow-lg"
              />
            </div>
          </div>
          {/* End (Home) */}
          <div className="flex flex-col items-center z-10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-lime-300 flex items-center justify-center shadow-lg border-4 border-white dark:border-zinc-900">
              <Image
                src="https://www.svgrepo.com/show/508300/home.svg"
                alt="Home"
                width={36}
                height={36}
              />
            </div>
            <span className="mt-2 text-xs font-bold text-green-700 dark:text-lime-300">
              {t("FoodDelivery_Tracking_Home")}
            </span>
          </div>
        </div>
        {/* Keyframes for scooter animation */}
        <style jsx>{`
          @keyframes moveScooter {
            0% {
              left: 0%;
            }
            100% {
              left: 92%;
            }
          }
        `}</style>
        <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-300 text-center max-w-md">
          {t("FoodDelivery_Tracking_Desc2")}
        </div>
      </div>
    ),
  },
  // Section 5: Customer Reviews
  {
    title: t("FoodDelivery_Reviews_Title"),
    desc: t("FoodDelivery_Reviews_Desc"),
    content: (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-2 drop-shadow-lg">
          {t("FoodDelivery_Reviews_Title")}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-200 mb-2 max-w-2xl">
          {t("FoodDelivery_Reviews_Desc")}
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          {[
            "FoodDelivery_Review_Name1",
            "FoodDelivery_Review_Name2",
            "FoodDelivery_Review_Name3",
            "FoodDelivery_Review_Name4",
          ].map((key, i) => (
            <div
              key={key}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-zinc-800 dark:to-yellow-900 rounded-2xl p-4 w-56 flex flex-col items-center shadow border border-orange-100 dark:border-yellow-900"
            >
              <Image
                src={`/user${(i % 4) + 1}.jpg`}
                alt={t(key)}
                width={48}
                height={48}
                className="rounded-full w-20 h-20 object-cover object-top mb-2"
              />
              <span className="italic text-zinc-700 dark:text-zinc-200 text-sm mb-1">
                {t("FoodDelivery_Review_Text")}
              </span>
              <span className="font-bold text-orange-600 dark:text-yellow-400 text-xs">
                {t(key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // Section 6: Safety & Hygiene
  {
    title: t("FoodDelivery_CTA_Title"),
    desc: t("FoodDelivery_CTA_Desc"),
    content: (
      <div className="w-full flex flex-col items-center justify-center py-8">
        <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
          {t("FoodDelivery_CTA_Title")}
        </h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
          {t("FoodDelivery_CTA_Desc")}
        </p>
        <Link
          href="/contact-us"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-xl shadow-xl hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 animate-bounce-slow"
        >
          {t("FoodDelivery_CTA_Button")}
        </Link>
      </div>
    ),
  },
];

const FoodDelivery = () => {
  const { t } = useTranslation();
  const foodSections = getFoodSections(t);
  return (
    <>
      <Head>
        <title>{t("FoodDelivery_Page_Title")}</title>
        <meta name="description" content={t("FoodDelivery_Page_Desc")} />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:py-24   mx-auto gap-8 min-h-[100vh]">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 dark:opacity-50 pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/food-delivery-hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              {t("FoodDelivery_Hero_Title")}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              {t("FoodDelivery_Hero_Desc")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
            >
              {t("FoodDelivery_Hero_Button")}
            </Link>
          </div>
          <div className="flex-1 flex w-[70%] h-auto justify-center z-10">
            <Image
              src="/food-delivery-hero.png"
              alt={t("FoodDelivery_Hero_Title")}
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl w-full   md:max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
            />
          </div>
          {/* Decorative BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-white/0 dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-zinc-900/0 z-0 pointer-events-none" />
        </section>
        {/* 5 More Sections */}
        {foodSections.map((sec, i) => (
          <section
            key={i}
            className="py-14 px-4   mx-auto flex flex-col items-center text-center gap-6"
          >
            {sec.title && (
              <div className="flex flex-col items-center mb-4">
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

export default FoodDelivery;
