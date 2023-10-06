import React from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import styles from "./stackCarouselButton.module.scss";
import classNames from "classnames";

type DirectionType = "prev" | "next";

interface StackCarouselButtonProps {
  fctn: () => void;
  direction: DirectionType;
}

export function StackCarouselButton({
  fctn,
  direction,
}: StackCarouselButtonProps) {
  const arrowClass = classNames(styles.arrow, {
    [styles.prev]: direction === "prev",
  });

  return (
    <button className={styles.btn} onClick={fctn}>
      <Arrow className={arrowClass} />
    </button>
  );
}
