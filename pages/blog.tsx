import React, { useEffect } from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";

const blogs = [
  {
    title: "5 Ways to Boost Your Restaurant's Delivery Experience",
    desc: "Discover proven strategies to enhance your food delivery service and delight your customers every time.",
    image: "/blog1.jpg",
    link: " /boost-delivery-experience",
    date: "August 2025",
    author: "Chef Riya",
  },
  {
    title: "The Future of Online Food Ordering: Trends to Watch",
    desc: "Explore the latest trends in online food ordering and how restaurants can stay ahead in a digital world.",
    image: "/blog2.jpg",
    link: " /food-ordering-trends",
    date: "August 2025",
    author: "Sandeep Kumar",
  },
  {
    title: "From Local Farms to Your Table: The Rise of Farm-to-Fork Delivery",
    desc: "Discover how restaurants are partnering with local farmers to offer fresher, healthier meals delivered straight to your door.",
    image: "/blog3.jpg",
    link: "/farm-to-fork-delivery",
    date: "August 2025",
    author: "Priya Singh",
  },
];

export default function Blog() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 60 });
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-900 transition-colors duration-300">
      <Headder />

      {/* 1. Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between px-4 py-20 min-h-[100vh] w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900"
        data-aos="fade-up"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 dark:opacity-50 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/blog-hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex-1 flex flex-col justify-center items-start z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-6 drop-shadow-lg animate-slide-in-left">
            Restaurant & Food Delivery Blog
          </h1>
          <p className="text-lg md:text-2xl dark:text-zinc-200 mb-8 max-w-2xl animate-fade-in-up">
            Insights, tips, and trends for restaurant owners, foodies, and
            delivery lovers. Stay updated with the latest in the food service
            world!
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center z-20">
          <Image
            src="/blog-hero-illus.svg"
            alt="Blog Hero"
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl h-[350px] object-center object-cover "
            data-aos="zoom-in"
            style={{ animationDelay: "0.5s", animationDuration: "1.2s" }}
            width={350}
            height={350}
          />
        </div>
      </section>

      {/* 2. Featured Blogs Section */}
      <section
        className="py-16 px-4 w-full max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-12 text-center animate-fade-in-up">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={blog.title}
              className="group relative flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-orange-100 dark:border-yellow-900 p-8 hover:scale-105 hover:shadow-orange-200 dark:hover:shadow-yellow-900 transition-all duration-500 cursor-pointer animate-fade-in-up"
              data-aos="zoom-in"
              style={{
                animationDelay: `${0.1 + idx * 0.1}s`,
                animationDuration: "1.1s",
              }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-2xl mb-6 shadow-lg animate-pop-in"
                width={320}
                height={160}
              />
              <h3 className="text-xl font-bold text-orange-600 dark:text-yellow-400 mb-2 text-center">
                {blog.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-200 text-center mb-4">
                {blog.desc}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
              <Link href={blog.link}>
                <span className="inline-block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-orange-300 dark:group-hover:shadow-yellow-700 border-2 border-orange-200 dark:border-yellow-600">
                  Read More
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About the Blog Section */}
      <section
        className="py-16 px-4 w-full max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-8 text-center animate-fade-in-up">
          About Our Blog
        </h2>
        <p className="text-zinc-700 dark:text-zinc-200 text-lg text-center mb-6 animate-fade-in-up">
          Our blog is dedicated to sharing the latest insights, expert tips, and
          inspiring stories from the world of restaurants and food delivery.
          Whether you’re a business owner, chef, or food lover, you’ll find
          something valuable here.
        </p>
      </section>

      {/* 4. Tips & Resources Section */}
      <section
        className="py-16 px-4 w-full max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-8 text-center animate-fade-in-up">
          Tips & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border-2 border-orange-100 dark:border-yellow-900 animate-fade-in-up">
            <h3 className="text-xl font-bold text-orange-600 dark:text-yellow-400 mb-2">
              How to Choose the Right Delivery Partner
            </h3>
            <p className="text-zinc-700 dark:text-zinc-200">
              Learn what to look for in a delivery partner to ensure your food
              arrives fresh and on time, every time.
            </p>
          </div>
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border-2 border-orange-100 dark:border-yellow-900 animate-fade-in-up">
            <h3 className="text-xl font-bold text-orange-600 dark:text-yellow-400 mb-2">
              Marketing Your Restaurant Online
            </h3>
            <p className="text-zinc-700 dark:text-zinc-200">
              Discover digital marketing strategies to attract new customers and
              keep your regulars coming back for more.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Community Stories Section */}
      <section
        className="py-16 px-4 w-full max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-8 text-center animate-fade-in-up">
          Community Stories
        </h2>
        <p className="text-zinc-700 dark:text-zinc-200 text-lg text-center mb-6 animate-fade-in-up">
          Read inspiring stories from restaurant owners, delivery partners, and
          foodies who are making a difference in their communities.
        </p>
      </section>

      {/* 6. Call to Action Section */}
      <section
        className="py-16 px-4 w-full flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto bg-gradient-to-br from-orange-50 via-yellow-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900 rounded-3xl shadow-2xl"
        data-aos="fade-up"
      >
        <div className="w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-3xl shadow-xl border-2 border-orange-100 dark:border-yellow-900 px-8 py-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-4 text-center animate-fade-in-up">
            Want More Insights?
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 text-lg text-center mb-8 animate-fade-in-up">
            Subscribe to our newsletter for the latest updates, tips, and
            exclusive offers from the world of food delivery and restaurants.
          </p>
          <Link href="/subscribe">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-600 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-300 dark:hover:shadow-orange-700 border-2 border-yellow-200 dark:border-orange-600 animate-pop-in text-lg">
              Subscribe Now
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
