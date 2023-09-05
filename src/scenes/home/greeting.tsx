import React from "react";
import styles from "./greeting.module.css";
import { Message } from "./message";
import { Photo } from "./photo";

export function Greeting() {
  return (
    <div className={styles.container}>
      <Message />
      <Photo />
    </div>
  );
}
