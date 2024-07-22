/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { BackgroundGradient } from "../audio-motion/SpeechListen";

const SpeechButton: React.FC = () => {
  return (
    <BackgroundGradient className="">
    <button className="flex gap-2 px-3 py-2 bg-[#222] my-auto items-center text-[15px] leading-5 rounded-lg text-zinc-50">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1910d56b13611a556c5df8f73c54aa7971bbdf1d4c074299f569652de6ce36fb?apiKey=6ee96d3b3ee64c86b2c46c1115c15bdc&"
        className="shrink-0 w-5 aspect-square"
        alt=""
      />
      <span>Listening...</span>
    </button>
    </BackgroundGradient>
  );
};

export default SpeechButton;
