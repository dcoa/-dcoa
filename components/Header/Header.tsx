import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const Header = (props: Props) => {
  return (
    <motion.header
      className="sticky top-0 z-20 bg-white bg-opacity-50 backdrop-blur shadow"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <nav id="top-navbar" className="flex justify-between p-5">
        <div>
          <a>
            {/* <img
            src="https://avatars.githubusercontent.com/u/66016493?v=4"
            alt="profile"
            width="40"
            height="40"
          /> */}
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
