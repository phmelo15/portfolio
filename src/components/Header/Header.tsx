import React from "react";
import { styles } from "./styles";
import Image from "next/image";
import { Images } from "@/constants/Images";

export default function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Nav}>
        <div className={styles.Signature}>
          <Image
            src={Images.Assignature}
            alt="my photo"
            className="w-[150px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-row justify-between">
          <button>
            <text>Sobre mim</text>
          </button>
          <button>
            <text>Projetos</text>
          </button>
          <button>
            <text>Experiência</text>
          </button>
        </div>
      </div>
    </div>
  );
}
