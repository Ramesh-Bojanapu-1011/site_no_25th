import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";

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
      <div>
        <Headder />
        <Footer />
      </div>
    </>
  );
}
