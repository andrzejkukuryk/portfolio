import React from "react";
import styles from "./greeting.module.scss";
import { Message } from "./message";

export function Greeting() {
  return (
    <div className={styles.container}>
      <p className={styles.tag}>{"</>"}</p>
      <Message />
    </div>
  );
}
