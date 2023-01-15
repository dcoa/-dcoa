import React from "react";
import { motion } from "framer-motion";
import { AboutIllustration } from "./AboutIllustration";

type Props = {};

export const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center max-w-7xl m-auto relative text-center md:flex-row md:text-left md:space-x-10">
      <h1 className="section_title">About me</h1>
      <motion.div
        initial={{
          opacity: 0,
          y: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-2/5"
      >
        <AboutIllustration mode="light" />
      </motion.div>
      <div id="profile_descriotion" className="w-full leading-7 md:w-1/2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem
          eos aliquid! Consequuntur recusandae commodi tenetur maxime animi,
          dolores sed voluptas praesentium a qui neque labore natus modi
          corrupti eveniet unde voluptates excepturi aperiam cumque delectus
          iusto molestiae atque cum rerum. Laudantium similique distinctio
          laboriosam labore? Pariatur aperiam explicabo quasi?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem
          eos aliquid! Consequuntur recusandae commodi tenetur maxime animi,
          dolores sed voluptas praesentium a qui neque labore natus modi
          corrupti eveniet unde voluptates excepturi aperiam cumque delectus
          iusto molestiae atque cum rerum. Laudantium similique distinctio
          laboriosam labore? Pariatur aperiam explicabo quasi?
        </p>
      </div>
    </div>
  );
};
