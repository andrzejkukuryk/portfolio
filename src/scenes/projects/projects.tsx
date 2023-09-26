import React from "react";
import styles from "./projects.module.scss";
import { useNavContext } from "../../data/navProvider";
import { usePosition } from "../../hooks/usePosition";
import { projects } from "../../data/projects";
import { ProjectCard } from "./projectCard";

export function Projects() {
  const { updateProjectsPosition } = useNavContext();
  const { ref } = usePosition(updateProjectsPosition);

  console.log(projects[0].stack);

  return (
    <section id="projects" ref={ref} className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Projects</h2>
        <ProjectCard project={projects[0]} />
      </div>
    </section>
  );
}
