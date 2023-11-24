import React from "react";
import styles from "./infoButton.module.scss";
import classNames from "classnames";

interface InfoButtonProps {
  ftn: () => void;
  text: string;
}

export function InfoButton({ ftn, text }: InfoButtonProps) {
  return (
    <button onClick={ftn} className={styles.btn}>
      {text}
    </button>
  );
}
