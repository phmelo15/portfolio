import React from "react";
import Header from "../../components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import { styles } from "./styles";

export default function page() {
  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.MainContent}>
        <AboutMe />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </div>
  );
}
