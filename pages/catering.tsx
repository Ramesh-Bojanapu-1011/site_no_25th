import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const foodSections = [
  // Section 1: How Our Catering Works
  {
    title: "How Our Catering Works",
    desc: "From your first inquiry to the last bite, our process ensures a seamless and memorable catering experience.",

    content: (
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-2xl mx-auto py-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-900 opacity-40 blur-lg z-0 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-0">
            {[
              {
                icon: "https://www.svgrepo.com/show/475307/tax-inquiry.svg",
                label: "Send Inquiry",
                desc: "Tell us about your event and requirements",
              },
              {
                icon: "https://www.svgrepo.com/show/277641/menu.svg",
                label: "Customize Menu",
                desc: "Choose dishes and services to fit your occasion",
              },
              {
                icon: "https://www.svgrepo.com/show/439316/service-workers.svg",
                label: "Event Planning",
                desc: "We coordinate logistics and details",
              },
              {
                icon: "https://www.svgrepo.com/show/397715/partying-face.svg",
                label: "Enjoy the Event",
                desc: "Relax while we serve and manage everything",
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
  // Section 2: Catering Styles & Setups
  {
    title: "Catering Styles & Setups",
    desc: "Select the perfect catering style and setup to match your event’s vibe and needs.",

    content: (
      <div className="flex flex-wrap gap-8 justify-center items-center py-4">
        {[
          {
            name: "Buffet",
            img: "/buffet.jpg",
            desc: "A wide variety of dishes for guests to choose from",
          },
          {
            name: "Plated Service",
            img: "/plated.jpg",
            desc: "Elegant, individually served meals at each table",
          },
          {
            name: "Live Counters",
            img: "/live-counter.jpg",
            desc: "Interactive stations with chefs preparing food live",
          },
        ].map((type) => (
          <div
            key={type.name}
            className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 w-60"
          >
            <Image
              src={type.img}
              alt={type.name}
              width={100}
              height={100}
              className="rounded-xl mb-3 object-cover w-24 h-24"
            />
            <span className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
              {type.name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-300 mb-2">
              {type.desc}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  // Section 3: Why Reserve a Table?
  {
    title: "Why Choose Our Catering?",
    desc: "Discover the benefits of choosing our catering services for your next event.",

    content: (
      <ul className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-200 text-left max-w-xl mx-auto">
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="https://www.svgrepo.com/show/336953/chef-hat-one.svg"
              alt="Expert Chefs"
              width={20}
              height={20}
            />
          </span>
          Expert chefs crafting delicious, customized menus
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="https://www.svgrepo.com/show/439316/service-workers.svg"
              alt="Event Planning"
              width={20}
              height={20}
            />
          </span>
          Complete event planning and coordination support
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="https://www.svgrepo.com/show/235681/tray-plate.svg"
              alt="Full Service"
              width={20}
              height={20}
            />
          </span>
          Full-service staff for setup, serving, and cleanup
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700">
            <Image
              src="https://www.svgrepo.com/show/397713/party-popper.svg"
              alt="Memorable Events"
              width={20}
              height={20}
            />
          </span>
          Make your celebration memorable—relax and enjoy, we’ll handle the
          rest!
        </li>
      </ul>
    ),
  },
  // Section 4: Customer Experiences
  {
    title: "Catering Experiences",
    desc: "See what our clients are saying about our catering for their special events.",

    content: (
      <div className="flex flex-wrap gap-6 justify-center">
        {[
          {
            name: " Sneha R.",
            feedback:
              "The catering was flawless—delicious food and impeccable service! Our guests were truly impressed.",
            img: "/user1.jpg",
          },
          {
            name: "Amit K.",
            feedback:
              "Thank you for making our wedding reception so memorable. The menu was creative and the staff attentive.",
            img: "/user2.jpg",
          },
          {
            name: "Divya P.",
            feedback:
              "Professional, punctual, and the food was a hit at our corporate event. Highly recommended!",
            img: "/user3.jpg",
          },
          {
            name: "Vikram S.",
            feedback:
              "From planning to execution, everything was seamless. Our family loved the variety and taste!",
            img: "/user4.jpg",
          },
        ].map((item, i) => (
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
  // Section 5: Book Your Table CTA
  {
    title: "Catering for Your Special Event!",
    desc: "Make your next celebration unforgettable with our expert catering services—perfect for parties, weddings, and corporate events.",
    icon: "/calendar.svg",
    content: (
      <div
        className="w-full flex flex-col items-center justify-center py-8"
        id="book-table"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
          Plan Your Event With Us!
        </h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
          From menu design to on-site service, our catering team will work with
          you to create a delicious, stress-free event. Reach out for a custom
          quote and let’s make your occasion truly special.
        </p>
        <Link
          href="/contact-us"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-xl shadow-xl hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 animate-bounce-slow"
        >
          Get a Catering Quote
        </Link>
      </div>
    ),
  },
];

const Catering = () => {
  return (
    <>
      <Head>
        <title>Catering Services | Reserve Your Spot</title>
        <meta
          name="description"
          content="Reserve your table online for a seamless dining experience."
        />
      </Head>
      <div className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Headder />
        {/* Hero Section */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:py-24 mx-auto gap-8 min-h-[100vh]">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 dark:opacity-50 pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/catering-hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 drop-shadow-lg">
              Exceptional Catering for Every Occasion
            </h1>
            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 mb-6 max-w-xl">
              From intimate gatherings to grand celebrations, our catering team
              delivers delicious food, flawless service, and unforgettable
              experiences. Let us handle the details—so you can enjoy your event
              stress-free.
            </p>
            <Link
              href="#book-table"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
            >
              Get a Catering Quote
            </Link>
          </div>
          <div className="flex-1 flex w-[70%] h-auto justify-center z-10">
            <Image
              src="/catering-hero.png"
              alt="Catering Service"
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl w-full md:max-w-md object-cover border-4 border-orange-200 dark:border-yellow-700"
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

export default Catering;
