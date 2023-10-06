import React from "react";
import styles from "./stackList.module.scss";
import { StackCarousel } from "./stackCarousel";

export function StackList() {
  return (
    <div className={styles.container}>
      <h3>Technical stack:</h3>
      <StackCarousel />
    </div>
  );
}
