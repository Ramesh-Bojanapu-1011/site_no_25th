import React, { useEffect, useRef } from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Image from "next/image";
import Head from "next/head";
// ...existing code...

const milestones = [
  { label: "Orders Delivered", value: 120000 },
  { label: "Happy Customers", value: 45000 },
  { label: "Partner Restaurants", value: 120 },
  { label: "Cities Served", value: 18 },
];

import { useTranslation } from "react-i18next";

function useCounterAnimation(target: number, end: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    hasAnimated.current = false; // Reset on language change
    let observer: IntersectionObserver | null = null;
    let start = 0;
    let startTime: number | null = null;
    function animateCounter(ts: number) {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      if (ref.current) ref.current.innerText = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(animateCounter);
    }
    function handleIntersect(entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        requestAnimationFrame(animateCounter);
      }
    }
    observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    // If already visible, trigger animation immediately
    setTimeout(() => {
      if (
        ref.current &&
        ref.current.getBoundingClientRect().top < window.innerHeight &&
        !hasAnimated.current
      ) {
        hasAnimated.current = true;
        requestAnimationFrame(animateCounter);
      }
    }, 100);
    return () => {
      if (observer && ref.current) observer.unobserve(ref.current);
    };
  }, [end, i18n.language]);
  return ref;
}

const AboutUs = () => {
  const { t } = useTranslation();
  const aboutMilestones = [
    { label: t("about_milestones_orders"), value: 120000 },
    { label: t("about_milestones_customers"), value: 45000 },
    { label: t("about_milestones_restaurants"), value: 120 },
    { label: t("about_milestones_cities"), value: 18 },
  ];
  return (
    <>
      <Head>
        <title>{t("about_hero_title")}</title>
        <meta name="description" content={t("about_hero_desc")} />
      </Head>
      <div className="bg-white dark:bg-zinc-900 transition-colors duration-300">
        <Headder />

        {/* 1. Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-20 min-h-[100vh] w-full max-w-screen">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 dark:opacity-50 pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/about-hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="flex-1 flex flex-col justify-center items-start md:items-start z-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-6 drop-shadow-lg">
              {t("about_hero_title")}
            </h1>
            <p className="text-lg md:text-2xl   dark:text-zinc-200 mb-8 max-w-2xl">
              {t("about_hero_desc")}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center z-20">
            <img
              src="/about-hero.png"
              alt={t("about_hero_title")}
              className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* 2. Our Vision */}
        <section className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12   mx-auto bg-gradient-to-br max-w-screen from-yellow-50 to-orange-100 dark:from-yellow-900 dark:to-zinc-900   shadow-xl">
          <div className="flex-1 flex flex-col items-start">
            <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6 tracking-wider  ">
              {t("about_vision_title")}
            </h2>
            <p
              className="text-zinc-700 dark:text-zinc-200 mb-6   text-lg animate-fade-in-up text-justify"
              style={{ animationDelay: "0.2s", animationDuration: "1.2s" }}
            >
              {t("about_vision_desc")}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="relative group">
              <img
                src="/vision.jpg"
                alt={t("about_vision_title")}
                className="w-72 md:w-96 rounded-full shadow-2xl ring-8 ring-orange-200 dark:ring-yellow-400 scale-95 transition-all duration-700 ease-in-out blur-[1.5px] group-hover:blur-0"
                style={{
                  filter: "drop-shadow(0 8px 32px rgba(255,180,0,0.15))",
                }}
              />
              <span className="absolute -top-6 -right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce">
                {t("about_vision_inspire")}
              </span>
              <span
                className="absolute bottom-0 left-0 bg-yellow-400 text-zinc-900 px-3 py-1 rounded-full text-xs font-semibold shadow animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                {t("about_vision_future")}
              </span>
            </div>
          </div>
        </section>

        {/* 3. Our Mission */}
        <section className="relative py-20 px-4 w-full flex flex-col md:flex-row items-center gap-12   mx-auto bg-white dark:bg-zinc-800  shadow-2xl max-w-screen border-0 border-t-8 border-orange-200 dark:border-yellow-700">
          <div className="flex-1 flex justify-center items-center z-10">
            <div className="relative group">
              {/* Card with shadow and animated border */}
              <div className="relative w-72 md:w-96 h-72 md:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-yellow-50 to-white dark:from-yellow-900 dark:via-zinc-900 dark:to-zinc-800 shadow-2xl border-4 border-orange-200 dark:border-yellow-600 group-hover:scale-105 transition-transform duration-700">
                <img
                  src="/mission.jpg"
                  alt={t("about_mission_title")}
                  className="w-48 md:w-64 h-48 md:h-64 object-contain drop-shadow-xl rounded-xl animate-pop-in"
                  style={{ animationDelay: "0.7s", animationDuration: "1.2s" }}
                />
                {/* Animated badge */}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg animate-bounce z-20">
                  {t("about_team_title")}
                </span>
              </div>
              {/* Decorative sparkles */}
              <span className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full blur-md opacity-60 animate-pulse-slow"></span>
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-orange-200 rounded-full blur-sm opacity-50 animate-float-slow"></span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start z-10">
            <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6 tracking-wider">
              {t("about_mission_title")}
            </h2>
            <p
              className="text-zinc-700 dark:text-zinc-200 mb-6 text-lg animate-fade-in-up text-justify"
              style={{ animationDelay: "0.4s", animationDuration: "1.1s" }}
            >
              {t("about_mission_desc")}
            </p>
            <ul
              className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200 animate-fade-in-up"
              style={{ animationDelay: "0.7s", animationDuration: "1.1s" }}
            >
              <li>{t("about_mission_point1")}</li>
              <li>{t("about_mission_point2")}</li>
              <li>{t("about_mission_point3")}</li>
              <li>{t("about_mission_point4")}</li>
              <li>{t("about_mission_point5")}</li>
            </ul>
          </div>
        </section>

        {/* 4. Our Milestones - with animated counters */}
        <section className="relative py-20 px-4 w-full flex flex-col items-center gap-16   mx-auto bg-gradient-to-br from-yellow-50 via-orange-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900  shadow-2xl border-0 border-b-8 border-orange-200 dark:border-yellow-700 max-w-screen">
          {/* Animated gradient border ring */}
          <span className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-orange-400 via-yellow-200 to-orange-600 dark:from-yellow-700 dark:via-orange-500 dark:to-yellow-300 blur-3xl opacity-30 animate-pulse-slow z-0"></span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-700 dark:from-yellow-300 dark:via-orange-400 dark:to-yellow-500 mb-12 animate-gradient-x z-10">
            {t("about_milestones_title")}
          </h2>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full z-10">
            {aboutMilestones.map((m, idx) => {
              const { i18n } = useTranslation();
              const ref = useCounterAnimation(idx, m.value, 1200 + idx * 200);
              return (
                <div
                  key={m.label}
                  className="relative flex flex-col items-center justify-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border-2 border-orange-100 dark:border-yellow-900 group hover:scale-105 hover:shadow-orange-200 dark:hover:shadow-yellow-900 transition-all duration-500 overflow-visible"
                  style={{ minHeight: "220px" }}
                >
                  {/* Icon overlay */}
                  <span
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-yellow-200 to-orange-600 dark:from-yellow-700 dark:via-orange-500 dark:to-yellow-300 shadow-lg border-4 border-white dark:border-zinc-900 animate-float-slow z-20`}
                  >
                    {idx === 0 ? (
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 32 32"
                      >
                        <circle cx="16" cy="16" r="16" fill="#FDBA74" />
                        <path
                          d="M10 18l4 4 8-8"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : idx === 1 ? (
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 32 32"
                      >
                        <circle cx="16" cy="16" r="16" fill="#FDE68A" />
                        <path
                          d="M16 10v8m0 0v4m0-4h4m-4 0h-4"
                          stroke="#F59E42"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : idx === 2 ? (
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 32 32"
                      >
                        <circle cx="16" cy="16" r="16" fill="#F59E42" />
                        <path
                          d="M12 20l4-8 4 8"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 32 32"
                      >
                        <circle cx="16" cy="16" r="16" fill="#A7F3D0" />
                        <path
                          d="M10 22l6-12 6 12"
                          stroke="#059669"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  {/* Counter */}
                  <span
                    ref={ref}
                    key={i18n.language + "-" + idx}
                    className="text-5xl font-extrabold text-orange-600 dark:text-yellow-400 mb-3 mt-8 animate-fade-in-up"
                  >
                    0
                  </span>
                  {/* Label */}
                  <span className="font-semibold text-zinc-700 dark:text-zinc-200 text-center text-lg animate-fade-in-up">
                    {m.label}
                  </span>
                  {/* Decorative ring */}
                  <span className="absolute -bottom-6 right-2 w-10 h-10 rounded-full border-4 border-yellow-300 dark:border-orange-400 opacity-60 animate-spin-slow"></span>
                </div>
              );
            })}
          </div>
          {/* Decorative blurred shape */}
          <span className="hidden md:block absolute -bottom-20 right-0 w-80 h-80 bg-orange-200 dark:bg-yellow-900 rounded-full blur-3xl opacity-30 animate-float-slow z-0"></span>
        </section>

        {/* 5. Our Team */}
        <section className="relative py-20 px-4 w-full   md:flex-row items-center gap-16  mx-auto bg-gradient-to-tr from-orange-50 via-yellow-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900  shadow-2xl border-0 border-t-8 border-orange-200 dark:border-yellow-700 max-w-screen">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6 tracking-wider text-center">
            {t("about_team_title")}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 w-full">
            {/* Left: Animated team member cards */}
            <div className="flex-1 flex flex-col gap-6 z-10">
              <div className="flex flex-col gap-4">
                {/* Example team members, replace with real data if available */}
                {[
                  {
                    name: t("about_team_member1_name"),
                    role: t("about_team_member1_role"),
                    img: "/avatar1.png",
                  },
                  {
                    name: t("about_team_member2_name"),
                    role: t("about_team_member2_role"),
                    img: "/avatar2.png",
                  },
                  {
                    name: t("about_team_member3_name"),
                    role: t("about_team_member3_role"),
                    img: "/avatar3.png",
                  },
                  {
                    name: t("about_team_member4_name"),
                    role: t("about_team_member4_role"),
                    img: "/avatar4.png",
                  },
                ].map((member, i) => (
                  <div
                    key={member.name}
                    className={`flex items-center gap-4 bg-white/70 dark:bg-zinc-800/70 rounded-2xl shadow-lg px-5 py-4 border-l-4 border-orange-300 dark:border-yellow-500 hover:scale-105 hover:shadow-orange-200 dark:hover:shadow-yellow-900 transition-all duration-400 animate-fade-in-up`}
                    style={{
                      animationDelay: `${0.2 + i * 0.15}s`,
                      animationDuration: "1.1s",
                    }}
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      className="w-20 h-20 rounded-full border-2 border-orange-200 dark:border-yellow-400 object-cover object-top shadow"
                      width={80}
                      height={80}
                    />
                    <div>
                      <div className="font-bold text-orange-700 dark:text-yellow-300 text-lg">
                        {member.name}
                      </div>
                      <div className="text-zinc-600 dark:text-zinc-200 text-sm">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <blockquote
                className="mt-8 text-orange-700 dark:text-yellow-300 italic text-lg animate-fade-in-up"
                style={{ animationDelay: "0.8s", animationDuration: "1.1s" }}
              >
                {t("about_team_quote")}
              </blockquote>
            </div>
            {/* Right: Team story and values content */}
            <div className="flex-1 flex justify-center items-center z-10">
              <div
                className="relative w-full max-w-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-orange-100 dark:border-yellow-900 px-8 py-10 flex flex-col gap-6 items-start animate-fade-in-up"
                style={{ animationDelay: "0.5s", animationDuration: "1.2s" }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-2">
                  {t("about_team_meet_title")}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-200 text-lg mb-2 text-justify">
                  {t("about_team_meet_desc")}
                </p>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 mb-2">
                  <li>{t("about_team_point1")}</li>
                  <li>{t("about_team_point2")}</li>
                  <li>{t("about_team_point3")}</li>
                </ul>
                <div className="w-full flex flex-col md:flex-row gap-4 mt-2">
                  <div className="flex-1 bg-gradient-to-r from-orange-100 via-yellow-50 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900 rounded-xl p-4 shadow border-l-4 border-orange-300 dark:border-yellow-500">
                    <span className="block text-orange-700 dark:text-yellow-300 font-semibold mb-1">
                      {t("about_team_value_title")}
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-200 text-sm">
                      {t("about_team_value_desc")}
                    </span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-yellow-100 via-orange-50 to-white dark:from-orange-900 dark:via-yellow-900 dark:to-zinc-900 rounded-xl p-4 shadow border-l-4 border-yellow-400 dark:border-orange-400">
                    <span className="block text-yellow-700 dark:text-orange-300 font-semibold mb-1">
                      {t("about_team_promise_title")}
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-200 text-sm">
                      {t("about_team_promise_desc")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Community & Sustainability */}
        <section className="py-20 px-4 w-full flex flex-col-reverse md:flex-row items-center gap-16 mx-auto bg-gradient-to-br from-yellow-50 via-orange-100 to-white dark:from-yellow-900 dark:to-zinc-900   border-0 border-b-8 border-orange-200 dark:border-yellow-700 max-w-screen">
          {/* Left: Image with new accent and floating badge */}
          <div className="flex-1 flex justify-center items-center z-10">
            <div className="relative w-72 md:w-96 h-72 md:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-yellow-50 to-white dark:from-yellow-900 dark:to-zinc-900 shadow-2xl border-4 border-orange-200 dark:border-yellow-700 group-hover:scale-105 transition-transform duration-700">
              <img
                src="/sustainability.jpg"
                alt={t("about_community_title")}
                className="w-48 md:w-64 h-48 md:h-64 object-contain drop-shadow-xl rounded-xl animate-pop-in"
                style={{ animationDelay: "0.7s", animationDuration: "1.2s" }}
              />
              {/* Floating glass badge with icon */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl px-7 py-2.5 rounded-full font-bold shadow-xl flex items-center gap-2 animate-bounce z-20 border-2 border-orange-300 dark:border-yellow-700">
                <svg
                  className="w-5 h-5 text-orange-500 dark:text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636"
                  />
                </svg>
                {t("about_community_impact")}
              </span>
              {/* Decorative sparkles */}
              <span className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 dark:bg-yellow-800 rounded-full blur-md opacity-60 animate-pulse-slow"></span>
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-orange-200 dark:bg-yellow-900 rounded-full blur-sm opacity-50 animate-float-slow"></span>
            </div>
            {/* Vertical accent bar */}
            {/* <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-64 w-2 bg-gradient-to-b from-orange-400 via-yellow-200 to-orange-600 rounded-full shadow-lg opacity-70 animate-fade-in-up"></span> */}
          </div>
          {/* Right: Content in glassmorphism card */}
          <div
            className="flex-1 flex flex-col items-start z-10"
            //
          >
            <div className="relative w-full bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-orange-100 dark:border-yellow-700 px-8 py-10 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6 tracking-wider text-center">
                {t("about_community_title")}
              </h2>
              <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg text-lg animate-fade-in-up">
                {t("about_community_desc")}
              </p>
              <ul
                className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200 animate-fade-in-up"
                style={{ animationDelay: "0.5s", animationDuration: "1.1s" }}
              >
                <li>{t("about_community_point1")}</li>
                <li>{t("about_community_point2")}</li>
                <li>{t("about_community_point3")}</li>
                <li>{t("about_community_point4")}</li>
                <li>{t("about_community_point5")}</li>
              </ul>
              {/* <div className="mt-4 w-full flex justify-end">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-xl animate-bounce transition-all duration-300 hover:scale-105 hover:shadow-orange-300 dark:hover:shadow-yellow-700 border-2 border-orange-200 dark:border-yellow-700 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-yellow-700">
                <svg className="w-5 h-5 text-white dark:text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Join Our Green Mission!
              </button>
            </div> */}
              {/* Decorative floating leaf (now orange/yellow for dark) */}
              <span className="absolute -top-8 right-8 w-10 h-10 bg-orange-200 dark:bg-yellow-800 rounded-full blur-lg opacity-40 animate-float-slow"></span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
