import React from "react";
import styles from "./home.module.css";
import { StackList } from "./stackList";
import { PersonalLinks } from "./personalLinks";
import { Greeting } from "./greeting";

export function Home() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.innerContainer}>
        <Greeting />
        <PersonalLinks />
        <StackList />
      </div>
    </section>
  );
}
