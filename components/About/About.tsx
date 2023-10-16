import React from "react";
import { motion } from "framer-motion";
import { AboutIllustration } from "./AboutIllustration";
import { Tabs } from 'flowbite-react';
import { useGeneralContext } from "../../context/AppProvider";
import { useLanguage } from "../../hooks/language/useLanguage";

type Props = {};

export const About = (props: Props) => {
  const { language } = useLanguage()
  const { getDataSection } = useGeneralContext();
  const { title, description, skills } = getDataSection('about_me');
  return (
    <div className="h-screen flex flex-col justify-evenly items-center max-w-7xl m-auto relative text-center md:flex-row md:text-left md:space-x-10">
      <h1 className="section_title">{title[language]}</h1>
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
      <section id="about_tabs" className="w-full leading-7 md:w-1/2 h-1/2">
        <Tabs.Group
          aria-label="Tabs with icons"
          style="underline"
        >
          <Tabs.Item
            title="Who I am?"
          >
            {description[language]}

          </Tabs.Item>
          <Tabs.Item
            active={true}
            title="Where I've worked?"
          >
            Dashboard content
          </Tabs.Item>
          <Tabs.Item
            title="My Skills"
          >
            {skills['Web Development'].map(({ name, icon }: { name: string, icon: string }) => (<label key={name}>{name} {icon}</label>))}
          </Tabs.Item>
        </Tabs.Group>
      </section>
    </div>
  );
};
