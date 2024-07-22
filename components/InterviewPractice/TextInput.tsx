/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <input
      className="justify-center placeholder:text-[#4d4d4d] p-4 mt-8 text-base break-words rounded-2xl border focus:border-violet-300 focus:outline-none bg-neutral-900 border-zinc-800 text-zinc-50 max-md:max-w-full w-full"
      type="text"
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
};

export default TextInput;
