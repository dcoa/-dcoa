import React from "react";
import { ProjectItem } from "./ProjectItem";

type Props = {};

export const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="md:max-w-7xl m-auto h-screen  relative flex flex-col justify-center items-center w-screen">
      <h1 className="section_title">Projects</h1>
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden bar">
        {projects.map((project) => (
          <ProjectItem />
        ))}
      </div>
    </div>
  );
};
