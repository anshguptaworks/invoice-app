import { getIcons } from "../../../../assets";
import { IconsType } from "../../../../assets/types";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Header = (): JSX.Element => {
  const [rotationDegree, setRotationDegree] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    setRotationDegree(rotationDegree + 360);
    router.push("/");
  };

  return (
    <div className="h-[4.5rem] md:h-[6.4375rem] flex flex-col justify-end items-center duration-1000 bg-primary hover:bg-secondary ease-linear rounded-e-2xl ">
      <div
        onClick={handleClick}
        className="relative -bottom-4 duration-1000 ease-in-out cursor-pointer md:bottom-[-1.375rem] w-7 h-7 md:w-10 md:h-10 hover:animate-pulse"
        style={{
          transform: `rotate(${rotationDegree}deg)`,
        }}
      >
        {getIcons(IconsType.logo)}
      </div>
      <div className="w-[4.5rem] h-[2.25rem] md:w-[6.4375rem] md:h-[3.1875rem]">
        {getIcons(IconsType.curved)}
      </div>
    </div>
  );
};

export default Header;
