import React from "react";
import styles from "./about.module.scss";
import { useNavContext } from "../../data/navProvider";
import { usePosition } from "../../hooks/usePosition";
import { story } from "../../data/about";
import { PersonalLinks } from "./personalLinks";
import { StackList } from "./stackList";

export function About() {
  const { updateAboutPosition } = useNavContext();
  const { ref } = usePosition(updateAboutPosition);

  return (
    <section ref={ref} id="about" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>About me</h2>
        <p className={styles.story}>{story}</p>
        <StackList />
        <PersonalLinks />
      </div>
    </section>
  );
}
