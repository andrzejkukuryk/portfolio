import React from "react";
import styles from "./infoButton.module.scss";

interface InfoButtonProps {
  handleClick: () => void;
  text: string;
}

export function InfoButton({ handleClick, text }: InfoButtonProps) {
  return (
    <button onClick={handleClick} className={styles.btn}>
      {text}
    </button>
  );
}
