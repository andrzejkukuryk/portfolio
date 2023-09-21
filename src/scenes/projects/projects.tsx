import React from "react";
import styles from "./projects.module.scss";
import { useNavContext } from "../../data/navProvider";
import { usePosition } from "../../hooks/usePosition";

export function Projects() {
  const { updateProjectsPosition } = useNavContext();
  const { ref } = usePosition(updateProjectsPosition);

  return (
    <section id="projects" ref={ref} className={styles.container}></section>
  );
}
