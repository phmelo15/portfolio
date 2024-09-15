import { Images } from "@/constants/Images";
import Image from "next/image";
import React from "react";
import { styles } from "./styles";
import { strongFontFamily } from "@/app/layout";

export default function AboutMe() {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerPhoto}>
        <Image
          src={Images.profilePic}
          alt="my photo"
          className={styles.Photo}
        />
        <text
          className={`${strongFontFamily.variable} font-strong font-extrabold text-[50px] mt-[20px]`}
        >
          Bem vindo ao meu{" "}
          <strong className=" bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
            portfólio! {":)"}
          </strong>
        </text>
        <text className={styles.ExperienceDesc}>
          Olá! Meu nome é Pedro Henrique Melo Tavares, sou desenvolvedor
          full-stack com mais de três anos de experiência comprovada, atuando
          tanto como freelancer quanto em empresas, como a Globalsys, onde
          trabalhei por dois anos e meio. Tenho sólida expertise em
          desenvolvimento web, mobile e backend, utilizando tecnologias como
          TypeScript, React, React Native, Node.js, Nest.js, Next.js e
          WordPress. Minha experiência envolve desde a criação de aplicativos
          móveis até o desenvolvimento de plataformas web robustas e escaláveis.
          Com foco nas necessidades dos clientes, entrego soluções eficientes e
          inovadoras, sempre aderindo às melhores práticas de desenvolvimento.
        </text>
        <text
          className={`font-semibold ${strongFontFamily.variable} font-strong text-secundary-graySeven tracking-[3px] text-[12px] mt-[60px]`}
        >
          TECNOLOGIAS
        </text>
        <Image
          src={Images.Logos}
          alt="my photo"
          className={"my-[40px] w-[300px]"}
        />
      </div>
    </div>
  );
}
