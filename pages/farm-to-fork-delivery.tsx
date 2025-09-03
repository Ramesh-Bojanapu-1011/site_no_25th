import React from "react";
import Head from "next/head";
import Image from "next/image";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const FarmToForkDelivery = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("FarmToFork_Title")}</title>
        <meta name="description" content={t("FarmToFork_Meta_Desc")} />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-16 md:py-24 mx-auto gap-8 min-h-[100vh]">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              {t("FarmToFork_Hero_Title")}
            </h1>
            <p className="dark:text-zinc-200 text-lg md:text-2xl text-zinc-700   mb-6 max-w-xl">
              {t("FarmToFork_Hero_Desc")}
            </p>
          </div>
          <div className="flex-1 flex w-full md:w-[70%] h-auto justify-center z-10">
            <Image
              src="/blog2.jpg"
              alt={t("FarmToFork_Hero_Image_Alt")}
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
            {t("FarmToFork_Content_Title")}
          </h2>
          <p className="dark:text-zinc-200 mb-4 text-lg">
            {t("FarmToFork_Content_Intro")}
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 dark:text-zinc-200 ">
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                {t("FarmToFork_Content_Tip1_Title")}
              </span>{" "}
              {t("FarmToFork_Content_Tip1_Desc")}
            </li>
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                {t("FarmToFork_Content_Tip2_Title")}
              </span>{" "}
              {t("FarmToFork_Content_Tip2_Desc")}
            </li>
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                {t("FarmToFork_Content_Tip3_Title")}
              </span>{" "}
              {t("FarmToFork_Content_Tip3_Desc")}
            </li>
            <li>
              <span className="font-semibold text-orange-600 dark:text-yellow-400">
                {t("FarmToFork_Content_Tip4_Title")}
              </span>{" "}
              {t("FarmToFork_Content_Tip4_Desc")}
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 dark:text-yellow-300 mb-3 mt-8">
            {t("FarmToFork_Content_HowWorks_Title")}
          </h3>
          <p className="dark:text-zinc-200 mb-4">
            {t("FarmToFork_Content_HowWorks_Desc")}
          </p>
          <ul className="list-decimal pl-6 mb-4 space-y-2 dark:text-zinc-200 ">
            <li>{t("FarmToFork_Content_HowWorks_Step1")}</li>
            <li>{t("FarmToFork_Content_HowWorks_Step2")}</li>
            <li>{t("FarmToFork_Content_HowWorks_Step3")}</li>
            <li>{t("FarmToFork_Content_HowWorks_Step4")}</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 dark:text-yellow-300 mb-3 mt-8">
            {t("FarmToFork_Content_Benefits_Title")}
          </h3>
          <p className="dark:text-zinc-200 mb-4">
            {t("FarmToFork_Content_Benefits_Desc")}
          </p>
          <p className="  mb-2 font-semibold text-orange-700 dark:text-yellow-300">
            {t("FarmToFork_Content_Benefits_Ready")}
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default FarmToForkDelivery;
