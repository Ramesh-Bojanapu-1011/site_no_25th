import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert("Form action URL not found.");
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const content = await response.json();
      console.log("Form submission successful:", content);

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 transition-colors duration-300">
      <Headder />

      {/* 1. Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-20 min-h-[100vh] w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 dark:opacity-50 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/contact-hero-bg.mp4" type="video/mp4" />
          {t("Contact_Video_Fallback")}
        </video>
        <div className="flex-1 flex flex-col justify-center items-start z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-6 drop-shadow-lg animate-slide-in-left">
            {t("Contact_Hero_Title")}
          </h1>
          <p className="text-lg md:text-2xl dark:text-zinc-200 mb-8 max-w-2xl animate-fade-in-up">
            {t("Contact_Hero_Desc")}
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center z-20">
          <Image
            src="/contact-hero-illus.jpg"
            alt={t("Contact_Hero_Image_Alt")}
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl h-[350px] object-center object-cover "
            style={{ animationDelay: "0.5s", animationDuration: "1.2s" }}
            width={350}
            height={350}
          />
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className="py-16 px-4 w-full   mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-8 text-center animate-fade-in-up caret-transparent">
          {t("Contact_Form_Title")}
        </h2>
        {success && (
          <div
            id="successMessage"
            className="flex flex-col items-center justify-center my-6  caret-transparent  "
          >
            <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 mb-2 shadow-lg flex items-center justify-center animate-bounce">
              <svg
                className="w-10 h-10 text-green-600 dark:text-green-400"
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
            </div>
            <p className="text-green-700 dark:text-green-300 font-bold text-lg text-center">
              {t("Contact_Form_Success")}
            </p>
          </div>
        )}
        <form
          className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-orange-100 dark:border-yellow-900 p-8 flex flex-col gap-6 animate-fade-in-up"
          ref={formRef}
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xovlekvg"
          method="POST"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder={t("Contact_Form_Name")}
              className="flex-1 px-5 py-3 rounded-xl border-2 border-orange-200 dark:border-yellow-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("Contact_Form_Email")}
              className="flex-1 px-5 py-3 rounded-xl border-2 border-orange-200 dark:border-yellow-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder={t("Contact_Form_Message")}
            className="px-5 py-3 rounded-xl border-2 border-orange-200 dark:border-yellow-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[120px]"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 text-white px-10 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300 dark:hover:shadow-yellow-700 border-2 border-orange-200 dark:border-yellow-600 text-lg animate-pop-in"
          >
            {t("Contact_Form_Button")}
          </button>
        </form>
      </section>

      {/* 3. Meet Our Agents Section */}
      <section className="py-16 px-4 w-full   mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-8 text-center animate-fade-in-up">
          {t("Contact_Agents_Title")}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-200 text-lg text-center mb-10 animate-fade-in-up">
          {t("Contact_Agents_Desc")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up">
          {/* Agent 1 */}
          <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 border-2 border-orange-100 dark:border-yellow-900">
            <Image
              src="/agent1.jpg"
              alt={t("Contact_Agents_1_Alt")}
              width={120}
              height={120}
              className="rounded-full object-top  mb-4 shadow-lg object-cover h-28 w-28"
            />
            <h3 className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
              {t("Contact_Agents_1_Name")}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-2">
              {t("Contact_Agents_1_Role")}
            </p>
            <p className="text-zinc-700 dark:text-zinc-200 text-center text-sm">
              {t("Contact_Agents_1_Desc")}
            </p>
          </div>
          {/* Agent 2 */}
          <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 border-2 border-orange-100 dark:border-yellow-900">
            <Image
              src="/agent2.jpg"
              alt={t("Contact_Agents_2_Alt")}
              width={120}
              height={120}
              className="rounded-full mb-4 shadow-lg object-top object-cover h-28 w-28"
            />
            <h3 className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
              {t("Contact_Agents_2_Name")}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-2">
              {t("Contact_Agents_2_Role")}
            </p>
            <p className="text-zinc-700 dark:text-zinc-200 text-center text-sm">
              {t("Contact_Agents_2_Desc")}
            </p>
          </div>
          {/* Agent 3 */}
          <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 border-2 border-orange-100 dark:border-yellow-900">
            <Image
              src="/agent3.jpg"
              alt={t("Contact_Agents_3_Alt")}
              width={120}
              height={120}
              className="rounded-full mb-4 object-top  shadow-lg object-cover h-28 w-28"
            />
            <h3 className="font-bold text-orange-600 dark:text-yellow-400 text-lg mb-1">
              {t("Contact_Agents_3_Name")}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-2">
              {t("Contact_Agents_3_Role")}
            </p>
            <p className="text-zinc-700 dark:text-zinc-200 text-center text-sm">
              {t("Contact_Agents_3_Desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Delivery Partner Section */}
      <section className="py-16 px-4 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-8 text-center animate-fade-in-up">
          {t("Contact_Partners_Title")}
        </h2>
        <div className="flex flex-wrap gap-8 justify-center items-center animate-fade-in-up">
          <Image
            src="/partner1.jpg"
            alt={t("Contact_Partners_1_Alt")}
            width={100}
            height={60}
            className="h-20 w-20 rounded-full object-cover object-top"
          />
          <Image
            src="/partner2.jpg"
            alt={t("Contact_Partners_2_Alt")}
            width={100}
            height={60}
            className="h-20 w-20 rounded-full object-cover object-top"
          />
          <Image
            src="/partner3.jpg"
            alt={t("Contact_Partners_3_Alt")}
            width={100}
            height={60}
            className="h-20 w-20 rounded-full object-cover object-top"
          />
        </div>
        <p className="text-center text-zinc-700 dark:text-zinc-200 mt-6 animate-fade-in-up">
          {t("Contact_Partners_Desc")}
        </p>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-16 px-4 w-full   mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-8 text-center animate-fade-in-up">
          {t("Contact_FAQ_Title")}
        </h2>
        <div className="space-y-6 animate-fade-in-up">
          <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-6 border-2 border-orange-100 dark:border-yellow-900">
            <h3 className="font-bold text-orange-600 dark:text-yellow-400 mb-2">
              {t("Contact_FAQ_1_Q")}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-200">
              {t("Contact_FAQ_1_A")}
            </p>
          </div>
          <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-6 border-2 border-orange-100 dark:border-yellow-900">
            <h3 className="font-bold text-orange-600 dark:text-yellow-400 mb-2">
              {t("Contact_FAQ_2_Q")}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-200">
              {t("Contact_FAQ_2_A")}
            </p>
          </div>
          <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-6 border-2 border-orange-100 dark:border-yellow-900">
            <h3 className="font-bold text-orange-600 dark:text-yellow-400 mb-2">
              {t("Contact_FAQ_3_Q")}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-200">
              {t("Contact_FAQ_3_A")}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Customer Support & Feedback Section */}
      <section className="py-16 px-4 w-full flex flex-col items-center justify-center gap-8   mx-auto bg-gradient-to-br from-orange-50 via-yellow-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900">
        <div className="w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-3xl shadow-xl border-2 border-orange-100 dark:border-yellow-900 px-8 py-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-yellow-400 mb-4 text-center animate-fade-in-up">
            {t("Contact_Support_Title")}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 text-lg text-center mb-8 animate-fade-in-up">
            {t("Contact_Support_Desc")}
          </p>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <div className="flex items-center gap-3 bg-white dark:bg-zinc-800 rounded-xl shadow p-4 border border-orange-100 dark:border-yellow-900 animate-fade-in-up">
              <span className="text-orange-600 dark:text-yellow-400 font-bold">
                📞
              </span>
              <span className="text-zinc-700 dark:text-zinc-200">
                {t("Contact_Support_Hotline_Label")}{" "}
                <a
                  href="tel:+1234567890"
                  className="text-orange-600 dark:text-yellow-400 font-bold"
                >
                  +1 234 567 890
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-zinc-800 rounded-xl shadow p-4 border border-orange-100 dark:border-yellow-900 animate-fade-in-up">
              <span className="text-orange-600 dark:text-yellow-400 font-bold">
                ✉
              </span>
              <span className="text-zinc-700 dark:text-zinc-200">
                {t("Contact_Support_Email_Label")}{" "}
                <a
                  href="mailto:support@enkonixrestaurant.com"
                  className="text-orange-600 dark:text-yellow-400 font-bold"
                >
                  support@stackly.com
                </a>
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-zinc-800 rounded-xl shadow p-4 border border-orange-100 dark:border-yellow-900 animate-fade-in-up">
              <span className="text-orange-600 dark:text-yellow-400 font-bold">
                ⭐
              </span>
              <span className="text-zinc-700 dark:text-zinc-200">
                {t("Contact_Support_Feedback_Label")}{" "}
                <Link
                  href="/feedback"
                  className="text-orange-600 dark:text-yellow-400 font-bold underline"
                >
                  {t("Contact_Support_Feedback_Button")}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
