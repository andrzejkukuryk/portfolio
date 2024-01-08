import React, { useState } from "react";
import styles from "./projectTile.module.scss";
import { ProjectInfo } from "../../models/projects";
import { TilePhoto } from "./tilePhoto";
import { TileDescription } from "./tileDescription";
import classNames from "classnames";
import { ProjectCard } from "./projectCard";

interface ProjectTileProps {
  project: ProjectInfo;
  even: boolean;
}

export function ProjectTile({ project, even }: ProjectTileProps) {
  const [showProjectCard, setShowProjectCard] = useState(false);

  const handleClick = () => {
    setShowProjectCard(true);
  };
  const containerClass = classNames([styles.tileContainer], {
    [styles.evenTile]: even,
  });

  return (
    <div className={styles.outerWrapper}>
      <div className={containerClass} onClick={handleClick}>
        <TilePhoto imgPrev={project.imgPrev} title={project.title} />
        <TileDescription
          title={project.title}
          description={project.shortTranslationKey}
          appUrl={project.appUrl}
          repositoryUrl={project.repositoryUrl}
        />
      </div>
      {showProjectCard && (
        <ProjectCard
          project={project}
          showProjectCard={showProjectCard}
          setShowProjectCard={setShowProjectCard}
        />
      )}
    </div>
  );
}
