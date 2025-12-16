import "@/styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-light py-2 sm:py-4 md:py-6">
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
          <Footer />
        </AnimatePresence>
      </main>
    </>
  );
}
