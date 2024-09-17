"use client";

import { useState } from "react";
import Button from "../Button/Button";
import CarrouselCard from "../CarrouselCard/CarrouselCard";
import { FaPlus } from "react-icons/fa6";
import { Images } from "@/constants/Images";

export default function Projects() {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const praticoImages = [
    Images.PraticoRT,
    Images.praticoList,
    Images.praticoMap,
  ];

  const GvImages = [Images.GvLogin, Images.GvList, Images.GvMap, Images.GvHour];
  const SipoImages = [Images.SipoOne, Images.SipoTwo, Images.SipoThree];
  const DogImages = [
    Images.DogPre,
    Images.DogLogin,
    Images.DogHome,
    Images.DogList,
    Images.DogPlan,
  ];
  const MedImages = [
    Images.MedPre,
    Images.MedLogin,
    Images.MedHome,
    Images.MedList,
    Images.MedProfile,
  ];

  const VaptImages = [
    Images.VaptLogin,
    Images.VaptPod,
    Images.VaptTwo,
    Images.VapThree,
  ];

  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-backgroundHome pt-[80px]"
      id="projects"
    >
      <text className={`text-[30px] font-extrabold font-strong`}>
        <strong className=" bg-gradient-to-r from-orange-orangeOne to-orange-orangeTwo bg-clip-text text-transparent">
          PROJETOS
        </strong>
      </text>
      <div className="flex flex-col lg:flex-row w-[44%] gap-[12px] my-[30px] items-center justify-center">
        <CarrouselCard name="Prático RT" imagesArray={praticoImages} />
        <CarrouselCard name="Cidadania GV" imagesArray={GvImages} />
      </div>
      {showDetails && (
        <>
          <div className="flex flex-col lg:flex-row w-[44%] gap-[12px] mb-[30px] items-center justify-center">
            <CarrouselCard name="Sipolatti" imagesArray={SipoImages} />
            <CarrouselCard name="Dog Plan" imagesArray={DogImages} />
          </div>
          <div className="flex flex-col lg:flex-row w-[44%] gap-[12px] mb-[30px] items-center justify-center">
            <CarrouselCard name="MedSempre" imagesArray={MedImages} />
            <CarrouselCard name="Vapt" imagesArray={VaptImages} />
          </div>
        </>
      )}
      <Button
        button={showDetails ? "Visualizar -" : "Visualizar +"}
        marginBottom="mb-[80px]"
        onclick={toggleDetails}
      />
    </div>
  );
}
