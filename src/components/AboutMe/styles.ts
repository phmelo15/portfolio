import { strongFontFamily } from "@/app/layout";

export const styles = {
  Photo: "h-[170px] w-[170px] rounded-full mt-[150px]",
  Container: "w-full flex justify-center bg-backgroundHome",
  ContainerPhoto: "flex flex-col items-center",
  ExperienceDesc: `${strongFontFamily.variable} font-strong max-w-[480px] text-center text-[12px] mt-[80px] text-secundary-graySeven`,
  Presentation: `max-w-md text-[32px] text-center md:max-w-full ${strongFontFamily.variable} font-strong font-extrabold md:text-[50px] mt-[40px] text-white`,
  Mark: " bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent",
  TitleTec: `font-semibold ${strongFontFamily.variable} font-strong text-secundary-graySeven tracking-[3px] text-[12px] mt-[60px]`,
};
