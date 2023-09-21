import React from "react";
import styles from "./about.module.scss";
import { useNavContext } from "../../data/navProvider";
import { usePosition } from "../../hooks/usePosition";

export function About() {
  const { updateAboutPosition } = useNavContext();
  const { ref } = usePosition(updateAboutPosition);

  return <section ref={ref} id="about" className={styles.container}></section>;
}
