import React from "react";
import styles from "./tileButton.module.scss";
import classNames from "classnames";

interface TileButtonProps {
  handleClick: () => void;
  label: string;
  dark?: boolean;
}

export function TileButton({ handleClick, label, dark }: TileButtonProps) {
  const tileBtnClass = classNames([styles.tileBtn], {
    [styles.dark]: dark,
  });

  return (
    <button onClick={handleClick} className={tileBtnClass}>
      {label}
    </button>
  );
}
