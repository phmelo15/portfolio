"use client";

import { Images } from "@/constants/Images"; // Seu arquivo de imagens
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

interface ICarrousel {
  imagesArray: string[];
}

const Carousel = ({ imagesArray }: ICarrousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [stop, setStop] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // const imagesArray = [
  //   Images.dogPlanCard,
  //   Images.sipolattiLogo,
  //   Images.PraticoRT,
  // ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 7000);
  //   if (stop) {
  //     return () => clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (!stop) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }

    // Limpa o intervalo quando o componente é desmontado ou se o estado "stop" mudar
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [stop]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            prevSlide();
            setStop(true);
          }}
          className="absolute left-0 p-2"
        >
          <FaCircleArrowLeft color="rgba(255,255,255,0.1)" />
        </button>

        <div className="overflow-hidden w-full">
          <Image
            src={imagesArray[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="rounded-t-[18px]"
            width={600}
            height={400}
          />
        </div>

        <button
          onClick={() => {
            nextSlide();
            setStop(true);
          }}
          className="absolute right-0 p-2"
        >
          <FaArrowCircleRight color="rgba(255,255,255,0.1)" />
        </button>
      </div>

      {/* <div className="absolute flex justify-center mt-4 space-x-2">
        {imagesArray.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
