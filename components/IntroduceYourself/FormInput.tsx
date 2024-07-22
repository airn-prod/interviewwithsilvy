import React from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center mb-1 text-[#929292]">
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="block mt-6 text-sm  w-full justify-start font-medium leading-5 max-md:max-w-full"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(" ", "-")}
        placeholder={placeholder}
        className="px-4 py-3 mt-1.5 max-w-full rounded-lg border-solid shadow-sm bg-neutral-900 border-zinc-800 placeholder:text-[#4d4d4d] border focus:border-violet-300 focus:outline-none text-zinc-50 w-[480px] max-md:max-w-full"
      />
    </div>
  );
};

export default FormInput;
