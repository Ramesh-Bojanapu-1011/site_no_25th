import React from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const OnlineMenu = () => {
  const { t } = useTranslation();
  const menuSections = [
    // Section 1: How Online Ordering Works
    {
      title: t("OnlineMenu_How_Title", "How Online Ordering Works"),
      desc: t(
        "OnlineMenu_How_Desc",
        "Order your favorite dishes in just a few clicks and enjoy fast, contactless delivery.",
      ),
      // icon: "/online-order.svg",
      content: (
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-2xl mx-auto py-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-40 blur-lg z-0 -translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-0">
              {[
                {
                  icon: "https://www.svgrepo.com/show/277641/menu.svg",
                  label: t("OnlineMenu_Step1_Label", "Browse Menu"),
                  desc: t(
                    "OnlineMenu_Step1_Desc",
                    "Explore our delicious offerings",
                  ),
                },
                {
                  icon: "https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.svg",
                  label: t("OnlineMenu_Step2_Label", "Add to Cart"),
                  desc: t(
                    "OnlineMenu_Step2_Desc",
                    "Select your favorites and customize",
                  ),
                },
                {
                  icon: "https://www.svgrepo.com/show/439256/payment-request-api.svg",
                  label: t("OnlineMenu_Step3_Label", "Checkout"),
                  desc: t(
                    "OnlineMenu_Step3_Desc",
                    "Secure online payment options",
                  ),
                },
                {
                  icon: "https://www.svgrepo.com/show/298778/tracking-track.svg",
                  label: t("OnlineMenu_Step4_Label", "Track & Enjoy"),
                  desc: t(
                    "OnlineMenu_Step4_Desc",
                    "Real-time order tracking and fast delivery",
                  ),
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
      title: t("OnlineMenu_Categories_Title", "Menu Categories"),
      desc: t(
        "OnlineMenu_Categories_Desc",
        "Discover a variety of cuisines and dishes to satisfy every craving.",
      ),
      // icon: "/menu.svg",
      content: (
        <div className="flex flex-wrap gap-8 justify-center items-center py-4">
          {[
            {
              name: t("OnlineMenu_Category_Starters", "Starters"),
              img: "/starters.jpg",
              desc: t(
                "OnlineMenu_Category_Starters_Desc",
                "Tasty beginnings to your meal",
              ),
            },
            {
              name: t("OnlineMenu_Category_MainCourse", "Main Course"),
              img: "/main-course.jpg",
              desc: t(
                "OnlineMenu_Category_MainCourse_Desc",
                "Hearty and flavorful dishes",
              ),
            },
            {
              name: t("OnlineMenu_Category_Desserts", "Desserts"),
              img: "/desserts.jpg",
              desc: t(
                "OnlineMenu_Category_Desserts_Desc",
                "Sweet treats to finish",
              ),
            },
            {
              name: t("OnlineMenu_Category_Beverages", "Beverages"),
              img: "/beverages.jpg",
              desc: t(
                "OnlineMenu_Category_Beverages_Desc",
                "Refreshing drinks and more",
              ),
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
      title: t("OnlineMenu_Featured_Title", "Featured Dishes"),
      desc: t(
        "OnlineMenu_Featured_Desc",
        "Our chef’s top picks, loved by customers and perfect for any occasion.",
      ),
      // icon: "/chef-hat.svg",
      content: (
        <div className="flex flex-wrap gap-8 justify-center items-center py-4">
          {[
            {
              name: t("OnlineMenu_Featured_PaneerTikka", "Paneer Tikka"),
              img: "/paneer-tikka.jpg",
              desc: t(
                "OnlineMenu_Featured_PaneerTikka_Desc",
                "Grilled cottage cheese with spices",
              ),
            },
            {
              name: t("OnlineMenu_Featured_ButterChicken", "Butter Chicken"),
              img: "/butter-chicken.jpg",
              desc: t(
                "OnlineMenu_Featured_ButterChicken_Desc",
                "Creamy tomato-based chicken curry",
              ),
            },
            {
              name: t("OnlineMenu_Featured_VegBiryani", "Veg Biryani"),
              img: "/veg-biryani.jpg",
              desc: t(
                "OnlineMenu_Featured_VegBiryani_Desc",
                "Aromatic rice with mixed vegetables",
              ),
            },
            {
              name: t("OnlineMenu_Featured_GulabJamun", "Gulab Jamun"),
              img: "/gulab-jamun.jpg",
              desc: t(
                "OnlineMenu_Featured_GulabJamun_Desc",
                "Soft, syrupy dessert balls",
              ),
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
      title: t("OnlineMenu_Why_Title", "Why Order Online?"),
      desc: t(
        "OnlineMenu_Why_Desc",
        "Enjoy exclusive benefits and a hassle-free experience when you order from our online menu.",
      ),
      // icon: "/success.svg",
      content: (
        <ul className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-200 text-left max-w-xl mx-auto">
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/520498/clock.svg"
                alt="Quick Delivery"
                width={20}
                height={20}
              />
            </span>
            {t(
              "OnlineMenu_Why_QuickDelivery",
              "Quick and reliable delivery to your doorstep",
            )}
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/425209/discount-tag-ecommerce.svg"
                alt="Exclusive Offers"
                width={20}
                height={20}
              />
            </span>
            {t(
              "OnlineMenu_Why_ExclusiveOffers",
              "Exclusive online-only deals and discounts",
            )}
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/301697/payment-security-bank.svg"
                alt="Secure Payment"
                width={20}
                height={20}
              />
            </span>
            {t(
              "OnlineMenu_Why_SecurePayment",
              "Secure payment and easy checkout",
            )}
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
              <Image
                src="https://www.svgrepo.com/show/428775/support-online-center.svg"
                alt="Support"
                width={20}
                height={20}
              />
            </span>
            {t(
              "OnlineMenu_Why_Support",
              "24/7 customer support for your orders",
            )}
          </li>
        </ul>
      ),
    },
    // Section 5: Customer Reviews
    {
      title: t("OnlineMenu_Reviews_Title", "Customer Reviews"),
      desc: t(
        "OnlineMenu_Reviews_Desc",
        "See what our happy customers are saying about their online ordering experience.",
      ),
      // icon: "/user1.jpg",
      content: (
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            {
              name: t("OnlineMenu_Reviews_Name1", "Rohit S."),
              feedback: t(
                "OnlineMenu_Reviews_Review1",
                "Ordering online was so easy and the food arrived hot and fresh!",
              ),
              img: "/user2.jpg",
            },
            {
              name: t("OnlineMenu_Reviews_Name2", "Neha T."),
              feedback: t(
                "OnlineMenu_Reviews_Review2",
                "Loved the variety and the quick delivery. Will order again!",
              ),
              img: "/user1.jpg",
            },
            {
              name: t("OnlineMenu_Reviews_Name3", "Arjun M."),
              feedback: t(
                "OnlineMenu_Reviews_Review3",
                "Great offers and the checkout process was smooth.",
              ),
              img: "/user4.jpg",
            },
            {
              name: t("OnlineMenu_Reviews_Name4", "Simran P."),
              feedback: t(
                "OnlineMenu_Reviews_Review4",
                "Customer support was very helpful with my order.",
              ),
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
                className="rounded-full object-cover object-top w-20 h-20 mb-2"
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
      title: t("OnlineMenu_CTA_Title", "Ready to Order?"),
      desc: t(
        "OnlineMenu_CTA_Desc",
        "Browse our menu and place your order for a delicious meal delivered to your door!",
      ),
      // icon: "/cart.svg",
      content: (
        <div
          className="w-full flex flex-col items-center justify-center py-8"
          id="order-now"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
            {t("OnlineMenu_CTA_Reserve", "Order Online Now!")}
          </h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
            {t(
              "OnlineMenu_CTA_Reserve_Desc",
              "Enjoy restaurant-quality food at home. Fast delivery, secure payment, and exclusive deals await you.",
            )}
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-xl shadow-xl hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 animate-bounce-slow"
          >
            {t("OnlineMenu_CTA_BookNow", "Contact us")}
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          {t("OnlineMenu_Meta_Title", "Online Menu | Order Food Online")}
        </title>
        <meta
          name="description"
          content={t(
            "OnlineMenu_Meta_Desc",
            "Order your favorite dishes online for fast delivery. Browse our menu and enjoy exclusive offers.",
          )}
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
            <source src="/online-menu-hero-bg.mp4" type="video/mp4" />
            {t(
              "OnlineMenu_Video_Fallback",
              "Your browser does not support the video tag.",
            )}
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-white/0 dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-zinc-900/0 z-0 pointer-events-none" />
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              {t("OnlineMenu_Hero_Title", "Order Delicious Food Online")}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              {t(
                "OnlineMenu_Hero_Desc",
                "Explore our menu, customize your order, and enjoy fast delivery to your doorstep. Restaurant-quality food, just a click away!",
              )}
            </p>
            <Link
              href="#order-now"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
            >
              {t("OnlineMenu_Hero_Book", "Order Now")}
            </Link>
          </div>
          <div className="flex-1 flex w-[70%] h-auto justify-center z-10">
            <Image
              src="/online-menu-hero.png"
              alt={t("OnlineMenu_Hero_Image_Alt", "Online Menu")}
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

export default OnlineMenu;
