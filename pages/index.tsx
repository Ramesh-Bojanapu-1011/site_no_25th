import { ModeToggle } from "@/components/theme/ModeToggle";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant / Food Delivery Services</title>
        <meta
          name="description"
          content="Delicious food delivered to your door"
        />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[100vh] py-10 px-4 bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
        <div className="fixed flex top-4 right-4 z-50">
          <ModeToggle />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4 text-center drop-shadow-lg">
          Welcome to Restaurant / Food Delivery Services
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 mb-8 text-center max-w-2xl">
          Delicious food delivered to your door. Order now and experience the
          best of restaurant and food delivery services!
        </p>
        <Link
          href="/auth"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-yellow-700"
        >
          Go to Login
        </Link>
      </div>
    </>
  );
}
