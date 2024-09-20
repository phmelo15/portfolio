import { strongFontFamily } from "@/app/layout";

export const styles = {
  Container:
    "w-full flex flex-col justify-center items-center bg-backgroundHome pb-[100px]",
  Title: `text-[30px] font-extrabold ${strongFontFamily.variable} font-strong`,
  TitleMark:
    "bg-gradient-to-r from-blue-blueSix to-blue-blueSeven bg-clip-text text-transparent",
  ContainerExperience:
    "w-[70%] md:w-1/2 mt-[50px] flex flex-row items-center pl-[5px] justify-between",
  Logo: "pr-5",
  ContainerText:
    "w-full flex flex-col md:flex-row justify-between md:items-center",
  Cargo: "font-bold text-white",
  Date: "text-[11px] mt-3 md:mt-0 text-white",
};
