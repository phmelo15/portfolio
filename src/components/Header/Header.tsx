"use client";

import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import Image from "next/image";
import { Images } from "@/constants/Images";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        // Se o scrollY é 0, o usuário está no topo, então o header deve ser mostrado
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        // Se estiver rolando para baixo, esconda o header
        setIsVisible(false);
      } else {
        // Se estiver rolando para cima, mostre o header
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[80px] bg-Nav flex items-center justify-center fixed top-0 shadow-md transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className={styles.Nav}>
        <div className={styles.Signature}>
          <Image
            src={Images.Assignature}
            alt="my photo"
            className="w-[150px]"
          />
        </div>
        <ul className="w-full md:w-1/2 flex flex-row justify-between items-center">
          <li>
            <a href="#about-me">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
