import React from "react";
import Image from 'next/image';


type Props = {};

export const ProjectItem = (props: Props) => {
  return (
    <article className="snap-center shrink-0 md:max-w-7xl flex flex-col space-y-5 items-center justify-center px-6 md:px-20 lg:px-44 w-screen">
      <Image
        className="max-h-80"
        alt="Logo"
        src="https://raw.githubusercontent.com/tatianatorog/Burger-queen/test-bq/src/assets/Home.png"
        width={350}
        height={300}
      />
      <h1 className="text-xl font-bold">Project name</h1>
      <p>
        <small>Javascript - CSS</small>
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        doloribus beatae doloremque voluptatum tempora odio adipisci quae
        tempore soluta porro odit corporis consequuntur vitae aliquid architecto
        fugiat, qui totam eos magni non quia ratione. Autem commodi obcaecati
        alias illo doloremque quas cupiditate quibusdam ipsa laboriosam. Omnis
        laborum eaque laboriosam iusto!
      </p>
    </article>
  );
};
