"use client";

import { Images } from "@/constants/Images"; // Seu arquivo de imagens
import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imagesArray = [Images.dogPlanCard, Images.sipolattiLogo];

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
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex justify-center items-center">
        <button onClick={prevSlide} className="absolute left-0 p-2">
          &#8592;
        </button>

        <div className="overflow-hidden w-full">
          <Image
            src={imagesArray[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="rounded-t-[18px] h-[200px]"
            width={600}
            height={400}
          />
        </div>

        <button onClick={nextSlide} className="absolute right-0 p-2">
          &#8594;
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
