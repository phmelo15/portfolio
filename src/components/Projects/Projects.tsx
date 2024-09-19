"use client";

import {
  DogImages,
  GvImages,
  MedImages,
  SipoImages,
  VaptImages,
  praticoImages,
} from "@/constants/ImagesList";
import { ProjectDetailsText } from "@/constants/ProjectDetailsText";
import { useState } from "react";
import Button from "../Button/Button";
import CarrouselCard from "../CarrouselCard/CarrouselCard";

export default function Projects() {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section
      className="w-full flex flex-col justify-center items-center bg-backgroundHome pt-[80px]"
      id="projects"
    >
      <text className={`text-[30px] font-extrabold font-strong`}>
        <strong className=" bg-gradient-to-r from-orange-orangeOne to-orange-orangeTwo bg-clip-text text-transparent">
          PROJETOS
        </strong>
      </text>
      <div className="flex flex-col lg:flex-row w-[44%] gap-[12px] my-[30px] items-center justify-center">
        <CarrouselCard
          name="Prático RT"
          imagesArray={praticoImages}
          projectDetailsText={ProjectDetailsText.PraticoRT}
        />
        <CarrouselCard
          name="Cidadania GV"
          imagesArray={GvImages}
          projectDetailsText={ProjectDetailsText.CidadaniaGV}
        />
      </div>
      {showDetails && (
        <>
          <div className="flex flex-col lg:flex-row w-[44%] gap-[12px] mb-[30px] items-center justify-center">
            <CarrouselCard
              name="Sipolatti"
              imagesArray={SipoImages}
              projectDetailsText={ProjectDetailsText.Sipolatti}
            />
            <CarrouselCard
              name="Dog Plan"
              imagesArray={DogImages}
              projectDetailsText={ProjectDetailsText.DogPlan}
            />
          </div>
          <div className="flex flex-col lg:flex-row w-[44%] gap-[12px] mb-[30px] items-center justify-center">
            <CarrouselCard
              name="MedSempre"
              imagesArray={MedImages}
              projectDetailsText={ProjectDetailsText.MedSempre}
            />
            <CarrouselCard
              name="Vapt"
              imagesArray={VaptImages}
              projectDetailsText={ProjectDetailsText.Vapt}
            />
          </div>
        </>
      )}
      <Button
        button={showDetails ? "Visualizar -" : "Visualizar +"}
        marginBottom="mb-[80px]"
        onclick={toggleDetails}
      />
    </section>
  );
}
