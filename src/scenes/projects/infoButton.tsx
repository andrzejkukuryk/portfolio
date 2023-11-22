import React from "react";
import styles from "./infoButton.module.scss";

interface InfoButtonProps {
  ftn: () => void;
}

export function InfoButton({ ftn }: InfoButtonProps) {
  return (
    <button onClick={ftn} className={styles.btn}>
      Read more
    </button>
  );
}
