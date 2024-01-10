import { getIcons } from "../../../../assets";
import { IconsType } from "../../../../assets/types";
import Avatar from "../../../../assets/images/avatar.png";
import React, { useState } from "react";
import NextImage from "next/image";
import { useDarkMode } from "@/src/hooks/useDarkMode";
import motion from "framer-motion";

const Footer = (): JSX.Element => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggledarkMode = () => {
    setTheme(colorTheme);
    setDarkSide((state) => !state);
  };

  return (
    <div className="flex flex-row justify-center items-center md:flex-col">
      <div
        onClick={toggledarkMode}
        className="pb-0 md:pb-6 duration-150 ease-in-out animate-pulse cursor-pointer"
      >
        {colorTheme === "light"
          ? getIcons(IconsType.light)
          : getIcons(IconsType.dark)}
      </div>
      <hr className="w-full px-6 stroke-grey25  rotate-90 md:rotate-0" />
      <div className="py-0 px-0 md:py-6 md:px-6">
        <div className="w-7 h-7 md:w-10 md:h-10 relative rounded pr-6 md:mr-0 mr-6">
          <NextImage
            layout="fill"
            className="object-cover hover:border-solid hover:border-4 duration-200 ease-in-out hover:border-primary rounded-full"
            src={Avatar}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
