import React from "react";
import { ContactIllustration } from "./ ContactIllustration";

type Props = {};

export const Contact = (props: Props) => {
  return (
    <div className="max-w-7xl m-auto h-screen relative flex justify-center items-center space-x-20">
      <h1 className="section_title">Contact</h1>
      <div className="w-2/5">
        <ContactIllustration />
      </div>
      <div className="w-2/5 flex flex-col space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque
          ipsam cum quam aliquid eveniet, eos quasi at? Quos, earum. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Dolorum, tempore.
        </p>
        <a
          href="mailto:dcolarte.a@gmail.com"
          className="p-3 rounded text-transparent text-center bg-clip-text bg-gradient-to-l from-blue-400 to-green-500 border hover:border-green-500 shadow-lg"
        >
          Send me an email
        </a>
      </div>
    </div>
  );
};
