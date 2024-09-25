"use client";

import Carrousel from "@/components/Carrousel/Carrousel";
import { Icons } from "@/constants/Icons";
import {
  DogImages,
  GvImages,
  MedImages,
  SipoImages,
  VaptImages,
  praticoImages,
} from "@/constants/ImagesList";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type ProjectTitles =
  | "Prático RT"
  | "Cidadania GV"
  | "Sipolatti Vendedor"
  | "Dog Plan"
  | "MedSempre"
  | "Vapt";

export default function ProjectDetailsContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") as ProjectTitles;
  const projectDesc = searchParams.get("projectDesc");

  const returnImage: Record<ProjectTitles, string[]> = {
    "Prático RT": praticoImages,
    "Cidadania GV": GvImages,
    "Sipolatti Vendedor": SipoImages,
    "Dog Plan": DogImages,
    MedSempre: MedImages,
    Vapt: VaptImages,
  };

  const returnPlayStore: Record<ProjectTitles, string> = {
    "Prático RT":
      "https://play.google.com/store/apps/details?id=com.pratico.rt",
    "Cidadania GV":
      "https://play.google.com/store/apps/details?id=com.globalsys.cidadaniagv",
    "Sipolatti Vendedor":
      "https://play.google.com/store/apps/details?id=com.sipolatti",
    "Dog Plan": "https://play.google.com/store/apps/details?id=com.dogplan",
    MedSempre: "https://play.google.com/store/apps/details?id=com.medsempre",
    Vapt: "https://play.google.com/store/apps/details?id=br.com.globalsys.vapt",
  };

  const returnAppStore: Record<ProjectTitles, string> = {
    "Prático RT": "https://apps.apple.com/br/app/praticort/id6449002879",
    "Cidadania GV":
      "https://apps.apple.com/br/app/mnr-m%C3%A3o-na-roda/id6475684125",
    "Sipolatti Vendedor":
      "https://apps.apple.com/br/app/sipolatti/id1642503652",
    "Dog Plan": "https://apps.apple.com/br/app/dogplan/id6480535218",
    MedSempre: "https://apps.apple.com/br/app/medsempre/id6478050725",
    Vapt: "https://apps.apple.com/br/app/vapt-jornada-vix/id1543761379",
  };

  return (
    <div className="flex flex-col min-h-screen px-[50px] pt-[150px]">
      <h1 className="text-[18px] text-white">{title}</h1>
      <a
        href={returnPlayStore[title]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="">
          <Image
            src={Icons.playStore}
            alt="my photo"
            className={"w-[150px]"}
            onClick={() => null}
          />
        </button>
      </a>
      <a href={returnAppStore[title]} target="_blank" rel="noopener noreferrer">
        <button className="">
          <Image
            src={Icons.appStore}
            alt="my photo"
            className={"w-[150px]"}
            onClick={() => null}
          />
        </button>
      </a>
      <p className="text-[14px] my-[40px] mb-[80px] text-white">
        {projectDesc}
      </p>
      <div className="mb-[100px]">
        {title && returnImage[title] ? (
          <Carrousel imagesArray={returnImage[title]} />
        ) : (
          <p>Nenhuma imagem disponível para este projeto.</p>
        )}
      </div>
    </div>
  );
}
