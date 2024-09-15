import React from "react";
import { styles } from "./styles";

export default function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Nav}>
        <div className={styles.Signature}>
          <text className="font-main">Pedro</text>
        </div>
        <button>
          <text>Home</text>
        </button>
        <button>
          <text>Projetos</text>
        </button>
        <button>
          <text>Experiencia</text>
        </button>
      </div>
    </div>
  );
}
