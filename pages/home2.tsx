import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Head from "next/head";

const Home2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home2_hero_title")}</title>
        <meta name="description" content={t("home2_hero_desc")} />
      </Head>
      <Headder />
      {/* Hero Section: Fullscreen video with overlayed content and image */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-0 min-h-screen w-full">
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
        <div className="relative z-20 flex-1 flex flex-col justify-center items-start md:items-start pt-32 pb-16">
          <h1 className="text-4xl md:text-7xl font-extrabold text-orange-600 dark:text-yellow-400 mb-6 drop-shadow-lg">
            {t("home2_hero_heading")}
          </h1>
          <p className="text-lg md:text-2xl text-black dark:text-zinc-200 mb-8 max-w-2xl">
            {t("home2_hero_text")}
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
      <section className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-zinc-800 dark:to-yellow-900">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            {t("home2_chefs_title")}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            {t("home2_chefs_text")}
          </p>
        </div>
        <div className="flex-1 flex flex-wrap gap-6 justify-center">
          {[
            { img: "/chef1.jpg", name: t("home2_chefs_name_1") },
            { img: "/chef2.jpg", name: t("home2_chefs_name_2") },
            { img: "/chef3.jpg", name: t("home2_chefs_name_3") },
            { img: "/chef4.jpg", name: t("home2_chefs_name_4") },
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
      <section className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            {t("home2_menu_title")}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            {t("home2_menu_text")}
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "https://www.svgrepo.com/show/356622/pizza-01.svg",
              title: t("home2_menu_item_1"),
            },
            {
              icon: "https://www.svgrepo.com/show/356623/sandwich-burger.svg",
              title: t("home2_menu_item_2"),
            },
            {
              icon: "https://www.svgrepo.com/show/356579/sushi-03-nigiri-sake.svg",
              title: t("home2_menu_item_3"),
            },
            {
              icon: "https://www.svgrepo.com/show/356655/ice-cream-sundae-02.svg",
              title: t("home2_menu_item_4"),
            },
            {
              icon: "https://www.svgrepo.com/show/356651/strawberry-smoothie.svg",
              title: t("home2_menu_item_5"),
            },
            {
              icon: "https://www.svgrepo.com/show/356599/salad.svg",
              title: t("home2_menu_item_6"),
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
      <section className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 bg-gradient-to-l from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-zinc-900">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            {t("home2_how_title")}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            {t("home2_how_text")}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {[
            {
              icon: "https://www.svgrepo.com/show/277641/menu.svg",
              title: t("home2_how_step_1"),
            },
            {
              icon: "https://www.svgrepo.com/show/503678/order-food.svg",
              title: t("home2_how_step_2"),
            },
            {
              icon: "https://www.svgrepo.com/show/269548/logistics-delivery-express.svg",
              title: t("home2_how_step_3"),
            },
            {
              icon: "https://www.svgrepo.com/show/429373/chow-food-mein.svg",
              title: t("home2_how_step_4"),
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
      <section className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12 mx-auto">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            {t("home2_ambience_title")}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-lg">
            {t("home2_ambience_text")}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/ambience.jpg"
            alt="Ambience"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>
      {/* Section 6: Stay Updated */}
      <section className="py-16 px-4 w-full flex flex-col md:flex-row items-center gap-12   mx-auto bg-gradient-to-l from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-zinc-900">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-yellow-400 mb-6">
            {t("home2_newsletter_title")}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6">
            {t("home2_newsletter_text")}
          </p>
          <form className="flex w-full max-w-md bg-white/90 dark:bg-zinc-800/90 rounded-full shadow-lg overflow-hidden border-2 border-orange-200 dark:border-yellow-700">
            <input
              type="email"
              placeholder={t("home2_newsletter_placeholder")}
              className="flex-1 px-6 py-4 bg-transparent outline-none text-zinc-800 dark:text-zinc-100"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold hover:from-orange-600 hover:to-yellow-500 transition-all"
            >
              {t("home2_newsletter_button")}
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
