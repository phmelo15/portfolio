import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import { styles } from "./styles";
import { strongFontFamily } from "@/app/layout";
import { Icons } from "@/constants/Icons";
import Image from "next/image";
import { RiShareBoxLine } from "react-icons/ri";

interface ICarrouselCard {
  name: string;
  imagesArray: string[];
}

export default function CarrouselCard({ name, imagesArray }: ICarrouselCard) {
  return (
    <div className={styles.Container}>
      <Carrousel imagesArray={imagesArray} />
      <button className={styles.DescContainer}>
        <div className="flex flex-col">
          <text
            className={`text-[9px] font-strong font-bold text-secundary-graySeven`}
          >
            CLIQUE PARA VER DETALHES
          </text>
          <text className="text-[16px]">{name}</text>
        </div>
        <RiShareBoxLine />
      </button>
    </div>
  );
}
