import React from "react";
import Header from "../../components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function page() {
  return (
    <div className="bg-backgroundHome h-full h-screen">
      <Header />
      <AboutMe />
    </div>
  );
}
