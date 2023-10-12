import React from "react";
import { ProjectInfo } from "../../models/projects";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import styles from "./projectDescription.module.scss";
import { Mockup } from "./mockup";
import { ProjectCardStack } from "./projectCardStack";

interface ProjectDescriptionProps {
  project: ProjectInfo;
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProjectDescription({
  project,
  showInfo,
  setShowInfo,
}: ProjectDescriptionProps) {
  const handleClickBack = () => {
    setShowInfo(false);
  };

  const descriptionParagraphs = () => {
    return project.description
      .split("\n")
      .map((str) => <p key={`paragraph${str[1]}${str[3]}${str[4]}`}>{str}</p>);
  };

  const handleClickLiveButton = () => {
    window.open(project.appUrl, "_blank");
  };

  const handleClickRepoButton = () => {
    window.open(project.repositoryUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <BackIcon onClick={handleClickBack} className={styles.backIcon} />
      <Mockup project={project} />
      <div className={styles.projectInfo}>
        <h3>{project.title}</h3>
        <ProjectCardStack stack={project.stack} />
        {descriptionParagraphs()}
        <div>
          <button onClick={handleClickLiveButton}>live</button>
          <button onClick={handleClickRepoButton}>repository</button>
        </div>
      </div>
    </div>
  );
}
