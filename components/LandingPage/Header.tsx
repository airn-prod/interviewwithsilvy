import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import CallToAction from "./CallToAction";

const Header: React.FC = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVisible(true);
    }, 3750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header>
      <TextGenerateEffect
        words="Meet Silvy. Your virtual assistant who can help you practice for your job interview."
        className="text-xl font-light text-neutral-400 max-md:max-w-full"
      />
      {buttonVisible==true && <CallToAction />}
    </header>
  );
};

export default Header;
