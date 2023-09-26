import React from "react";
import styles from "./projectCard.module.scss";
import { ProjectInfo } from "../../models/projects";

interface ProjectCardProps {
  project: ProjectInfo;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.container}>
      <img src={project.imgUrl} className={styles.image} alt={project.title} />
      <div className={styles.description}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.buttonsContainer}>
          <button>Live</button>
          <button>Repository</button>
        </div>
      </div>
    </div>
  );
}
