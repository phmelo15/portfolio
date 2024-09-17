import React from "react";
import { styles } from "./styles";

interface IButton {
  button: string;
  marginBottom?: string;
  onclick: () => void;
}

export default function Button({ button, marginBottom, onclick }: IButton) {
  return (
    <button className={`${styles.Button} ${marginBottom}`} onClick={onclick}>
      <text className={styles.TextButton}>{button}</text>
    </button>
  );
}
