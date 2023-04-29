import React from "react";

type Props = {
  children: React.ReactNode;
  name: string;
};

export const Skill = ({ children, name }: Props) => {
  return (
    <div className="relative group w-1/5 h-1/5 cursor-pointer">
      <label className="absolute z-1 top-1/3 left-1/3 hidden group-hover:inline-block">
        {name}
      </label>
      {children}
    </div>
  );
};
