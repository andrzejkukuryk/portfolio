import React from "react";
import styles from "./home.module.scss";
import { StackList } from "./stackList";
import { PersonalLinks } from "./personalLinks";
import { Greeting } from "./greeting";
import { useNavContext } from "../../data/navProvider";
import { usePosition } from "../../hooks/usePosition";

export function Home() {
  const { updateHomePosition } = useNavContext();
  const { ref } = usePosition(updateHomePosition);

  return (
    <section id="home" ref={ref} className={styles.container}>
      <div className={styles.innerContainer}>
        <Greeting />
        <PersonalLinks />
        <StackList />
      </div>
    </section>
  );
}
