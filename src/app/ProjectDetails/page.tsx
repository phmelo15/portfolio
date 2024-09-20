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

export default function ProjectDetails() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const projectDesc = searchParams.get("projectDesc");

  const returnImage = {
    "Prático RT": praticoImages,
    "Cidadania GV": GvImages,
    "Sipolatti Vendedor": SipoImages,
    "Dog Plan": DogImages,
    MedSempre: MedImages,
    Vapt: VaptImages,
  };

  return (
    <div className="flex flex-col min-h-screen px-[50px] pt-[150px]">
      <text className="text-[18px]">{title}</text>
      <text className="text-[14px] my-[40px] mb-[80px]">{projectDesc}</text>
      <div className="mb-[100px]">
        <Carrousel imagesArray={returnImage[title]} />
      </div>
    </div>
  );
}
