import React from "react";
import Image from "next/image";
import mmm from "../app/Images/mmm.png";
import kkk from "../app/Images/kkkk.png";
export default function UpperFooter() {
  return (
    <div className="bg-[#F9F9F9] pt-8 pb-8 flex justify-center items-center">
      <Image
        src={mmm}
        alt=""
        className="sm:hidden md:block md:w-[50rem] lg:w-[65rem] xl:w-[85rem]"
      />
      <Image src={kkk} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
    </div>
  );
}
