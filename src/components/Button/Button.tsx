import React from "react";
import { styles } from "./styles";

interface IButton {
  button: string;
  marginBottom?: string;
}

export default function Button({ button, marginBottom }: IButton) {
  return (
    <button className={`${styles.Button} ${marginBottom}`}>
      <text className={styles.TextButton}>{button}</text>
    </button>
  );
}
