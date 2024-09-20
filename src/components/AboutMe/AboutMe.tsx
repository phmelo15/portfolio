import { Images } from "@/constants/Images";
import Image from "next/image";
import Technologies from "../Technologies/Technologies";
import { styles } from "./styles";

export default function AboutMe() {
  return (
    <section className={styles.Container}>
      <div className={styles.ContainerPhoto}>
        <Image
          src={Images.profilePic}
          alt="my photo"
          className={styles.Photo}
        />
        <text className="mt-[20px] text-[12px] text-white">
          Pedro Henrique Melo Tavares
        </text>
        <text className="mt-[2px] text-[12px] text-white" id="about-me">
          Desenvolvedor Full-Stack
        </text>
        <text className={styles.Presentation}>
          Bem vindo ao meu{" "}
          <strong className={styles.Mark}>portfólio! {":)"}</strong>
        </text>
        <text className={styles.ExperienceDesc}>
          Olá! Meu nome é Pedro Henrique Melo Tavares, sou desenvolvedor
          full-stack pleno com mais de três anos de experiência comprovada,
          atuando tanto como freelancer quanto em empresas, como a Globalsys,
          onde trabalhei por dois anos e meio. Tenho sólida expertise em
          desenvolvimento web, mobile e backend, utilizando tecnologias como
          TypeScript, React, React Native, Node.js, Nest.js, Next.js e
          WordPress. Minha experiência envolve desde a criação de aplicativos
          móveis até o desenvolvimento de plataformas web robustas e escaláveis.
          Com foco nas necessidades dos clientes, entrego soluções eficientes e
          inovadoras, sempre aderindo às melhores práticas de desenvolvimento.
        </text>
        <text className={styles.TitleTec}>TECNOLOGIAS</text>
        <Technologies />
      </div>
    </section>
  );
}
