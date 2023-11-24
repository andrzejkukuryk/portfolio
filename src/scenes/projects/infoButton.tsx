import React from "react";
import styles from "./infoButton.module.scss";
import classNames from "classnames";

interface InfoButtonProps {
  ftn: () => void;
  text: string;
  positionNeutral: boolean;
}

export function InfoButton({ ftn, text, positionNeutral }: InfoButtonProps) {
  const btnClass = classNames([styles.btn], {
    [styles.positionNeutral]: positionNeutral,
  });

  return (
    <button onClick={ftn} className={btnClass}>
      {text}
    </button>
  );
}
