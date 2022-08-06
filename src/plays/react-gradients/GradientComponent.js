import React from "react";
import { SiTailwindcss, SiCss3 } from "react-icons/si";

const GradientComponent = ({ index, name, css, tailwind }) => {
  return (
    <div
      key={index}
      className="group relative h-72 w-[22rem] rounded-2xl transition-all duration-150 hover:scale-105 border-[6px] border-[#010326]"
      style={{ background: css }}
    >
      <div className="absolute group-hover:flex hidden right-0 top-0 w-fit rounded-lg rounded-tl-none rounded-br-none bg-[#010326] transition-all duration-200 p-1 justify-center items-center border-2 border-[#010326]">
        <GradientCopyButton>
          <SiTailwindcss />
        </GradientCopyButton>
        <GradientCopyButton>
          <SiCss3 />
        </GradientCopyButton>
        <GradientCopyButton>
          <span className="text-sm">#010326</span>
        </GradientCopyButton>
        <GradientCopyButton>
          <span className="text-sm">#010326</span>
        </GradientCopyButton>
      </div>
      <div class="absolute bottom-0 w-full rounded-b-lg bg-[#010326] py-4 px-6 text-xl font-bold text-white">
        {name}
      </div>
    </div>
  );
};

export default GradientComponent;

const GradientCopyButton = ({ children, handleOnClick }) => {
  return (
    <button
      className="flex justify-center items-center text-center mx-1 p-2 text-gray-300 hover:text-white hover:bg-cyan-700 text-xl hover:bg-opacity-60 rounded-full transition-all duration-200"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
