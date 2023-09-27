import React from "react";
import styles from "./projectCard.module.scss";
import { ProjectInfo } from "../../models/projects";

interface ProjectCardProps {
  project: ProjectInfo;
}

export function ProjectCard({ project }: ProjectCardProps) {
const handleClickLiveButton = () => {
  window.open(project.appUrl, "_blank");
};

const handleClickRepoButton = () => {
  window.open(project.repositoryUrl, "_blank");
};

return (
  <div className={styles.container}>
    <img src={project.imgUrl} className={styles.image} alt={project.title} />

    <div className={styles.description}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.stackContainer}>
        <h5>Stack used:</h5>
        <div>
          {project.stack.map((icon) => (
            <icon.component className={styles.stackIcon} />
          ))}
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={handleClickLiveButton}>Live</button>
        <button onClick={handleClickRepoButton}>Repository</button>
      </div>
    </div>
  </div>
);
}
