"use client";
import { Icons } from "@/constants/Icons";
import Image from "next/image";
import { useState } from "react";
import { styles } from "./styles";

export default function Technologies() {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <button className={styles.ButtonTec} onClick={toggleDetails}>
        <Image src={Icons.React} alt="my photo" className={"w-[35px]"} />
        <Image src={Icons.Nodejs} alt="my photo" className={"w-[30px]"} />
        <Image src={Icons.Javascript} alt="my photo" className={"w-[28px]"} />
        <Image src={Icons.Html} alt="my photo" className={"w-[26px]"} />
        <Image src={Icons.Css} alt="my photo" className={"w-[26px]"} />
      </button>
      {showDetails && (
        <div className={styles.ContainerTec}>
          <text className={styles.TextTec}> - React</text>
          <text className={styles.TextTec}> - React Native</text>
          <text className={styles.TextTec}> - Node.js</text>
          <text className={styles.TextTec}> - Nest.js</text>
          <text className={styles.TextTec}> - Next.js</text>
          <text className={styles.TextTec}> - TypeScript.js</text>
          <text className={styles.TextTec}> - JavaScript</text>
          <text className={styles.TextTec}> - WordPress</text>
          <text className={styles.TextTec}> - MongoDB</text>
          <text className={styles.TextTec}> - MySQL</text>
          <text className={styles.TextTec}> - PostgreSQL</text>
          <text className={styles.TextTec}> - Firebase</text>
        </div>
      )}
    </>
  );
}
