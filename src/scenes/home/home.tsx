import React from "react";
import styles from "./home.module.css";
import { Message } from "./message";
import { StackItem } from "./stackItem";
import { stack } from "../../data/stackIcons";
import { StackList } from "./stackList";

export function Home() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.innerContainer}>
        <Message />
        <StackList />
      </div>
    </section>
  );
}
