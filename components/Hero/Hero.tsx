import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HomeIlustration } from "./HomeIlustration";
import { motion } from "framer-motion";

type Props = {};

export const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sint eligendi! Distinctio adipisci, vitae repellendus consequatur obcaecati.",
    ],
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <motion.div
      className=" max-w-7xl m-auto h-screen flex items-center gap-5"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="w-1/2 flex items-start flex-col justify-center">
        <p className="leading-10">Hi, my name is</p>
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-green-500">
          Diana Catalina Olarte.
        </p>
        <p className=" text-3xl text-gray-500">Frontend Developer.</p>

        <div className="mt-5 text-l h-10">
          <span>{text}</span>
          <Cursor cursorColor="#22c55e" />
        </div>
      </div>
      <div className="w-1/2">
        <HomeIlustration mode="light" />
      </div>
    </motion.div>
  );
};
