import React, { useState } from "react";
import styles from "./projectCard.module.scss";
import { ProjectInfo } from "../../models/projects";
import { ProjectDescription } from "./projectDescription";
import { Mockup } from "./mockup";
import { InfoButton } from "./infoButton";

interface ProjectCardProps {
  project: ProjectInfo;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showInfo, setShowInfo] = useState(false);

  const handleClickInfo = () => {
    setShowInfo(true);
  };

  return (
    <div className={styles.container}>
      <Mockup project={project} showInfo={showInfo} />
      <InfoButton
        ftn={handleClickInfo}
        text="Read more"
        positionNeutral={false}
      />
      {showInfo && (
        <ProjectDescription
          project={project}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
      )}
    </div>
  );
}
