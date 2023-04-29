import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HomeIlustration } from "./HomeIlustration";
import { motion } from "framer-motion";
import { useGeneralContext } from "../../context/AppProvider";
import { useLanguage } from "../../hooks/language/useLanguage";

type Props = {};

export const Hero = (props: Props) => {
  const { language } = useLanguage()
  const { getDataSection } = useGeneralContext();
  const { greeting, intro } = getDataSection('hero');
  const [text] = useTypewriter({
    words: [intro[language]],
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <motion.div
      className="h-screen flex items-center gap-5 md:max-w-7xl m-auto md:p-8"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="items-center flex flex-col justify-center text-center md:w-1/2 md:items-start md:text-start">
        <p className="leading-10">{greeting[language]}</p>
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-green-500">
          Diana Catalina Olarte
        </p>
        <p className=" text-3xl text-gray-500 dark:text-gray-400">Frontend Developer</p>

        <div className="mt-5 text-l h-10">
          <span>{text}</span>
          <Cursor cursorColor="#22c55e" />
        </div>
      </div>
      <div className="w-1/2 hidden md:inline-block">
        <HomeIlustration mode="light" />
      </div>
    </motion.div>
  );
};
