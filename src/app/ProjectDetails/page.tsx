"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Carrousel from "@/components/Carrousel/Carrousel";
import {
  GvImages,
  praticoImages,
  DogImages,
  MedImages,
  SipoImages,
  VaptImages,
} from "@/constants/ImagesList";

type ProjectTitles =
  | "Prático RT"
  | "Cidadania GV"
  | "Sipolatti Vendedor"
  | "Dog Plan"
  | "MedSempre"
  | "Vapt";

export default function ProjectDetails() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") as ProjectTitles | null;
  const projectDesc = searchParams.get("projectDesc");

  const returnImage: Record<ProjectTitles, any[]> = {
    "Prático RT": praticoImages,
    "Cidadania GV": GvImages,
    "Sipolatti Vendedor": SipoImages,
    "Dog Plan": DogImages,
    MedSempre: MedImages,
    Vapt: VaptImages,
  };

  return (
    <div className="flex flex-col min-h-screen px-[50px] pt-[150px]">
      <h1 className="text-[18px]">{title}</h1>
      <p className="text-[14px] my-[40px] mb-[80px]">{projectDesc}</p>
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
