import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const ReservationManagement = () => {
  const { t } = useTranslation();

  const reservationSections = [
    {
      title: t("ReservationManagement_How_Title"),
      desc: t("ReservationManagement_How_Desc"),

      content: (
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-2xl mx-auto py-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-40 blur-lg z-0 -translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-0">
              {[
                {
                  icon: "https://www.svgrepo.com/show/530140/calendar.svg",
                  label: t("ReservationManagement_Step1_Label"),
                  desc: t("ReservationManagement_Step1_Desc"),
                },
                {
                  icon: "https://www.svgrepo.com/show/474672/edit-report.svg",
                  label: t("ReservationManagement_Step2_Label"),
                  desc: t("ReservationManagement_Step2_Desc"),
                },
                {
                  icon: "https://www.svgrepo.com/show/422402/cancel-close-delete.svg",
                  label: t("ReservationManagement_Step3_Label"),
                  desc: t("ReservationManagement_Step3_Desc"),
                },
                {
                  icon: "https://www.svgrepo.com/show/388670/success.svg",
                  label: t("ReservationManagement_Step4_Label"),
                  desc: t("ReservationManagement_Step4_Desc"),
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
    {
      title: t("ReservationManagement_Features_Title"),
      desc: t("ReservationManagement_Features_Desc"),

      content: (
        <div className="flex flex-wrap gap-8 justify-center items-center py-4">
          {[
            {
              name: t("ReservationManagement_Features_CalendarView"),
              img: "/calendar-view.jpg",
              desc: t("ReservationManagement_Features_CalendarView_Desc"),
            },
            {
              name: t("ReservationManagement_Features_TableManagement"),
              img: "/table-management.jpg",
              desc: t("ReservationManagement_Features_TableManagement_Desc"),
            },
            {
              name: t("ReservationManagement_Features_GuestProfiles"),
              img: "/guest-profiles.jpg",
              desc: t("ReservationManagement_Features_GuestProfiles_Desc"),
            },
            {
              name: t("ReservationManagement_Features_Notifications"),
              img: "/notifications.jpg",
              desc: t("ReservationManagement_Features_Notifications_Desc"),
            },
          ].map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 w-60"
            >
              <Image
                src={feature.img}
                alt={feature.name}
                width={100}
                height={100}
                className="rounded-xl mb-3 object-cover w-24 h-24"
              />
              <span className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
                {feature.name}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-300 mb-2">
                {feature.desc}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: t("ReservationManagement_Why_Title"),
      desc: t("ReservationManagement_Why_Desc"),

      content: (
        <ul className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-200 text-left max-w-xl mx-auto">
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/520513/clock.svg"
                alt={
                  t("ReservationManagement_Why_TimeSaving_Alt") || "Time Saving"
                }
                width={20}
                height={20}
              />
            </span>
            {t("ReservationManagement_Why_TimeSaving")}
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/454708/analytics-chart-earning.svg"
                alt={
                  t("ReservationManagement_Why_Analytics_Alt") || "Analytics"
                }
                width={20}
                height={20}
              />
            </span>
            {t("ReservationManagement_Why_Analytics")}
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/428775/support-online-center.svg"
                alt={t("ReservationManagement_Why_Support_Alt") || "Support"}
                width={20}
                height={20}
              />
            </span>
            {t("ReservationManagement_Why_Support")}
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/298698/secure-payment.svg"
                alt={t("ReservationManagement_Why_Secure_Alt") || "Secure"}
                width={20}
                height={20}
              />
            </span>
            {t("ReservationManagement_Why_Secure")}
          </li>
        </ul>
      ),
    },
    {
      title: t("ReservationManagement_Testimonials_Title"),
      desc: t("ReservationManagement_Testimonials_Desc"),

      content: (
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            {
              name: t("ReservationManagement_Testimonials_User1_Name"),
              feedback: t("ReservationManagement_Testimonials_User1_Feedback"),
              img: "/user2.jpg",
            },
            {
              name: t("ReservationManagement_Testimonials_User2_Name"),
              feedback: t("ReservationManagement_Testimonials_User2_Feedback"),
              img: "/user1.jpg",
            },
            {
              name: t("ReservationManagement_Testimonials_User3_Name"),
              feedback: t("ReservationManagement_Testimonials_User3_Feedback"),
              img: "/user4.jpg",
            },
            {
              name: t("ReservationManagement_Testimonials_User4_Name"),
              feedback: t("ReservationManagement_Testimonials_User4_Feedback"),
              img: "/user3.jpg",
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
                className="rounded-full w-20 h-20 object-cover object-top mb-2"
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
    {
      title: t("ReservationManagement_CTA_Title"),
      desc: t("ReservationManagement_CTA_Desc"),

      content: (
        <div
          className="w-full flex flex-col items-center justify-center py-8"
          id="get-started"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
            {t("ReservationManagement_CTA_Heading")}
          </h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
            {t("ReservationManagement_CTA_Desc2")}
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-xl shadow-xl hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 animate-bounce-slow"
          >
            {t("ReservationManagement_CTA_Button")}
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("ReservationManagement_Meta_Title")}</title>
        <meta
          name="description"
          content={t("ReservationManagement_Meta_Desc")}
        />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:py-24 mx-auto gap-8 min-h-[100vh]">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectFit: "cover" }}
          >
            <source
              src="/reservation-management-hero-bg.mp4"
              type="video/mp4"
            />
            {t("ReservationManagement_Video_Fallback")}
          </video>
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              {t("ReservationManagement_Hero_Title")}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              {t("ReservationManagement_Hero_Desc")}
            </p>
            <Link
              href="#get-started"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
            >
              {t("ReservationManagement_Hero_Book")}
            </Link>
          </div>
          <div className="flex-1 flex w-[70%] h-auto justify-center z-10">
            <Image
              src="/reservation-management-hero.png"
              alt={t("ReservationManagement_Hero_Image_Alt")}
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl w-full md:max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
            />
          </div>
          {/* Decorative BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-white/0 dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-zinc-900/0 z-0 pointer-events-none" />
        </section>
        {/* Reservation Sections */}
        {reservationSections.map((sec, i) => (
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

export default ReservationManagement;
