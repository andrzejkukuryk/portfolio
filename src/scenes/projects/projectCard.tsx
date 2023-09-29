import React from "react";
import styles from "./projectCard.module.scss";
import { ProjectInfo } from "../../models/projects";
import { ProjectCardStack } from "./projectCardStack";

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
      <div className={styles.imageContainer}>
        <img
          src={project.imgUrl}
          className={styles.image}
          alt={project.title}
        />
        <ProjectCardStack stack={project.stack} />
      </div>
      <div className={styles.description}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.buttonsContainer}>
          <button onClick={handleClickLiveButton}>Live</button>
          <button onClick={handleClickRepoButton}>Repository</button>
        </div>
      </div>
    </div>
  );
}
