import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

type Props = {
  themeVariant: string,
};

export const Header = (props: Props) => {
  return (
    <motion.header
      className="sticky top-0 z-20 bg-white bg-opacity-50 backdrop-blur dark:bg-neutral-800 dark:bg-opacity-50 shadow"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <nav id="top-navbar" className="flex justify-between pr-10">
        <div>
          <a className="flex gap-1 items-center cursor-pointer">
            <Image
              src={`/logo-${props.themeVariant}.png`}
              alt="profile"
              width={60}
              height={60}
            />
            <p>Catalina Olarte</p>
          </a>
        </div>
        <ul className="flex flex-row items-center gap-5">
          <li className="nav-bar-link">About me</li>
          <li className="nav-bar-link">Skills</li>
          <li className="nav-bar-link">Projects</li>
          <li className="nav-bar-link">Contact</li>
        </ul>
      </nav>
    </motion.header>
  );
};
