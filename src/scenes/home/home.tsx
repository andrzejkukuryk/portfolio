import React from "react";
import styles from "./home.module.css";
import { Message } from "./message";
import { StackItem } from "./stackItem";
import { stack } from "../../models/stackIcons";
import { Menu } from "./menu/menu";
export function Home() {
  return (
    <section id="home" className={styles.container}>
      <Menu />
      <Message />
      <StackItem item={stack[3]} />
    </section>
  );
}
