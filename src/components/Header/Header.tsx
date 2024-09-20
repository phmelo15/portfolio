"use client";

import React, { useCallback, useEffect, useState } from "react";
import { styles } from "./styles";
import Image from "next/image";
import { Images } from "@/constants/Images";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoIosReturnLeft } from "react-icons/io";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const controlHeader = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY, controlHeader]);

  return (
    <header
      className={`w-full h-[80px] bg-Nav flex items-center justify-center fixed top-0 shadow-md transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className={styles.Nav}>
        <button
          className={styles.Signature}
          onClick={() => console.log(pathname)}
        >
          <Image
            src={Images.Assignature}
            alt="my photo"
            className="w-[150px]"
          />
        </button>
        {pathname === "/ProjectDetails" ? (
          <button
            className="text-white flex flex-row items-center"
            onClick={() => router.back()}
          >
            <IoIosReturnLeft size={22} />
            <text className="ml-[10px]">Voltar</text>
          </button>
        ) : (
          <ul className="w-full md:w-1/2 flex flex-row justify-between items-center">
            <li>
              <a href="#about-me" className="text-white">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white">
                Projetos
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white">
                Experiência
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
