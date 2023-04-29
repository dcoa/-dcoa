import {
  DiCss3,
  DiBootstrap,
  DiHtml5,
  DiGit,
  DiGithubBadge,
  DiJsBadge,
  DiReact,
  DiMysql,
  DiJqueryLogo
} from "react-icons/di";

import { IoLogoFirebase, IoLogoFigma } from "react-icons/io5";
import { SiTailwindcss, SiJest, SiTestinglibrary } from "react-icons/si";
import { Skill } from "./Skill";

type Props = {};

export const Skills = (props: Props) => {
  return (
    <div className="max-w-7xl m-auto h-screen  relative flex flex-col justify-center items-center">
      <h1 className="section_title">Skills</h1>
      <p>
        This is a list of technologies that use in my day by day job and
        projects:
      </p>
      <div className="px-3 mt-10 flex flex-row flex-wrap h-1/2 w-1/2 ">
        <DiHtml5 className="w-1/5 h-1/5 " />
        <DiJsBadge className="w-1/5 h-1/5" />
        <DiReact className="w-1/5 h-1/5" />
        <SiJest className="w-1/5 h-1/5" />
        <SiTestinglibrary className="w-1/5 h-1/5" />
        <DiCss3 className="w-1/5 h-1/5" />
        <DiBootstrap className="w-1/5 h-1/5" />
        <SiTailwindcss className="w-1/5 h-1/5" />
        <IoLogoFirebase className="w-1/5 h-1/5" />
        <DiMysql className="w-1/5 h-1/5" />
        <DiGit className="w-1/5 h-1/5" />
        <DiGithubBadge className="w-1/5 h-1/5" />
        <IoLogoFigma className="w-1/5 h-1/5" />
        <DiJqueryLogo className="w-1/5 h-1/5" />
        <Skill name="Figma">
          <IoLogoFigma className="w-full h-full fill-green-500 group-hover:fill-green-300" />
        </Skill>
      </div>
    </div>
  );
};
