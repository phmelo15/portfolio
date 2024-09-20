import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import { styles } from "./styles";

export default function page() {
  return (
    <div className={styles.Container}>
      <div className={styles.MainContent}>
        <AboutMe />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}
