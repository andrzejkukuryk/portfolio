import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/back.svg";
import styles from "./scrollDown.module.scss";

export function ScrollDown() {
  return (
    <div className={styles.container}>
      <a href="#about">
        <div className={styles.circle}>
          <ArrowDown className={styles.arrow} />
        </div>
      </a>
    </div>
  );
}
