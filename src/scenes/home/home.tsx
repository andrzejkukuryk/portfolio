import React from "react";
import styles from "./home.module.scss";
import { StackList } from "./stackList";
import { PersonalLinks } from "./personalLinks";
import { Greeting } from "./greeting";
import { StackCarousel } from "./stackCarousel";

export function Home() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.innerContainer}>
        <Greeting />
        <PersonalLinks />
        <StackList />
        <StackCarousel />
      </div>
    </section>
  );
}
