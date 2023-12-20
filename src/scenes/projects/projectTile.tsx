import React from "react";
import styles from "./projectTile.module.scss";
import { ProjectInfo } from "../../models/projects";
import { TilePhoto } from "./tilePhoto";
import { TileDescription } from "./tileDescription";

interface ProjectTileProps {
  project: ProjectInfo;
}

export function ProjectTile({ project }: ProjectTileProps) {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.tileContainer}>
        <TilePhoto imgPrev={project.imgPrev} title={project.title} />
        <TileDescription
          title={project.title}
          description={project.shortTranslationKey}
          appUrl={project.appUrl}
          repositoryUrl={project.repositoryUrl}
        />
      </div>
    </div>
  );
}
