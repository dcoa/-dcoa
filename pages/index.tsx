import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Catalina Olarte</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth">
        {/* Header */}
        <Header />
        {/* home */}
        <section id="home" className="snap-start">
          <Hero />
        </section>
        {/* About me */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Skills */}
        {/* Proyects */}
        {/* Contect */}
      </main>
    </>
  );
}
