import { strongFontFamily } from "@/app/layout";
import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Image from "next/image";
import { Images } from "@/constants/Images";
import { styles } from "../AboutMe/styles";
import CarrouselCard from "../CarrouselCard/CarrouselCard";
import Button from "../Button/Button";

export default function Projects() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-backgroundHome pt-[80px]">
      <text
        className={`text-[30px] font-extrabold ${strongFontFamily.variable} font-strong`}
      >
        <strong className=" bg-gradient-to-r from-orange-orangeOne to-orange-orangeTwo bg-clip-text text-transparent">
          PROJETOS
        </strong>
      </text>
      <div className="flex flex-col lg:flex-row w-[44%] gap-[12px] mt-[30px] items-center justify-center">
        <CarrouselCard name="Sipolatti" />
        <CarrouselCard name="Dog Plan" />
      </div>
      <Button button="Visualizar +" marginBottom="mb-[80px]" />
    </div>
  );
}
