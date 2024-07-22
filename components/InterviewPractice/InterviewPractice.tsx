/**
 * This code was generated by Builder.io.
 */
import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import SpeechButton from "./SpeechButton";
import { TextGenerateEffect } from "../LandingPage/text-generate-effect";
import { TypewriterEffect } from "./typewritter-effect";

interface InterviewPracticeProps {
  userName: string;
}

const InterviewPractice: React.FC<InterviewPracticeProps> = ({ userName }) => {
  return (
    <main className="flex justify-center items-center px-16 py-20 bg-black max-md:px-5">
      <section className="flex flex-col justify-end p-5 mt-12 max-w-full rounded-xl border border-solid bg-neutral-900 border-zinc-800 w-[620px] max-md:mt-10">
      <TextGenerateEffect
        words="Hello! Today we will practice your interview skill to be
          Software Engineer."
        className="justify-center font-light text-[17px] text-white bg-neutral-900 max-md:max-w-full"
      />
      {/* <TypewriterEffect
      words="Hello! Today we will practice your interview skill to be
      Software Engineer."
      className="justify-center font-light text-[17px] text-white bg-neutral-900 max-md:max-w-full"
      /> */}
        {/* <p className="justify-center text-[17px] text-white bg-neutral-900 max-md:max-w-full">
          Hello {userName}! Today we will practice your interview skill to be
          Software Engineer.
        </p> */}
        <TextInput placeholder="Type your answer" />
        <div className="flex gap-2 justify-between mt-3 w-full max-md:flex-wrap max-md:max-w-full">
          <SpeechButton />
          <Button text="Send answer" />
        </div>
      </section>
    </main>
  );
};

export default InterviewPractice;
