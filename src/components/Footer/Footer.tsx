import React from "react";
import { styles } from "./styles";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.Container}>
      <text className="pl-[100px] text-[11px]">
        Pedro Henrique Melo Tavares{" "}
      </text>
      <FaRegCopyright
        style={{
          marginRight: 3,
          marginLeft: 3,
        }}
      />
      <text className="text-[11px]"> 2024</text>
    </div>
  );
}
